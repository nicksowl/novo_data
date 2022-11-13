<script setup>
// import Header from './components/Header.vue'
import Selector from './components/view/SelectorView.vue'
import Window from './components/dashboard/Window.vue'
import Footer from './components/Footer.vue'

import { ref } from 'vue'

let view = ref('view')
function changeView(input) {
  view.value = input
}

</script>

<template>

  <div class="">
    <!-- <Header /> -->
    <div class="navbar bg-neutral text-neutral-content">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl" href=".">Novo Data</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li><a @click="changeView('view')">View</a></li>
        <li><a @click="changeView('dashboard')">Dashboard</a></li>
      </ul>
    </div>
  </div>
    <Selector v-if="view === 'view'" class="h-screen" />
    <Window v-if="view === 'dashboard'" class="" />
    <Footer />
  </div>

</template>
