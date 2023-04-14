---
title: "Contact"
type: page
layout: "default"
date: 2023-03-27T12:52:58-04:00
draft: false
---

<section>
  <div class="container">
    <img class="contact-banner" src="/img/contact-banner.jpg" alt="Pictures of the dental office" />
    <div class="columns two-columns">
      <div class="contact-details">
        <h3>Office Hours</h3>
        <ul class="unstyled-list office-hours">
          <li><strong>Mon</strong> 8:00am - 5:00pm</li>
          <li><strong>Tues</strong> 10:00am - 7:00pm</li>
          <li><strong>Wed</strong> 8:00am - 5:00pm</li>
          <li><strong>Thurs</strong> 8:00am - 5:00pm</li>
          <li><strong>Fri</strong> Closed</li>
        </ul>
        <h3>Contact Us</h3>
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
        <h3>Dental Emergency</h3>
        <p>If you are having a dental emergency, please call <a href="tel:15195646568">519-564-6568</a> and we will do our best to get you in as soon as possible.</p>
        <h3>Book an Appointment</h3>
        <p>Please use the form below to book an appointment. Let us know your contact details and we'll get back to you within one business day.</p>
        <form id="my-form" action="https://formspree.io/f/xrgyvdyw" method="POST">
          <div id="my-form-inner">
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
            <div class="g-recaptcha" data-sitekey="6LdezIklAAAAACQEnGCRnZRdF2_r05xPsz0Mjuht"></div>
            <button class="btn pill" id="my-form-button">Submit</button>
          </div> <!-- inner-form -->
          <p id="my-form-status"></p>
        </form>
      </div>
    </div>
  </div>
</section>