import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      kicker: z.string(), // e.g. "AV installation · Ocean Week Canada"
      tagline: z.string(), // poetic one-liner under the title
      summary: z.string(), // card + meta description
      partner: z.string().optional(),
      occasion: z.string().optional(),
      medium: z.string().optional(),
      vimeo: z.string().url().optional(),
      // Optional: projects still awaiting photography get a generated
      // pixel-field hero instead of a placeholder image.
      hero: image().optional(),
      heroAlt: z.string().optional(),
      gallery: z
        .array(z.object({ src: image(), alt: z.string() }))
        .default([]),
      howItWorks: z
        .array(z.object({ title: z.string(), text: z.string() }))
        .default([]),
      credits: z.array(z.object({ role: z.string(), name: z.string() })).default([]),
      tags: z.array(z.string()).default([]),
      order: z.number().default(99),
      featured: z.boolean().default(false),
    }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
  }),
});

export const collections = { work, news };
