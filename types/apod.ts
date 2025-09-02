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

const ApodSchemaOther = z.object({
  media_type: z.literal('other'),
  date: z.string().date(),
  title: z.string(),
  explanation: z.string(),
});

export const ApodSchema = z.union([ApodSchemaImage, ApodSchemaVideo, ApodSchemaOther]);

export type ApodMedia = z.infer<typeof ApodSchema>;

// Mars types
const MarsRoverSchema = z.object({
  name: z.string(),
  status: z.string(),
});

const MarsPhotoSchema = z.object({
  img_src: z.string(),
  rover: MarsRoverSchema,
  earth_date: z.string().date(),
});

export const MarsPhotosSchema = z.object({
  photos: z.array(MarsPhotoSchema),
});

export type MarsMedia = z.infer<typeof MarsPhotosSchema>;
