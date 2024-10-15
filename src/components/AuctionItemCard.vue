<script setup lang="ts">
import type { AuctionItem } from '@/types'

defineProps<{
  auctionItem: AuctionItem
}>()
</script>

<template>
  <div class="auction-item-class">
    <RouterLink class="auction-item-link" :to="{ name: 'auction-item-detail-view', params: { id: auctionItem.id } }">
      <div class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp">
        <h2 class="text-xl">{{ auctionItem.description }}</h2>
        <span>Type:</span>
        <h5>{{ auctionItem.type }}</h5>
        <span v-if="auctionItem.successfulBid">Successful Bid: ${{ auctionItem.successfulBid.amount }}</span>
        <span v-else>No successful bid yet</span>
        <span>Total Bids: {{ auctionItem.bidHistory.length }}</span>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.auction-item-class {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auction-item-link {
  text-decoration: none;
  color: inherit;
}
</style>
