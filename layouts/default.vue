<template>
  <div>
    <!-- Header -->
    <header id="header" class="alt">
      <h1>
        <a href="http://www.gu16.org.uk/index.html">ChurchesTogether</a>@GU16
      </h1>
      <nav class="navPanel">
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
            <a
              class="icon solid"
              v-bind:class="{ 'fa-angle-down': !isShowing, 'fa-angle-up' :isShowing }"
              v-on:click="isShowing = !isShowing"
              style="cursor: pointer;"
            >More</a>
            <ul v-show="isShowing" class="dropdown">
              <li class="dropdown-item">
                <nuxt-link :to="'/blog'">News and blog</nuxt-link>
              </li>

              <li class="dropdown-item">
                <nuxt-link :to="'/revive'">Revive'n'thrive</nuxt-link>
              </li>
              <li class="dropdown-item">
                <nuxt-link :to="'/welcome'">I'm new</nuxt-link>
              </li>
              <li class="dropdown-item">
                <nuxt-link :to="'/find-jesus'">Find Jesus</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>

    <div v-show="isMobile">
      <div id="navButton" v-on:click="isShowing = !isShowing">
        <a href="#navPanel" class="toggle"></a>
      </div>
      <div v-show="isShowing">
        <sidebar-menu :menu="menu" :hideToggle="true" :width="'75%'" :rtl="true" />
      </div>
    </div>

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

<script>
export default {
  data: () => {
    return {
      isShowing: false,
      isMobile: false,
      menu: [
        {
          header: true,
          title: "Navigation"
        },
        {
          href: "/#",
          title: "Home",
          icon: "fa fa-home"
        },
        {
          href: "/events",
          title: "Events",
          icon: "fa fa-calendar"
        },
        {
          href: "/about",
          title: "About",
          icon: "fa fa-user"
        },
        {
          href: "/news",
          title: "News",
          icon: "fa fa-newspaper"
        },
        {
          href: "/welcome",
          title: "I'm new",
          icon: "fa fa-star"
        },
        {
          href: "/revive",
          title: "Revive'n'thrive",
          icon: "fa fa-wrench"
        },
        {
          href: "/find-jesus",
          title: "Find Jesus",
          icon: "fa fa-cross"
        }
      ]
    };
  },

  methods: {
    onScroll() {
      this.isShowing = false;
    },
    onClick() {
      // if (this.isShowing) {
      //   this.isShowing = false;
      // }
    },
    onResize() {
      this.isMobile = window.innerWidth <= 840;
    }
  },

  mounted() {
    this.isMobile = window.innerWidth <= 840;
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("click", this.onClick);
    window.addEventListener("resize", this.onResize, { passive: true });
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
    window.addEventListener("click", this.onClick);
    window.removeEventListener("resize", this.onResize, { passive: true });
  }
};
</script>

<style scoped>
.dropdown {
  position: absolute;
  right: 0px;
  background-color: #fff;
  padding: 0;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  transform: translateY(-10px);
  transition: all 0.4s ease;
}

.dropdown-item {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dropdown-item:hover {
  background-color: lightgrey;
}
</style>