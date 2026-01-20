/**
 * Analytics utilities for Vercel Web Analytics
 * 
 * This module provides helper functions to track custom events with Vercel Web Analytics.
 * It safely handles cases where @vercel/analytics is not installed or not available.
 */

type EventData = Record<string, string | number | boolean | undefined>;

/**
 * Track a custom event with Vercel Web Analytics
 * 
 * @param eventName - The name of the event to track
 * @param eventData - Optional data to send with the event
 * 
 * @example
 * ```tsx
 * import { trackEvent } from '@/lib/analytics';
 * 
 * function SignupButton() {
 *   const handleClick = () => {
 *     trackEvent('signup_clicked', {
 *       button_location: 'header',
 *       user_type: 'free'
 *     });
 *   };
 *   
 *   return <button onClick={handleClick}>Sign Up</button>;
 * }
 * ```
 */
export async function trackEvent(eventName: string, eventData?: EventData): Promise<void> {
  try {
    const { track } = await import('@vercel/analytics');
    track(eventName, eventData);
  } catch (e) {
    // Analytics not available or not installed, silently fail
    if (process.env.NODE_ENV === 'development') {
      console.debug(`Analytics not available for event: ${eventName}`);
    }
  }
}

/**
 * Track a page view with Vercel Web Analytics
 * 
 * @param path - The page path to track
 * @param eventData - Optional additional data
 * 
 * @example
 * ```tsx
 * import { trackPageView } from '@/lib/analytics';
 * 
 * useEffect(() => {
 *   trackPageView(location.pathname);
 * }, [location]);
 * ```
 */
export async function trackPageView(path: string, eventData?: EventData): Promise<void> {
  await trackEvent('page_view', {
    path,
    ...eventData,
  });
}

/**
 * Track a button click event
 * 
 * @param buttonName - The name/identifier of the button
 * @param eventData - Optional additional data about the click
 */
export async function trackButtonClick(buttonName: string, eventData?: EventData): Promise<void> {
  await trackEvent('button_click', {
    button_name: buttonName,
    ...eventData,
  });
}

/**
 * Track a form submission event
 * 
 * @param formName - The name/identifier of the form
 * @param eventData - Optional additional data about the submission
 */
export async function trackFormSubmission(formName: string, eventData?: EventData): Promise<void> {
  await trackEvent('form_submission', {
    form_name: formName,
    ...eventData,
  });
}

/**
 * Track a conversion event (e.g., purchase, signup, etc.)
 * 
 * @param conversionType - The type of conversion (e.g., 'purchase', 'signup')
 * @param eventData - Optional additional data about the conversion
 */
export async function trackConversion(conversionType: string, eventData?: EventData): Promise<void> {
  await trackEvent('conversion', {
    conversion_type: conversionType,
    ...eventData,
  });
}
