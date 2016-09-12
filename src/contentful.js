import {createClient} from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_KEY,
  host: process.env.NODE_ENV === 'development' ? 'preview.contentful.com' : 'cdn.contentful.com',
});

export const getClient = () => client;
