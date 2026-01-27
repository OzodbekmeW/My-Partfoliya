
// API CONFIGURATION
const API_BASE_URL = 'http://localhost:5000/api';

//Helper function to make API calls
async function apiCall(endpoint, options = {}) {
    try {
        const url = `${API_BASE_URL}${endpoint}`;
        const config = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            }
        };

        const response = await fetch(url, config);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Something went wrong');
        }

        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

// ============================================
// API FUNCTIONS
// ============================================

// Contact Form
export async function sendContactForm(formData) {
    return await apiCall('/contact', {
        method: 'POST',
        body: JSON.stringify(formData)
    });
}

// Projects
export async function getProjects(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return await apiCall(`/projects${queryString ? '?' + queryString : ''}`);
}

export async function getProject(id) {
    return await apiCall(`/projects/${id}`);
}

// Skills
export async function getSkills(category = '') {
    return await apiCall(`/skills${category ? '?category=' + category : ''}`);
}

// Experience
export async function getExperience() {
    return await apiCall('/experience');
}

// Authentication
export async function register(userData) {
    return await apiCall('/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData)
    });
}

export async function login(credentials) {
    return await apiCall('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials)
    });
}

export async function getCurrentUser(token) {
    return await apiCall('/auth/me', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

