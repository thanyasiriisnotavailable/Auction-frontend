import type { AuctionItemState, AuctionItem } from '@/types'
import { defineStore } from 'pinia'

export const useAuctionItemStore = defineStore('auctionItem', {
  state: (): AuctionItemState => ({
    auctionItem: null
  }),
  actions: {
    setAuctionItem(auctionItem: AuctionItem): void {
      this.auctionItem = auctionItem
    }
  }
})
