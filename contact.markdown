---
layout: default
title: Contact Us
permalink: /contact/
---

<section>
  <div class="columns two-columns">
    <div>
      <h3>Office Hours</h3>
      <ul class="unstyled-list office-hours">
        <li><strong>Mon</strong> 8:00am - 5:00pm</li>
        <li><strong>Tues</strong> 10:00am - 7:00pm</li>
        <li><strong>Wed</strong> 8:00am - 5:00pm</li>
        <li><strong>Thurs</strong> 8:00am - 5:00pm</li>
        <li><strong>Fri</strong> Closed</li>
      </ul>
      <hr class="short" />
      <h3>Contact Us</h3>
      <img src="/assets/img/office.jpg" />
      <address>
        2665 Howard Ave, Unit 1<br>
        Windsor, Ontario<br>
        N8X 4Z3
      </address>
      <address class="addr-contact">
        <strong>Phone</strong> <a href="tel:15192551117">519-255-1117 x12</a><br>
        <strong>Email</strong> <a href="mailto:info@drbeatapecko.com">info@drbeatapecko.com</a><br>
        <strong>Emergency</strong> <a href="tel:15195646568">519-564-6568</a>
      </address>
    </div>
    <div>
      <h3>Book an Appointment</h3>
      <form id="my-form" action="https://formspree.io/f/xrgyvdyw" method="POST">
        <div id="inner-form">
          <p class="field">
            <label class="primary-label" for="name">Your name</label>
            <input id="name" type="text" name="name" required />
          </p>
          <p class="field">
            <label class="primary-label" for="email">Your email address</label>
            <input id="email" type="email" name="email" required />
          </p>
          <p class="field">
            <label class="primary-label" for="phone">Your phone number</label>
            <input id="phone" type="tel" name="phone" required />
          </p>
          <p class="field">
            <label class="primary-label" for="notes">Notes</label>
            <textarea id="phone" name="phone"></textarea>
          </p>
          <div class="g-recaptcha" data-sitekey="6Ldo7MQZAAAAAGtYeCxzJjAzAvhpXeVxSLBGy8ay"></div>
          <button class="btn" id="my-form-button">Submit</button>
        </div> <!-- inner-form -->
        <p id="my-form-status"></p>
      </form>
    </div>
  </div>
</section>

<script
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDIJcLNSwy9y071aF2QItBgzd3jWsPf2eE&callback=initMap&v=weekly"
  defer
></script>
<script src="/assets/js/contact.js"></script>