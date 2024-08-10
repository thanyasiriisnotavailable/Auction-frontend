<script setup lang="ts">
import { toRefs } from 'vue'
import type { Event } from '@/types'
import { useRouter } from 'vue-router';
import { useMessageStore } from '@/stores/message'

const props = defineProps<{
  event: Event
  id: String
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)
const router = useRouter()
const store = useMessageStore()
const edit = () => {
  store.updateMessage('The detail of ' + props.event.title + ' has been updated successfully!')
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({ name: 'event-detail-view', params: { id: props.event.id }})
}
</script>
<template>
  <p>Edit event here</p>
  <button class="px-8 py-2 mt-3 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-700 focus:outline-none" @click="edit" >Edit</button>
</template>
