// API Configuration for Bellavista Care Homes
// Centralized API endpoints and utilities

// API Base URLs
const PRIMARY_API_URL = 'https://bellavista-backend-production.up.railway.app/api/tours';
const FALLBACK_API_URL = 'http://localhost:8000/api/tours';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || PRIMARY_API_URL;

// Debug: Log which API URL is being used
console.log('🔗 API Configuration:', {
  'Environment Variable': process.env.REACT_APP_API_BASE_URL,
  'Using URL': API_BASE_URL,
  'Primary URL': PRIMARY_API_URL
});

// API Endpoints
export const API_ENDPOINTS = {
  // Main booking endpoints
  BOOK_TOUR: `${API_BASE_URL}/book/`,
  LIST_BOOKINGS: `${API_BASE_URL}/bookings/`,
  UPDATE_STATUS: (id) => `${API_BASE_URL}/bookings/${id}/status/`,
  
  // Utility endpoints
  TEST_CONNECTION: `${API_BASE_URL}/test/`,
  AVAILABLE_SLOTS: `${API_BASE_URL}/available-slots/`,
  BOOKING_STATS: `${API_BASE_URL}/stats/`,
  FIND_NEAREST_HOME: `${API_BASE_URL}/find-nearest-home/`,
  
  // Export endpoint
  EXPORT_BOOKINGS: `${API_BASE_URL}/export/`,
};

// API utility functions
export const apiRequest = async (url, options = {}) => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    // Create AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 45000); // 45 second timeout for Railway cold starts
    
    const response = await fetch(url, { 
      ...defaultOptions, 
      ...options,
      signal: controller.signal 
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return { success: true, data, status: response.status };
  } catch (error) {
    console.error('API Request Error:', error);
    
    if (error.name === 'AbortError') {
      return { 
        success: false, 
        data: { message: 'Request timeout (45s). Railway server may be sleeping - please try again.' }, 
        status: 0 
      };
    }
    
    return { 
      success: false, 
      data: { message: 'Network error. Please check your connection.' }, 
      status: 0 
    };
  }
};

// Specific API functions
export const bookTour = async (bookingData) => {
  // Wake up Railway server first
  try {
    await fetch(API_ENDPOINTS.TEST_CONNECTION, { method: 'GET' });
  } catch (e) {
    // Ignore wake-up errors
  }
  
  return apiRequest(API_ENDPOINTS.BOOK_TOUR, {
    method: 'POST',
    body: JSON.stringify(bookingData),
  });
};

export const getAvailableSlots = async (date, home) => {
  const url = `${API_ENDPOINTS.AVAILABLE_SLOTS}?date=${date}&home=${home}`;
  return apiRequest(url);
};

export const testConnection = async () => {
  return apiRequest(API_ENDPOINTS.TEST_CONNECTION);
};

export const getBookingStats = async () => {
  return apiRequest(API_ENDPOINTS.BOOKING_STATS);
};

export const findNearestHome = async (location) => {
  const url = `${API_ENDPOINTS.FIND_NEAREST_HOME}?location=${encodeURIComponent(location)}`;
  return apiRequest(url);
};