<script setup lang="ts">
import AuctionItemCard from '@/components/AuctionItemCard.vue';
import type { AuctionItem } from '@/types';
import { ref, onMounted, computed, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AuctionItemService from '@/services/AuctionItemService';
import BaseInput from '@/components/BaseInput.vue';

const route = useRoute();
const router = useRouter();

const auctionItems = ref<AuctionItem[] | null>(null);
const totalAuctionItems = ref(0);
const perPage = computed(() => parseInt(route.query.perPage as string) || 2);
const page = computed(() => parseInt(route.query.page as string) || 1);
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalAuctionItems.value / perPage.value);
  return page.value < totalPages;
});

const hasPrevPage = computed(() => page.value > 1);

onMounted(() => {
  watchEffect(() => {
    AuctionItemService.getAuctionItems(perPage.value, page.value)
      .then((response) => {
        auctionItems.value = response.data;
        totalAuctionItems.value = 5;
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  });
});

const keyword = ref('');
function updateKeyword(value: string) {
  let queryFunction;
  if (keyword.value === '') {
    queryFunction = AuctionItemService.getAuctionItems(perPage.value, page.value);
  } else {
    queryFunction = AuctionItemService.getAuctionItemsByKeyword(keyword.value, perPage.value, page.value);
  }
  queryFunction
    .then((response) => {
      auctionItems.value = response.data;
      totalAuctionItems.value = parseInt(response.headers['x-total-count']);
    })
    .catch(() => {
      router.push({ name: 'network-error-view' });
    });
}

console.log('Total Auction Items:', totalAuctionItems.value);
console.log('Page:', page.value);
console.log('Per Page:', perPage.value);
console.log('Has Next Page:', hasNextPage.value);
</script>
<template>
  <h1>Auction Items</h1>
  <div class="flex flex-col items-center">
    <div class="w-64">
      <BaseInput v-model="keyword" type="text" label="Search..." @input="updateKeyword" />
    </div>
    <AuctionItemCard v-for="item in auctionItems" :key="item.id" :auction-item="item" />
    <div class="flex w-72">
      <!-- Previous Page -->
      <RouterLink
        class="flex-1 text-left text-gray-700"
        :to="{ name: 'auction-item-list-view', query: { page: page - 1, perPage: perPage } }"
        rel="prev"
        v-if="hasPrevPage"
      >
        &#60; Prev Page
      </RouterLink>

      <!-- Next Page -->
      <RouterLink
        class="flex-1 text-right text-gray-700"
        :to="{ name: 'auction-item-list-view', query: { page: page + 1, perPage: perPage } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next Page &#62;
      </RouterLink>
    </div>
  </div>
</template>
