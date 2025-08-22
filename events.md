---
layout: default
title: Events
permalink: /events/
---

# Upcoming Events

<div class="notice-board">
  {% for event in site.data.events %}
    <div class="notice-item">
      <span class="date-badge">{{ event.date }}</span>
      <span class="event-text">{{ event.name }}</span>
      <span class="event-text">{{ event.location }}</span>
    </div>
  {% endfor %}
</div>

📅 Stay tuned for our event calendar updates!
