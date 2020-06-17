<template>
  <main class="landing is-preload">
    <!-- Banner -->
    <section id="banner" :style="{ backgroundImage: `url('../images/overlay.png'), url('..${homepage.banner}')` }">
      <!-- :style="{background-image: url('../assets/css/images/overlay.png'), url('../images/uploads/banner.jpg') } -->
      <div style="position: relative; top: 50%; transform: perspective(1px) translateY(-50%);">
        <h2>Mytchett Baptists</h2>
        <p>
          <i class="fas fa-cross"></i>
          <i>&nbsp;10:00 am every Sunday &nbsp;</i>
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
      </div>
    </section>

    <!-- Main -->
    <section id="main" class="container">
      <section class="box special">
        <header class="major">
          <h2>ALL ARE WELCOME!</h2>
          <!-- <div>
            <nuxtdown-body class="body" :body="homepage.title"/>
         </div> -->
          <p>
            We have 
            <i>‘open membership’</i> and welcome all profession of faith in the Lord Jesus Christ.
            <br /> As a Baptist Church and Baptism is our prefered induction yet this is entirely up to you.
          </p>
        </header>
      </section>

      <section class="box special features" id="more">
        <div class="features-row">
          <section>
            <span class="icon solid major fa-cross accent2"></span>
            <nuxt-link :to="'/find-jesus'" class>
              <h3>Find Jesus</h3>
              <h4>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</h4>
            </nuxt-link>
          </section>
          <section>
            <span class="icon solid major fa-user accent3"></span>
            <nuxt-link :to="'/about'">
              <h3>About us</h3>
              <h4>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</h4>
            </nuxt-link>
          </section>
        </div>
        <div class="features-row">
          <section>
            <span class="icon solid major fa-calendar accent4"></span>
            <nuxt-link :to="'/events'" class="primary">
              <h3>Our events</h3>
              <h4>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</h4>
            </nuxt-link>
          </section>
          <section>
            <span class="icon solid major fa-wrench accent5"></span>
            <nuxt-link :to="'/revive'">
              <h3>Revive'n'thrive</h3>
              <h4>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</h4>
            </nuxt-link>
          </section>
        </div>
      </section>

      <div class="row">
        <div class="col-6 col-12-narrower">
          <section class="box special">
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
export default { 
    head: function() {
    return {
      title: `${this.homepage.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.homepage.description
        }
      ]
    };
  },
   asyncData: async ({ app, route, payload }) => {
    return {
      homepage: (await app.$content("/home").get('home')) || payload
    };
  }
};
</script>
