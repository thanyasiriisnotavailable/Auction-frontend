<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import type { AuctionItem } from '@/types'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'

const store = useMessageStore()
const { message } = storeToRefs(store)

const props = defineProps<{
  auctionItem: AuctionItem
  id: string
}>()

const { auctionItem } = toRefs(props)
</script>
<template>
  <div id="flashMessage" class="animate-fade" v-if="message">
    <h4>{{ message }}</h4>
  </div>
  <p>{{ auctionItem.description }} (Type: {{ auctionItem.type }})</p>
  <div v-if="auctionItem.successfulBid">
    <p>Successful Bid: ${{ auctionItem.successfulBid.amount }} at {{ auctionItem.successfulBid.datetime }}</p>
  </div>
  <div v-else>
    <p>No successful bid yet.</p>
  </div>
  <p>Total Bids: {{ auctionItem.bidHistory.length }}</p>
  <div class="flex flex-row flex-wrap justify-center">
    <!-- You could add images or other content related to auctionItem if needed -->
  </div>
</template>