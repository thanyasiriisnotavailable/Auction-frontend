import type { AuctionItem } from "@/types";
import axios, { type AxiosResponse } from "axios";
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getAuctionItems(perPage: number, page: number) {
    return apiClient.get('/auctionItems?_limit=' + perPage + '&_page=' + page);
  },
  getAuctionItem(id: number) {
    return apiClient.get('/auctionItems/' + id);
  },
  saveAuctionItem(item: AuctionItem) {
    return apiClient.post('/auctionItems', item);
  },
  getAuctionItemsByKeyword(keyword: string, perPage: number, page: number): Promise<AxiosResponse<AuctionItem[]>> {
    return apiClient.get<AuctionItem[]>('/auctionItems?keyword=' + keyword + '&_limit=' + perPage + '&_page=' + page);
  }
};
