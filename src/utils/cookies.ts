// Cookie utility functions

/**
 * Get a cookie value by name
 * @param name - The name of the cookie
 * @returns The cookie value or null if not found
 */
export const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  return null;
};

/**
 * Set a cookie with optional expiration
 * @param name - The name of the cookie
 * @param value - The value of the cookie
 * @param days - Number of days until expiration (optional, creates session cookie if not provided)
 * @param secure - Whether to set the secure flag (default: true)
 * @param sameSite - SameSite attribute (default: 'strict')
 */
export const setCookie = (
  name: string, 
  value: string, 
  days?: number, 
  secure: boolean = true, 
  sameSite: 'strict' | 'lax' | 'none' = 'strict'
): void => {
  let cookieString = `${name}=${value}; path=/`;
  
  if (days) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (days * 24 * 60 * 60 * 1000));
    cookieString += `; expires=${expirationDate.toUTCString()}`;
  }
  
  if (secure) {
    cookieString += `; secure`;
  }
  
  cookieString += `; samesite=${sameSite}`;
  
  document.cookie = cookieString;
};

/**
 * Delete a cookie by setting its expiration to the past
 * @param name - The name of the cookie to delete
 */
export const deleteCookie = (name: string): void => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

/**
 * Check if a cookie exists
 * @param name - The name of the cookie
 * @returns True if the cookie exists, false otherwise
 */
export const hasCookie = (name: string): boolean => {
  return getCookie(name) !== null;
};
