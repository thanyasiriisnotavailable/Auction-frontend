export interface AuctionItem {
  id: number;
  description: string;
  type: string;
  bidHistory: Bid[];
  successfulBid: Bid | null;
}

export interface Bid {
  id: number;
  amount: number;
  datetime: string;
}

export interface AuctionItemState {
  auctionItem: AuctionItem | null;
}