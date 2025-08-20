---
layout: default
title: Home
---
<img src="/assets/images/durga.jpg" alt="Durga" class="img">

# Welcome to SDPCC

The **Saskatoon Durga Puja Celebration Committee (SDPCC)** is a cultural community organization based in Saskatoon, Saskatchewan, Canada.  
We have been celebrating **Durga Puja, Saraswati Puja, and other cultural events** for over 55 years.

Our community brings together families and individuals to celebrate Bengali traditions, share our culture, and create lasting memories.



<div class="center-link">
  <a href="https://www.facebook.com/saskatoondurgapuja" target="_blank">
    Visit our Facebook Page for more information
  </a>
</div>

## 📰 Upcoming Events

<div class="notice-board">
  {% for event in site.data.events %}
    <div class="notice-item">
      <span class="date-badge">{{ event.date }}</span>
      <span class="event-text">{{ event.title }}</span>
    </div>
  {% endfor %}
</div>


