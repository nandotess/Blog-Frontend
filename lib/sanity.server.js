import { createClient } from 'next-sanity';
import { sanityConfig } from './config';

export const sanityClient = createClient(sanityConfig);

export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false
});

export const getClient = (preview) => (preview ? previewClient : sanityClient);
