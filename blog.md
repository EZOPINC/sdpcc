---
layout: default
title: Blog
permalink: /blog/
pagination:
  enabled: true
  per_page: 5
  permalink: '/page:num/'
---

<div class="blog-container">
  <h1>Community Blog</h1>
  <p>Read the latest updates, cultural articles, and festival highlights from our community.</p>

  <div class="blog-list">
    {% for post in site.posts %}
      <div class="blog-card">
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <p class="blog-meta">📅 {{ post.date | date: "%B %d, %Y" }}</p>
        <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
        <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
      </div>
    {% endfor %}
  </div>