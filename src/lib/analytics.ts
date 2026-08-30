// GA4 measurement id for bluheroninteractive.com.
//
// Public by design — it ships in the page source, so it is not a secret. An
// empty string emits no tag at all, so the site builds and runs without it.
//
// The tag is configured cookieless: see the consent block in Base.astro. Do
// not relax that without also shipping a consent banner.
export const GA_MEASUREMENT_ID = 'G-H9LML2JBR4';
