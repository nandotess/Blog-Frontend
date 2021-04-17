export const sanityConfig = {
  dataset: process.env.SANITY_DATASET || 'production',
  projectId: process.env.SANITY_PROJECT_ID,
  token: process.env.SANITY_API_TOKEN,
  useCdn: process.env.NODE_ENV === 'production'
};
