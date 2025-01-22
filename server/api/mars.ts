import { z } from 'zod';

const MarsRoverSchema = z.object({
  name: z.string(),
  status: z.string(),
});

const MarsPhotoSchema = z.object({
  img_src: z.string(),
  rover: MarsRoverSchema,
  earth_date: z.string().date(),
});

const MarsPhotosSchema = z.object({
  photos: z.array(MarsPhotoSchema),
});

export type MarsMedia = z.infer<typeof MarsPhotosSchema>;

export default defineEventHandler(async (event) => {
  const search = new URLSearchParams(getQuery(event));
  search.append('api_key', process.env.API_KEY || '');
  search.set('sol', '1000');
  search.set('page', '1');

  const res = await fetch(
    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?' +
      search.toString()
  );

  const data = await res.json();

  if (!res.ok) {
    throw createError({
      status: data.code || 500,
      statusMessage: data.msg || 'Something went wrong',
    });
  }

  const result = MarsPhotosSchema.safeParse(data);

  if (!result.success) {
    console.warn(result.error.issues);
    throw createError({
      status: 400,
      statusMessage: 'Validation error',
    });
  }

  return result.data;
});
