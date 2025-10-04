// API endpoint definitions for Bravo Studio integration
// Replace with your actual API base URL in Bravo Studio

export const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.explori.co';

export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    PROFILE: '/auth/profile'
  },

  // Places
  PLACES: {
    LIST: '/places',
    SEARCH: '/places/search',
    DETAIL: (id: string) => `/places/${id}`,
    NEARBY: '/places/nearby',
    REVIEWS: (id: string) => `/places/${id}/reviews`,
    BOOK: (id: string) => `/places/${id}/book`
  },

  // Events
  EVENTS: {
    LIST: '/events',
    SEARCH: '/events/search',
    DETAIL: (id: string) => `/events/${id}`,
    JOIN: (id: string) => `/events/${id}/join`,
    ATTENDEES: (id: string) => `/events/${id}/attendees`
  },

  // User
  USER: {
    SAVED_PLACES: '/user/saved/places',
    SAVED_EVENTS: '/user/saved/events',
    BOOKINGS: '/user/bookings',
    PLANS: '/user/plans',
    ACTIVITY: '/user/activity'
  },

  // Posts & Social
  POSTS: {
    CREATE: '/posts',
    LIST: '/posts',
    DETAIL: (id: string) => `/posts/${id}`,
    LIKE: (id: string) => `/posts/${id}/like`,
    COMMENT: (id: string) => `/posts/${id}/comments`
  },

  // Search & Discovery
  SEARCH: {
    GLOBAL: '/search',
    SUGGESTIONS: '/search/suggestions',
    TRENDING: '/search/trending'
  },

  // Notifications
  NOTIFICATIONS: {
    LIST: '/notifications',
    MARK_READ: (id: string) => `/notifications/${id}/read`,
    SETTINGS: '/notifications/settings'
  }
} as const;

// HTTP methods for different operations
export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
} as const;

// Request headers template
export const getHeaders = (token?: string) => ({
  'Content-Type': 'application/json',
  ...(token && { 'Authorization': `Bearer ${token}` })
});

// Example API calls (templates for Bravo Studio)
export const apiCallExamples = {
  // GET request example
  fetchPlaces: async (token?: string) => {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.PLACES.LIST}`, {
      method: HTTP_METHODS.GET,
      headers: getHeaders(token)
    });
    return response.json();
  },

  // POST request example
  createBooking: async (placeId: string, bookingData: any, token?: string) => {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.PLACES.BOOK(placeId)}`, {
      method: HTTP_METHODS.POST,
      headers: getHeaders(token),
      body: JSON.stringify(bookingData)
    });
    return response.json();
  },

  // Search example
  searchPlaces: async (query: string, filters?: any, token?: string) => {
    const params = new URLSearchParams({
      q: query,
      ...(filters && { filters: JSON.stringify(filters) })
    });
    
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.PLACES.SEARCH}?${params}`, {
      method: HTTP_METHODS.GET,
      headers: getHeaders(token)
    });
    return response.json();
  }
};