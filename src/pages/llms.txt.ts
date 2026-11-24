// /llms.txt: a plain-text map of the site for AI tools (llmstxt.org).
// Built from the work collection, so new case studies appear on their own.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  const work = (await getCollection('work')).sort((a, b) => a.data.order - b.data.order);

  const projects = work.map(({ id, data: d }) => {
    const where = d.location
      ? [d.location.venue, d.location.locality, d.location.region].filter(Boolean).join(', ')
      : undefined;
    const facts = [d.kicker, where, d.year].filter(Boolean).join(' · ');
    return `- [${d.title}](${url(`/work/${id}/`)}): ${facts}. ${d.summary}`;
  });

  const body = `# BluHeron Interactive

> A creative technology studio in London and Hamilton, Ontario, Canada. We make immersive public artwork, interactive installations and museum exhibitions, and the digital tools that support them, including beacbeac, a platform that delivers accessible, place-based stories to visitors' phones.

## Pages

- [Home](${url('/')}): what the studio does, with selected work.
- [Services](${url('/services/')}): immersive experiences and installations, the beacbeac accessibility platform, and digital services for arts organizations.
- [beacbeac](${url('/beacbeac/')}): audio, descriptions and images delivered to visitors' phones as they approach. No QR codes.
- [About](${url('/about/')}): the studio, its people and partners.
- [Contact](${url('/contact/')}): how to start a project.
- [Accessibility](${url('/accessibility/')}): how this site meets WCAG 2.2 AA.

## Case studies

${projects.join('\n')}
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
