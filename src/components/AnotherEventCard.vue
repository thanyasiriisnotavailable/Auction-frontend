<script setup lang="ts">
import { ref } from 'vue'
import type { Event } from '@/type'
defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="event-class">
    <div class="event-card">
      <h2>{{ event.category }}</h2>
      {{ event.organizer }}
    </div>
  </div>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  text-align: right;
  font-size: 20px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
