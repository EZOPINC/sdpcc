---
layout: default
title: Events
permalink: /events/
body_class: events-page
description: all upcoming events details for saskatoon durga puja celebration committe
---

# Upcoming Events

<div class="events-container">
  <!-- Left: Event List -->
  <div class="events-list">
    <ul>
      {% assign today = 'now' | date: '%Y-%m-%d' %}
      {% assign upcoming_events = site.data.events | where_exp: "event", "event.date >= today" %}
      {% for event in upcoming_events %}
        <li class="event-item" data-event-id="event-{{ forloop.index0 }}">
          {{ event.date }} - {{ event.name }}
        </li>
      {% endfor %}
      {% if upcoming_events == empty %}
        <li>No upcoming events at the moment. Please check back soon!</li>
      {% endif %}
    </ul>
  </div>

  <!-- Right: Event Details -->
  <div class="event-details">
    {% for event in upcoming_events %}
      <div id="event-{{ forloop.index0 }}" class="event-detail hidden">
        <h2>{{ event.name }}</h2>
        <p class="date-badge"><strong>Date:</strong> {{ event.date }} {% if event.day %}- {{ event.day }}{% endif %}</p>
        <p><strong>Location:</strong> {{ event.location }}</p>
        {% if event.schedule %}
          <table class="event-schedule">
            <thead>
              <tr>
                <th>Time</th>
                <th>Program</th>
                <th>Participants</th>
              </tr>
            </thead>
            <tbody>
              {% for item in event.schedule %}
                <tr>
                  <td>{{ item.time }}</td>
                  <td>{{ item.program }}</td>
                  <td>{{ item.participants }}</td>
                </tr>
              {% endfor %}
            </tbody>
          </table>
        {% endif %}
      </div>
    {% endfor %}
  </div>
</div>

📅 Stay tuned for our event calendar updates!
