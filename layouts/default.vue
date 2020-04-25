<template>
  <div>
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
            <nuxt-link :to="'/events'">Events</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="'/about'">About</nuxt-link>
          </li>
          <li>
            <a class="icon solid fa-angle-down">More</a>
            <ul>
              <li>
                <nuxt-link :to="'/blog'">News and blog</nuxt-link>
              </li>

              <li>
                <nuxt-link :to="'/revive'">Revive'n'thrive</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="'/welcome'">I'm new</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="'/about-jesus'">facts about Jesus</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>

    <nuxt></nuxt>

    <!-- Footer -->
    <footer id="footer">
      &copy; Mytchett Baptists. All rights reserved.
      &nbsp;
      Design:
      <a
        href="http://html5up.net"
      >HTML5 UP</a>
    </footer>
  </div>
</template>

