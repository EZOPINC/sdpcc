# SDPCC Website Admin Guide

This guide is intended for admin users who want to maintain and update
the website without needing deep technical skills.

------------------------------------------------------------------------

## 1. Logging In & Accessing the Repository

-   Go to **GitHub**: <https://github.com>.
-   Log in with your admin GitHub account.
-   Open the repository: **ezopinc/sdpcc**.
-   Click the green **Code** button → "Open with GitHub Desktop" or
    download ZIP.

------------------------------------------------------------------------

## 2. Updating Website Content

### A. Updating Events

1.  Navigate to `_data/events.yml`.
2.  Each event follows this format:

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

3.  Add/Edit/Delete entries as needed.
4.  Commit changes → Push.

✅ The Events Page updates automatically.

------------------------------------------------------------------------

### B. Adding a Blog Post

1.  Go to `_posts/` folder.
2.  Create a new file in format:\
    `YYYY-MM-DD-title.md`
3.  Example:

``` markdown
---
layout: post
title: "Saraswati Puja 2025 Celebrations"
date: 2025-02-01
categories: blog
---

We celebrated **Saraswati Puja** with devotion and cultural activities...
```

4.  Commit and push → Blog updates.

------------------------------------------------------------------------

### C. Updating Images & Gallery

-   Place images inside `/assets/images/`.
-   Update `gallery.html` or markdown files to link them.
-   Example:

``` html
<img src="{{ '/assets/images/durga.jpg' | relative_url }}" alt="Durga Idol">
```

------------------------------------------------------------------------

### D. Updating Home Page Text

1.  Open `index.md`.
2.  Edit the content (article, welcome message).
3.  Save → Commit → Push.

------------------------------------------------------------------------

## 3. Design Updates

### A. Navigation Bar (Menu)

-   File: `_includes/header.html`
-   Edit menu links or text.

### B. Footer

-   File: `_includes/footer.html`
-   Update address, social media links.

### C. Styling (Colors, Fonts)

-   File: `/assets/css/style.css`
-   Adjust colors, sizes, animations.

------------------------------------------------------------------------

## 4. Contact Form Setup

-   File: `contact.md`
-   Uses **Formspree** or Google Forms (no backend needed).
-   To update email, replace the form action link.

------------------------------------------------------------------------

## 5. General Maintenance

-   Check **GitHub Actions** for build errors.
-   Verify links after updates.
-   Use `jekyll serve` locally to preview changes.

------------------------------------------------------------------------

## 6. Quick Navigation Map

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
