import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to track page views with Vercel Web Analytics
 * 
 * This hook automatically tracks page views when the route changes.
 * It sends custom events to Vercel Analytics with the page path and search params.
 * 
 * Usage:
 * ```tsx
 * import { usePageTracking } from '@/hooks/usePageTracking';
 * 
 * export function App() {
 *   usePageTracking();
 *   // ... rest of your component
 * }
 * ```
 */
export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    // Dynamically import track to avoid errors if @vercel/analytics is not installed
    try {
      import('@vercel/analytics').then(({ track }) => {
        track('page_view', {
          path: location.pathname,
          search: location.search,
        });
      }).catch(() => {
        // Analytics not available, silently fail
      });
    } catch (e) {
      // Analytics not available, silently fail
    }
  }, [location]);
}
