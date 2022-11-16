<script setup>
// import Header from './components/Header.vue'
import Selector from "./components/view/SelectorView.vue";
import Window from "./components/dashboard/WindowView.vue";
import Footer from "./components/Footer.vue";

import { ref, onMounted } from "vue";
import { animate } from "motion";

let view = ref("view");

onMounted(() => {
  // Animation on load
  const viewComponent = document.getElementById("view");
  animate(viewComponent, { opacity: 0 }, { easing: "ease-out" });
  setTimeout(() => {
    animate(viewComponent, { opacity: 1 }, { easing: "ease-out" });
  }, 300);
});

// Change between views - View, and Dashboard
function changeView(input) {
  const component = document.getElementById(input);
  view.value = input;
}
</script>

<template>
  <div class="h-screen">
    <!-- <Header /> -->
    <div class="navbar bg-neutral text-neutral-content">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" href=".">⚗️ Novo Data</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li><a @click="changeView('view')">View</a></li>
          <li><a @click="changeView('dashboard')">Dashboard</a></li>
        </ul>
      </div>
    </div>

    <!-- View -->
    <Selector id="view" v-if="view === 'view'" class="min-h-screen" />
    <!-- Dashboard -->
    <Window id="dashboard" v-if="view === 'dashboard'" class="min-h-screen" />

    <Footer />
  </div>
</template>
