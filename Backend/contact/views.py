from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactMessage
from .serializers import ContactMessageSerializer


@api_view(['POST'])
def contact_message_create(request):
    """
    Create a new contact message and send email notification
    """
    serializer = ContactMessageSerializer(data=request.data)
    
    if serializer.is_valid():
        # Save message to database
        message = serializer.save()
        
        # Send email notification
        try:
            email_subject = f"New Portfolio Contact: {message.subject}"
            email_body = f"""
You have received a new message from your portfolio website!

Name: {message.name}
Email: {message.email}
Subject: {message.subject}

Message:
{message.message}

---
This message was sent from your portfolio contact form at {message.created_at.strftime('%Y-%m-%d %H:%M:%S')}
            """
            
            send_mail(
                subject=email_subject,
                message=email_body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.RECIPIENT_EMAIL],
                fail_silently=False,
            )
            
            return Response({
                'success': True,
                'message': 'Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.',
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
            
        except Exception as e:
            # Message saved but email failed
            return Response({
                'success': True,
                'message': 'Xabaringiz saqlandi, lekin email yuborishda xatolik yuz berdi.',
                'data': serializer.data,
                'email_error': str(e)
            }, status=status.HTTP_201_CREATED)
    
    return Response({
        'success': False,
        'message': 'Ma\'lumotlarni tekshiring va qaytadan urinib ko\'ring.',
        'errors': serializer.errors
    }, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def health_check(request):
    """API health check endpoint"""
    return Response({
        'status': 'ok',
        'message': 'Portfolio Backend API is running'
    })
