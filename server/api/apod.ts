import { z } from 'zod';

const ApodSchemaImage = z.object({
  media_type: z.literal('image'),
  date: z.string().date(),
  title: z.string(),
  explanation: z.string(),
  url: z.string(),
  hdurl: z.string(),
});

const ApodSchemaVideo = z.object({
  media_type: z.literal('video'),
  date: z.string().date(),
  title: z.string(),
  explanation: z.string(),
  url: z.string(),
  thumbnail_url: z.string(),
});

const ApodSchema = z.union([ApodSchemaImage, ApodSchemaVideo]);

export type Apod = z.infer<typeof ApodSchema>;

export default defineEventHandler(async (event) => {
  const search = new URLSearchParams(getQuery(event));
  search.append('api_key', process.env.API_KEY || '');

  const res = await $fetch(
    'https://api.nasa.gov/planetary/apod?' + search.toString()
  );
  const result = ApodSchema.safeParse(res);
  if (!result.success) throw result.error.issues;

  return result.data;
});
