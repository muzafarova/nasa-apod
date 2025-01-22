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

export type ApodMedia = z.infer<typeof ApodSchema>;

export default defineEventHandler(async (event) => {
  const search = new URLSearchParams(getQuery(event));
  search.append('api_key', process.env.API_KEY || '');
  search.set('thumbs', 'true');

  const res = await fetch(
    'https://api.nasa.gov/planetary/apod?' + search.toString()
  );

  const data = await res.json();

  if (!res.ok) {
    throw createError({
      status: data.code || 500,
      statusMessage: data.msg || 'Something went wrong',
    });
  }

  const result = ApodSchema.safeParse(data);

  if (!result.success) {
    throw createError({
      status: 400,
      statusMessage: 'Validation error',
      statusText: JSON.stringify(result.error.issues),
    });
  }

  return result.data;
});
