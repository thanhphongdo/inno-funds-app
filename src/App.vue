<template>
  <div class="d-flex flex-column h-100 page-container">
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <router-link to="/" class="navbar-brand">Inno Funds</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <main role="main" class="flex-shrink-0">
      <div class="main-container container">
        <router-view></router-view>
      </div>
    </main>

    <footer class="footer mt-auto py-3">
      <div class="container">
        <span class="text-muted">Innoria Funds 2021</span>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";
@Component
export default class App extends BaseComponent {
  mounted() {
    const self = this;
    (window as any).showLoading = () => {
      this.jQuery(".loading-container").css("display", "block");
      this.jQuery(".page-container").addClass("page-container-loading");
    };
    (window as any).hideLoading = () => {
      this.jQuery(".loading-container").css("display", "none");
      this.jQuery(".page-container").removeClass("page-container-loading");
    };
  }
}
</script>

<style lang="scss">
@import url("./assets/tailwindcss/dist/tailwind.min.css");
@import url("~bootstrap/dist/css/bootstrap.css");
@import url("./assets/main.scss");
</style>
