# Getting Started with Vercel Web Analytics

This guide will help you get started with using Vercel Web Analytics on your Helio project, showing you how to enable it, add the package to your project, deploy your app to Vercel, and view your data in the dashboard.

## Prerequisites

- A Vercel account. If you don't have one, you can [sign up for free](https://vercel.com/signup).
- A Vercel project. If you don't have one, you can [create a new project](https://vercel.com/new).
- The Vercel CLI installed. If you don't have it, you can install it using the following command:

```bash
# Using pnpm
pnpm add -D vercel

# Using yarn
yarn add -D vercel

# Using npm
npm install --save-dev vercel

# Using bun
bun add -d vercel
```

## Enable Web Analytics in Vercel

On the [Vercel dashboard](/dashboard), select your Project and then click the **Analytics** tab and click **Enable** from the dialog.

> **💡 Note:** Enabling Web Analytics will add new routes (scoped at `/_vercel/insights/*`) after your next deployment.

## Add `@vercel/analytics` to Your Project

Using the package manager of your choice, add the `@vercel/analytics` package to your project:

```bash
# Using pnpm
pnpm add @vercel/analytics

# Using yarn
yarn add @vercel/analytics

# Using npm
npm install @vercel/analytics

# Using bun
bun add @vercel/analytics
```

## Integrate Analytics into Your App

Since this project is a Vite + React application using React Router, you have two options:

### Option 1: Using the `inject` Function (Recommended for Custom Routing)

For a Vite + React app with custom routing, use the `inject` function in your main entry point:

```tsx
// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import { inject } from '@vercel/analytics';

// Initialize analytics
inject();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### Option 2: Using the Analytics Component (Alternative)

Alternatively, you can import the `Analytics` component from `@vercel/analytics/react` and add it to your root App component:

```tsx
// src/app/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { StructuredData, workhelioOrganizationSchema } from '@/app/components/seo/StructuredData';
import { HomePage } from '@/app/pages/HomePage';
// ... other imports

export default function App() {
  return (
    <Router>
      <StructuredData schema={workhelioOrganizationSchema} />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/divisions/:division" element={<DivisionsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}
```

> **💡 Note:** When using the Analytics component in a plain React app with custom routing, there is no automatic route support. The component will track page views and events, but route detection may require additional configuration.

## Deploy Your App to Vercel

Deploy your app using the following command:

```bash
vercel deploy
```

If you haven't already, we also recommend [connecting your project's Git repository](/docs/git#deploying-a-git-repository), which will enable Vercel to deploy your latest commits to main without terminal commands.

Once your app is deployed, it will start tracking visitors and page views.

> **💡 Note:** If everything is set up properly, you should be able to see a Fetch/XHR request in your browser's Network tab from `/_vercel/insights/view` when you visit any page.

## View Your Data in the Dashboard

Once your app is deployed, and users have visited your site, you can view your data in the dashboard.

To do so, go to your [dashboard](/dashboard), select your project, and click the **Analytics** tab.

After a few days of visitors, you'll be able to start exploring your data by viewing and [filtering](/docs/analytics/filtering) the panels.

Users on Pro and Enterprise plans can also add [custom events](/docs/analytics/custom-events) to their data to track user interactions such as button clicks, form submissions, or purchases.

## Tracking Custom Events

You can track custom events by calling the `track` function from `@vercel/analytics`:

```tsx
import { track } from '@vercel/analytics';

// Track a custom event
track('button_click', {
  button_name: 'subscribe',
  location: 'header'
});
```

For more details on custom events, see the [custom events documentation](/docs/analytics/custom-events).

## Privacy and Compliance

Learn more about how Vercel supports [privacy and data compliance standards](/docs/analytics/privacy-policy) with Vercel Web Analytics.

## Next Steps

Now that you have Vercel Web Analytics set up, you can explore the following topics to learn more:

- [Learn how to use the `@vercel/analytics` package](/docs/analytics/package)
- [Learn how to set update custom events](/docs/analytics/custom-events)
- [Learn about filtering data](/docs/analytics/filtering)
- [Read about privacy and compliance](/docs/analytics/privacy-policy)
- [Explore pricing](/docs/analytics/limits-and-pricing)
- [Troubleshooting](/docs/analytics/troubleshooting)

## Troubleshooting

### Analytics not tracking

If you're not seeing analytics data:

1. **Verify deployment:** Make sure your app is deployed to Vercel
2. **Check browser console:** Look for any error messages in the browser console
3. **Verify network requests:** Open your browser's Network tab and look for requests to `/_vercel/insights/`
4. **Check Vercel dashboard:** Ensure Web Analytics is enabled in your Vercel project dashboard under the Analytics tab
5. **Clear cache:** Try clearing your browser cache and reloading the page

### Missing route information

Since this is a React app with custom routing, automatic route detection may not work perfectly. Consider using custom events to track page navigation:

```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { track } from '@vercel/analytics';

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    track('page_view', {
      path: location.pathname,
      search: location.search,
    });
  }, [location]);
}
```

Then use this hook in your App or route components to track page views.
