// Initialize Vercel Web Analytics
import { inject } from './node_modules/@vercel/analytics/dist/index.mjs';

// Inject analytics tracking
inject({
  mode: 'auto', // Automatically detect development vs production
  debug: true   // Enable debug logging in development
});
