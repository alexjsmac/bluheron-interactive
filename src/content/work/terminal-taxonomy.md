---
title: Terminal Taxonomy
kicker: Live A/V production · London, Ontario
tagline: When the machine stops trusting what it hears, the room comes apart.
summary: A live audiovisual system that listens to the music, transcribes it as it plays, and turns its own falling confidence into visuals, sound, and ten bars of light.
occasion: Honey Dip Bar, London · February 26, 2026
medium: TouchDesigner · real-time speech-to-text · generative visuals · Art-Net lighting
youtube: gVczY7dNSvo
hero: ../../assets/work/terminal-taxonomy-rig.webp
heroAlt: The performance rig seen from above — a modular synthesizer and controllers under coloured stage light, with two of the LED bars glowing pink and amber along the wall.
howItWorks:
  - title: Listen to the room
    text: A modified speech-to-text operator running in TouchDesigner listens to the live vocal samples as they play, reporting not only its transcription but the language it believes it detected and its own confidence in both.
  - title: Turn doubt into entropy
    text: That confidence value is the control signal. As the system loses its grip on what it is hearing, entropy rises and propagates downstream, destabilizing the visuals and the audio together.
  - title: Put the thinking in the room
    text: Ten LED bars carry the same entropy value out of the patch and into the space over Art-Net, so the machine's uncertainty is staged as physical light rather than reported on a screen.
credits:
  - role: Visuals & lighting design
    name: Built in TouchDesigner
  - role: Lighting
    name: Built and provided by John Petingalo
  - role: Video
    name: Recorded and edited by Jeff Chambers
  - role: Performed by
    name: Alex MacLean as Sunntack
  - role: Venue
    name: Honey Dip Bar, London, Ontario
tags:
  - Performances
order: 9
featured: false
---

Terminal Taxonomy is a live audiovisual production built around a machine that
is trying, and steadily failing, to understand what it is hearing. The piece
runs on a custom TouchDesigner system: a modified speech-to-text operator
listens to live vocal samples and reports three things back — its
transcription, the language it believes it detected, and its own confidence in
both.

That confidence is the instrument. While the system is sure of itself the piece
holds together; as certainty drops, entropy rises and carries through everything
downstream. A 3D bio-sphere rendered in TouchDesigner, driven through TDBitwig
by the sonic transients of a modular rig, begins to break up. A real-time
typewriter log prints the machine's attempts as they fail — a fossil record of a
language dissolving in front of it.

Ten LED bars carry that same entropy value out of the patch and into the room
over Art-Net. The mapping is deliberately one to one: the system's internal
state is not drawn as a graph on a screen but staged as physical light around
the audience, so the thing going wrong is happening in the space rather than
being reported from it.

The design premise is that the failure should be legible. Most systems suppress
low-confidence output, or quietly correct it, and present only the clean result.
Here the confidence value is the score, the lighting cue, and the subject of the
piece at once — and the performance is improvised against whatever the machine
makes of it.
