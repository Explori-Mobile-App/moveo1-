// Local storage utilities for data persistence

export const STORAGE_KEYS = {
  SAVED_PLACES: 'explori_saved_places',
  SAVED_EVENTS: 'explori_saved_events',
  USER_PREFERENCES: 'explori_user_preferences',
  SEARCH_HISTORY: 'explori_search_history',
  BOOKING_DRAFTS: 'explori_booking_drafts'
} as const;

// Generic storage functions
export function getFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading from storage key "${key}":`, error);
    return defaultValue;
  }
}

export function setToStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing to storage key "${key}":`, error);
  }
}

export function removeFromStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing storage key "${key}":`, error);
  }
}

// Specific data functions
export function getSavedPlaces() {
  return getFromStorage(STORAGE_KEYS.SAVED_PLACES, []);
}

export function savePlaceToStorage(place: any) {
  const savedPlaces = getSavedPlaces();
  const updatedPlaces = [...savedPlaces, { ...place, savedAt: Date.now() }];
  setToStorage(STORAGE_KEYS.SAVED_PLACES, updatedPlaces);
}

export function removePlaceFromStorage(placeId: string) {
  const savedPlaces = getSavedPlaces();
  const updatedPlaces = savedPlaces.filter((place: any) => place.id !== placeId);
  setToStorage(STORAGE_KEYS.SAVED_PLACES, updatedPlaces);
}

export function isPlaceSaved(placeId: string): boolean {
  const savedPlaces = getSavedPlaces();
  return savedPlaces.some((place: any) => place.id === placeId);
}

export function getSavedEvents() {
  return getFromStorage(STORAGE_KEYS.SAVED_EVENTS, []);
}

export function saveEventToStorage(event: any) {
  const savedEvents = getSavedEvents();
  const updatedEvents = [...savedEvents, { ...event, savedAt: Date.now() }];
  setToStorage(STORAGE_KEYS.SAVED_EVENTS, updatedEvents);
}

export function getSearchHistory() {
  return getFromStorage(STORAGE_KEYS.SEARCH_HISTORY, []);
}

export function addToSearchHistory(query: string) {
  const history = getSearchHistory();
  const updatedHistory = [query, ...history.filter((item: string) => item !== query)].slice(0, 10);
  setToStorage(STORAGE_KEYS.SEARCH_HISTORY, updatedHistory);
}

export function getUserPreferences() {
  return getFromStorage(STORAGE_KEYS.USER_PREFERENCES, {
    theme: 'light',
    notifications: true,
    location: null,
    currency: 'USD'
  });
}

export function updateUserPreferences(preferences: any) {
  const currentPrefs = getUserPreferences();
  setToStorage(STORAGE_KEYS.USER_PREFERENCES, { ...currentPrefs, ...preferences });
}