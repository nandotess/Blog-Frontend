import {
  createImageUrlBuilder,
  createPreviewSubscriptionHook
} from 'next-sanity';
// import { useNextSanityImage } from 'next-sanity-image';
// import { sanityClient } from './sanity.server';
import { sanityConfig } from './config';

export const imageBuilder = createImageUrlBuilder(sanityConfig);
export const urlForImage = (source) => imageBuilder.image(source);

// export const urlForImage = (source) => useNextSanityImage(sanityClient, source);

export const usePreviewSubscription = createPreviewSubscriptionHook(
  sanityConfig
);
