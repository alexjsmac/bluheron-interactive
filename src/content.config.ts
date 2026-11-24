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
      // Search snippet, when the summary runs past ~155 characters (Google
      // truncates there). Falls back to the summary.
      description: z.string().max(160).optional(),
      // Where the work was shown. Shown as "Where" and used in structured
      // data, so search and AI answers can place it (e.g. "in Ontario").
      location: z
        .object({
          venue: z.string().optional(),
          locality: z.string(),
          region: z.string(),
          country: z.string().default('CA'),
        })
        .optional(),
      year: z.number().int().optional(),
      // Organisations that funded the project, for structured data. Funders
      // listed under `support` are included automatically.
      funders: z.array(z.string()).default([]),
      occasion: z.string().optional(),
      medium: z.string().optional(),
      vimeo: z.string().url().optional(),
      // YouTube video id (not a URL), for films hosted there instead.
      youtube: z.string().optional(),
      // Optional: projects still awaiting photography get a generated
      // pixel-field hero instead of a placeholder image.
      hero: image().optional(),
      heroAlt: z.string().optional(),
      // Short silent loop (a public/ path, e.g. /loops/x.mp4) played over the
      // card image on the homepage. Keep it ~4s, 960x600, no audio.
      loop: z.string().optional(),
      // A self-hosted video with sound (a public/ path), shown in its own
      // player on the case study. For short vertical clips that don't
      // warrant Vimeo/YouTube. `credit` names who made it when it isn't us.
      video: z
        .object({
          src: z.string(),
          poster: image(),
          title: z.string(),
          credit: z.string().optional(),
          // The organisation that made the video, for structured data.
          creator: z.string().optional(),
          vertical: z.boolean().default(false),
          // Required by Google for video results.
          uploaded: z.coerce.date(),
          seconds: z.number().int().positive(),
          // What's said in the video, shown under the player for screen
          // readers, search, and anyone watching muted.
          transcript: z.string().optional(),
        })
        .optional(),
      gallery: z
        .array(z.object({ src: image(), alt: z.string() }))
        .default([]),
      howItWorks: z
        .array(z.object({ title: z.string(), text: z.string() }))
        .default([]),
      credits: z.array(z.object({ role: z.string(), name: z.string() })).default([]),
      // Funder acknowledgement for this project: the funder's required
      // credit line plus their logos, shown only on the funded project's
      // page (several funders forbid logo use as general studio branding).
      // Logos: single-colour black on transparent, from src/assets/funders/.
      support: z
        .object({
          text: z.string(),
          logos: z.array(z.object({ src: image(), name: z.string() })).default([]),
        })
        .optional(),
      // A client's words about the project, shown as a pull quote. Only
      // quote someone who has agreed to be quoted publicly.
      quote: z
        .object({ text: z.string(), name: z.string(), role: z.string() })
        .optional(),
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
