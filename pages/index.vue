<template>
  <main class="landing is-preload">
    <!-- Header -->
    <header id="header" class="alt">
      <h1>
        <a href="http://www.gu16.org.uk/index.html">ChurchesTogether</a>@GU16
      </h1>
      <nav id="nav">
        <ul>
          <li>
            <nuxt-link :to="'/#'">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="'/#'">Events</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="'/#'">About</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="'/#'" class="icon solid fa-angle-down">More</nuxt-link>
            <ul>
              <li>
                <nuxt-link :to="'/#'">Contact</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="'/#'">Revive'n'thrive</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="'/#'">About</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Banner -->
    <section id="banner">
      <h2>Mytchett Baptists</h2>
      <p>
        <i class="fas fa-cross"></i>
        10:00 am every Sunday
        <i class="fas fa-cross"></i>
      </p>
      <ul class="actions special">
        <li>
          <nuxt-link :to="'/#'" class="button">Learn More</nuxt-link>
        </li>
      </ul>
    </section>

    <!-- Main -->
    <section id="main" class="container">
      <section class="box special" style="margin-top: -26%">
        <header class="major">
          <h2>ALL ARE WELCOME!</h2>
          <p>We have ‘open membership’. This means that, although the preferred induction to membership, as in any Baptist Church, is by Believer’s Baptism, we also welcome others on ‘profession of faith’ in the Lord Jesus Christ.</p>
        </header>
        <span class="image featured">
          <img src="images/pic01.jpg" alt />
        </span>
      </section>

      <section class="box special features">
        <div class="features-row">
          <section>
            <span class="icon solid major fa-bolt accent2"></span>
            <h3>About Jesus</h3>
            <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
          </section>
          <section>
            <span class="icon solid major fa-chart-area accent3"></span>
            <h3>About us</h3>
            <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
          </section>
        </div>
        <div class="features-row">
          <section>
            <span class="icon solid major fa-cloud accent4"></span>
            <h3>Our events</h3>
            <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
          </section>
          <section>
            <span class="icon solid major fa-lock accent5"></span>
            <h3>Revive'n'thrive</h3>
            <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
          </section>
        </div>
      </section>

      <div class="row">
        <div class="col-6 col-12-narrower">
          <section class="box special">
            <span class="image featured">
              <img src="images/pic02.jpg" alt />
            </span>
            <h3>I'm new</h3>
            <p>A warm welcome to you! No need to feel out of place you are at home here.</p>
            <ul class="actions special">
              <li>
                <nuxt-link :to="'/#'" class="button alt">Learn More</nuxt-link>
              </li>
            </ul>
          </section>
        </div>
        <div class="col-6 col-12-narrower">
          <section class="box special">
            <span class="image featured">
              <img src="images/pic03.jpg" alt />
            </span>
            <h3>What we have been getting up to?</h3>
            <p>We have newsletters and a blog where we record special events in our community.</p>
            <ul class="actions special">
              <li>
                <nuxt-link :to="'/#'" class="button alt">Learn More</nuxt-link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="cta">
      <h2>Contact us</h2>
      <em>We would love to hear from you!</em>
      <!-- todo change email -->
      <form action="https://formspree.io/mgelgjqp" method="POST">
        Your email:
        <input type="text" name="_replyto" />
        Your message:
        <textarea name="message"></textarea>
        <br />
        <!-- your other form fields go here -->
        <a type="submit" class="button">Send</a>
      </form>
    </section>

    <!-- Footer -->
    <footer id="footer">
      &copy; Mytchett Baptists. All rights reserved.
      &nbsp;
      Design:
      <a
        href="http://html5up.net"
      >HTML5 UP</a>
    </footer>
  </main>
</template>

<script>
export default {};
</script>
