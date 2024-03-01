// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://9ae2128993be51694f9fa6ef690b73f5@o4506831738634240.ingest.us.sentry.io/4506831757049856",

  tracesSampleRate: 1,

  debug: false,
});
