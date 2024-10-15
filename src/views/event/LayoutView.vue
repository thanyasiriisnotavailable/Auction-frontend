<script setup lang="ts">
import { useAuctionItemStore } from '@/stores/auctionItem' // Correct import
import { storeToRefs } from 'pinia';

const store = useAuctionItemStore() // Correct store usage
const { auctionItem } = storeToRefs(store) // Correct the storeToRefs variable
</script>

<template>
  <div v-if="auctionItem">
    <h1 class="mb-5">{{ auctionItem.description }}</h1>
    <nav class="mb-5">
      <router-link class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'auction-item-detail-view' }">Details</router-link>
      |
      <router-link class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'auction-item-register-view' }">Register</router-link>
      |
      <router-link class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'auction-item-edit-view' }">Edit</router-link>
    </nav>
    <RouterView :auctionItem="auctionItem" />
  </div>
</template>