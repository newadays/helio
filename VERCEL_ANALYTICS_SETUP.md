# Vercel Web Analytics Setup Guide

This project includes setup files and documentation for integrating Vercel Web Analytics. Follow this quick start guide to get up and running.

## Quick Start

### 1. Install the Analytics Package

```bash
pnpm add @vercel/analytics
```

Or with your preferred package manager:
- npm: `npm install @vercel/analytics`
- yarn: `yarn add @vercel/analytics`
- bun: `bun add @vercel/analytics`

### 2. Enable Analytics on Vercel Dashboard

1. Go to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. Click **Enable** to enable Web Analytics

### 3. Add Analytics to Your App

Choose one of the two options below:

#### Option A: Using the `inject` Function (Recommended)

Add to `src/main.tsx`:

```tsx
import { inject } from '@vercel/analytics';

// Initialize analytics before rendering
inject();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

#### Option B: Using the Analytics Component

Add to `src/app/App.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <Router>
      {/* ... your app content ... */}
      <Analytics />
    </Router>
  );
}
```

### 4. Optional: Set Up Page Tracking

To track page views with route information:

```tsx
import { usePageTracking } from '@/hooks/usePageTracking';

export default function App() {
  usePageTracking();
  
  return (
    // ... your app
  );
}
```

### 5. Optional: Track Custom Events

Use the analytics utilities provided in `src/lib/analytics.ts`:

```tsx
import { trackEvent, trackButtonClick } from '@/lib/analytics';

function MyComponent() {
  const handleClick = () => {
    trackButtonClick('my_button', { location: 'header' });
  };
  
  return <button onClick={handleClick}>Click Me</button>;
}
```

### 6. Deploy to Vercel

```bash
vercel deploy
```

Or push to your connected Git repository and Vercel will deploy automatically.

## Next Steps

- Read the [full documentation](./docs/VERCEL_WEB_ANALYTICS.md) for more details
- View the example hooks in `src/hooks/usePageTracking.ts`
- Check out the analytics utilities in `src/lib/analytics.ts`
- See [Vercel Analytics docs](https://vercel.com/docs/analytics) for more information

## Available Utilities

### Hooks
- **`usePageTracking()`** - Automatically tracks page views when routes change

### Functions from `src/lib/analytics.ts`
- **`trackEvent(name, data)`** - Track a custom event
- **`trackPageView(path, data)`** - Track a page view
- **`trackButtonClick(name, data)`** - Track button clicks
- **`trackFormSubmission(name, data)`** - Track form submissions
- **`trackConversion(type, data)`** - Track conversions

## Need Help?

See the troubleshooting section in [docs/VERCEL_WEB_ANALYTICS.md](./docs/VERCEL_WEB_ANALYTICS.md#troubleshooting) for common issues.
