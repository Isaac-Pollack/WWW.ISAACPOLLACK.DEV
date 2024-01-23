---
draft: false
layout: ../../layouts/ProjectLayout.astro
title: 'Isaac Pollack - Chop Chop Project' # The browser tab title
name: Chop Chop # What appears in the Project page
description: 'A Laravel application focusing on the end result. Attempting to emulate popular food ordering services such as Uber Eats, Doordash or Menulog for example.'
image:
    url: '/project_images/chop-chop.png'
    alt: 'Chop Chop Thumbnail'
    gallery: '/chopchop/' # All images in this folder will be displayed within the projects Gallery (requires both slashes so as not to pick up thumbnails)
langs: ["SQLite", "Laravel", "PHP"] # What appears on the projects 'card'
code:
    show_live: false # Whether to show the live button
    live: '/'
    show_source: false # Whether to show the source button
    source: 'https://github.com/Isaac-Pollack/chop-chop'
---

## What is this project?

Chop Chop was my first foray into Laravel. I had some experience with PHP at the time making basic websites, but nothing too advanced. This was a headfirst drop into the deep end for me with the intention of putting all of my design knowledge into practice, without any further resources then the Laravel documentation itself. The project was to clone a popular food-ordering system (e.g Uber Eats, Doordash, Menulog) with as much functionality as possible.

## Tech

- Laravel
- PHP
- SQLite

## Goals

The biggest goal for this project was the end product. It needed to be aesthetic, functional and well put-together.

- Registration (Multiple User Types)
- Login
- Admin Functionality
- CRUD functionality for Resturants + Dishes (including permissions per user)
- Pagination
- Purchasing
- Multiple DB functions (e.g Top 5, photos, unique names)

Along with these main goals for the site, I set a 2 week timeline for all aspects of this, including learning as I went.

## Takeaways

Following on from the goals of the project, some of my biggest lessons learned from attempting this were:

- Design is paramount! I initially dove head first into the implementation of the site without proper database planning, which I underestimated the importance of until much later, when I was forced to completely refactor to achieve my goals.
- Scope: 2 weeks including learning was simply not enough time for me, I had to wrap my head around a totally new framework and get better with my SQL design skills, which were sorely lacking before beginning this project.

Overall, a very valuable project, that I was very happy with in the end, given my knowledge when beginning.
