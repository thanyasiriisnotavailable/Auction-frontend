<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import type { Event } from '@/types'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'
const store = useMessageStore()
const { message } = storeToRefs(store)

const props = defineProps<{
  event: Event
  id: String
}>()
const { event } = toRefs(props)
</script>
<template>
  <div id="flashMessage" class="animate-fade" v-if="message">
    <h4>{{ message }}</h4>
  </div>
  <p>{{ event.title }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
  <div class="flex flex-row flex-wrap justify-center">
    <img v-for="image in event.images" :key="image" :src="image" alt="events image"
      class="border-solid border-gray-200 border-2 rounded p-1 m-1 w-40
      hover:show-lg" />
  </div>
</template>

<!-- <style>
@keyframes yellofade {
  from {
    background-color: yellow;
  }
  to {
    background-color: transparent;
  }
}

#flashMessage {
  animation: yellofade 3s ease-in-out;
}
</style> -->
