---
layout: default
title: Events
permalink: /events/
body_class: events-page
---

# Upcoming Events

<div class="events-container">
  <!-- Left: Event List -->
  <div class="events-list">
    <ul>
      {% for event in site.data.events %}
        <li class="event-item" data-event-id="event-{{ forloop.index0 }}">
          {{ event.date }} - {{ event.name }}
        </li>
      {% endfor %}
    </ul>
  </div>
  <!-- Right: Event Details -->
  <div class="event-details">
    {% for event in site.data.events %}
      <div id="event-{{ forloop.index0 }}" class="event-detail hidden">
        <h2>{{ event.name }}</h2>
        <p class="date-badge"><strong>Date:</strong> {{ event.date }} - {{ event.day}} </p>
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
