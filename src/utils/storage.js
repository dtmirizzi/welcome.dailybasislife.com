const STORAGE_KEY = 'dailybasis_cycle';

export function saveCycleData({ lastPeriodEndDate, cycleLength = 28 }) {
  try {
    const data = {
      lastPeriodEndDate,
      cycleLength,
      lastUpdated: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Error saving cycle data:', error);
    // Check if it's a quota exceeded error
    if (error.name === 'QuotaExceededError') {
      console.warn('LocalStorage quota exceeded');
    }
    return false;
  }
}

export function loadCycleData() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    
    const parsed = JSON.parse(data);
    
    // Validate data structure
    if (typeof parsed !== 'object' || parsed === null) {
      console.warn('Invalid cycle data format, resetting');
      clearCycleData();
      return null;
    }
    
    return parsed;
  } catch (error) {
    console.error('Error loading cycle data:', error);
    // If data is corrupted, clear it
    clearCycleData();
    return null;
  }
}

export function clearCycleData() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing cycle data:', error);
    return false;
  }
}

// Check if localStorage is available
export function isLocalStorageAvailable() {
  try {
    const test = '__localStorage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (error) {
    return false;
  }
}
