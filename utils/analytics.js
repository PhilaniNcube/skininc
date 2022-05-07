import Analytics from 'analytics';
import googleTagManager from '@analytics/google-tag-manager';

const GTM_CONTAINER_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

const analytics = Analytics({
  app: 'skininc', // Call this whatever you like.
  plugins: [
    googleTagManager({
      containerId: GTM_CONTAINER_ID,
      enabled: true,
    }),
  ],
});

export default analytics;
