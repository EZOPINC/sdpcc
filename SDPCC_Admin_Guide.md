---
layout: default
title: admin_guide
permalink: /admin_guide/
---


# SDPCC Website Admin Guide

Welcome to the Saskatoon Durga Puja Celebration Committee (SDPCC) website admin guide!
This guide is written for non-technical users who want to keep the website updated with blogs, events, galleries, and content. This guide is intended for admin users who want to maintain and update the website without needing deep technical skills.

------------------------------------------------------------------------

## 1. Logging In & Accessing the Repository

-   Go to **GitHub**: [<https://github.com>](https://github.com/EZOPINC/sdpcc).
-   Log in with your admin GitHub account.
-   Open the repository: **ezopinc/sdpcc**.
-   Open the file you want to edit.
-   Click the pencil ✏️ icon (top right of the file view) to edit directly in GitHub.
-   OR Click the green **Code** button → "Open with GitHub Desktop" or download ZIP.

⚠️ Always make small changes and save/commit with a clear message like “Updated event details for Saraswati Puja”.

------------------------------------------------------------------------

## 2. Updating Website Content

### Updating the Homepage

The homepage text lives in index.md. To edit:
- Open index.md.
- Click Edit (✏️).
- Change the welcome message or text.
- Click Commit changes to save.

### Updating Events

#### Navigate to `_data/events.yml`.
##### Each event follows this format:

``` yaml
- date: "Sept 26, 2025"
  name: "Mahalaya & Durga Puja Opening Ceremony"
  location: "Swami Lakshmi Narayan Temple"
  schedule:
    - time: "10:00 AM"
      program: "Pushpanjali"
      participants: "Community Members"
    - time: "6:00 PM"
      program: "Cultural Evening"
      participants: "Youth & Adults"
```

#### Add/Edit/Delete entries as needed.
             
- Shortcuts to add an Event:
    - Go to _data/events.yml.
    - Copy an existing block.
    - Change the date, name, location, and add schedule details.
    - Save and commit.

#### Commit changes → Push.

✅ The Events Page updates automatically.

------------------------------------------------------------------------

### Adding a Blog Post

##### Go to `_posts/` folder.
##### Create a new file in format:\
    `YYYY-MM-DD-title.md`

- Example:

``` markdown
---
layout: post
title: "Saraswati Puja 2025 Celebrations"
date: 2025-02-01
categories: blog
---

We celebrated **Saraswati Puja** with devotion and cultural activities...
```

##### Commit and push → Blog updates.

------------------------------------------------------------------------

### Updating Images & Gallery

-   Place images inside `/assets/images/`.
-   Update `gallery.html` or markdown files to link them.
-   Example:

``` html
<img src="{{ '/assets/images/durga.jpg' | relative_url }}" alt="Durga Idol">
```

------------------------------------------------------------------------

### Updating Home Page Text

1.  Open `index.md`.
2.  Edit the content (article, welcome message).
3.  Save → Commit → Push.

------------------------------------------------------------------------

## Design Updates


### Navigation Bar (Menu)

-   File: `_includes/header.html`
-   Edit menu links or text.

### Footer

-   File: `_includes/footer.html`
-   Update address, social media links.

### Styling (Colors, Fonts)

<p style="color: red; font-weight: bold"> DISCLAIMER !!! 👉 If unsure, do not edit CSS directly — ask a technical volunteer.  </p>

-   File: `/assets/css/style.css`
-   Adjust colors, sizes, animations.
<p style="color: red;" > !!! This is the heart of the website design, changing even one line of code might impact the whole design, please consider knowing the class names, parameters and which design it refers to, before doing any changes to this file. !!!! </p>

------------------------------------------------------------------------

## Contact Form Setup

-   File: `contact.md`

------------------------------------------------------------------------

## General Maintenance

-   Check **GitHub Actions** for build errors.
-   Verify links after updates.
-   Use `jekyll serve` locally to preview changes.

------------------------------------------------------------------------

## Quick Navigation Map

-   `_posts/` → Blog articles\
-   `_data/events.yml` → Events list\
-   `index.md` → Homepage content\
-   `_includes/header.html` → Navigation bar\
-   `_includes/footer.html` → Footer\
-   `assets/images/` → Images\
-   `assets/css/style.css` → Design & layout

------------------------------------------------------------------------

✅ That's it! Now admins can safely update and maintain the website
without coding knowledge.
