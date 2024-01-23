---
draft: false
layout: ../../layouts/ProjectLayout.astro
title: 'Isaac Pollack - Nangular Chat' # The browser tab title
name: Nangular Chat # What appears in the Project page
description: 'A full-stack application focused on putting all of my knowledge together into one project to create a real-time chat application, with group and room functionality, similar to services like Teams or Discord in a way.'
image:
    url: '/project_images/nang-chat.png'
    alt: 'Nangular Chat Thumbnail'
    gallery: '/nangular/' # All images in this folder will be displayed within the projects Gallery (requires both slashes so as not to pick up thumbnails)
langs: ["Node.JS", "Express", "Angular", "MongoDB"] # What appears on the projects 'card'
code:
    show_live: false # Whether to show the live button
    live: '/'
    show_source: true # Whether to show the source button
    source: 'https://github.com/Isaac-Pollack/nangular-chat'
---

## What is this project?

A full-stack application focused on putting all of my knowledge together into one project to create a real-time chat application, with group and room functionality, similar to services like Teams or Discord in a way. Permissions and roles, along with basic authentication in MongoDB was also implemented to serve this purpose.

More in depth documentation including that of the API, can be found by clicking the source code button above!

## Tech

- Node.JS
- Express
- Angular
- MongoDB

## Goals

I had used other frameworks to varying degrees of success, however this was my first attempt at a more traditional API approach using JS based architecture.

- Learning and implementing Express, Angular and MongoDB succinctly and successfully with only native documentation.
- Implementing a quality component based front-end.
- Implementing multi-use and easy to digest data structures, with more planning involved then prior projects.

The project was initially built with local/session storage in mind, and then migrated to Mongo to learn that functionality as well.

## Takeaways

Bringing tools together for complete and comprehensive applications requires much more planning and cohesion then I initially anticipated. My knowledge of JS systems was not nearly enough to troubleshoot many issues I ran into that seemed to be different then others before me in regards to environment setups and version differences. Documentation was flaky at times and I was forced to critically think, rather quickly to solve problems.

There is always a chance for refactor, but I was happy with the end result.
