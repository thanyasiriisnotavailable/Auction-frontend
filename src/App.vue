<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { SpeedInsights } from "@vercel/speed-insights/next"
</script>

<template>
  <SpeedInsights />
  <div class="text-center font-sans text-gray-700 antialias">
    <header>
      <div class="wrapper">
        <nav class="py-6">
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'event-list-view', query: { perPage: 2, page: 1 } }">Event</RouterLink> |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'about' }">About</RouterLink>
        </nav>
      </div>
    </header>
    <h1>Deploy with Vercel</h1>
    <RouterView />
  </div>
</template>