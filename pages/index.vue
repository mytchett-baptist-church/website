<template>
  <main class="landing is-preload">
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
          <a v-scroll-to="'#cta'" class="button">Contact</a>
        </li>
        <li>
          <a v-scroll-to="'#more'" class="button">Learn More</a>
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

      <section class="box special features" id="more">
        <div class="features-row">
          <section>
            <nuxt-link :to="'/about-jesus'">
              <span class="icon solid major fa-cross accent2"></span>
              <h3>About Jesus</h3>
              <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
            </nuxt-link>
          </section>
          <section>
            <nuxt-link :to="'/about'">
              <span class="icon solid major fa-user accent3"></span>
              <h3>About us</h3>
              <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
            </nuxt-link>
          </section>
        </div>
        <div class="features-row">
          <section>
            <nuxt-link :to="'/events'">
              <span class="icon solid major fa-calendar accent4"></span>
              <h3>Our events</h3>
              <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
            </nuxt-link>
          </section>
          <section>
            <span class="icon solid major fa-wrench accent5"></span>
            <nuxt-link :to="'/revivivess'">
              <h3>Revive'n'thrive</h3>
              <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
            </nuxt-link>
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
      <!-- todo change email -->
      <form action="https://formspree.io/mgelgjqp" method="POST">
        <input type="email" name="_replyto" id="email" placeholder="Email Address" />
        <br />
        <textarea name="message" placeholder="Your message"></textarea>
        <br />
        <!-- your other form fields go here -->
        <a type="submit" class="button">Send</a>
      </form>
    </section>

  </main>
</template>

<script>
export default {};
</script>
