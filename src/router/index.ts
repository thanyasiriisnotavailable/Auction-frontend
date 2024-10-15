import { createRouter, createWebHistory } from 'vue-router'
import AuctionItemListView from '@/views/AuctionItemListView.vue'
import AboutView from '@/views/AboutView.vue'
import AuctionItemDetailView from '@/views/event/DetailView.vue'
import AuctionItemRegisterView from '@/views/event/RegisterView.vue'
import AuctionItemEditView from '@/views/event/EditView.vue'
import AuctionItemLayoutView from '@/views/event/LayoutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'
import nProgress from 'nprogress'
import AuctionItemService from '@/services/AuctionItemService'
import { useAuctionItemStore } from '@/stores/auctionItem'
import AddOrganizerView from '@/views/OrganizerFormView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auction-item-list-view',
      component: AuctionItemListView,
      props: (route) => ({ page: parseInt(route.query.page?.toString() || '1') })
    },
    {
      path: '/auction-item/:id',
      name: 'auction-item-layout-view',
      component: AuctionItemLayoutView,
      props: true,
      beforeEnter: (to) => {
        const id = parseInt(to.params.id as string)
        const auctionItemStore = useAuctionItemStore()
        return AuctionItemService.getAuctionItem(id)
          .then((response) => {
            // Set up the data for the auction item
            auctionItemStore.setAuctionItem(response.data)
          })
          .catch((error) => {
            if (error.response && error.response.status === 404) {
              return {
                name: '404-resource-view',
                params: { resource: 'auction item' }
              }
            } else {
              return { name: 'network-error-view' }
            }
          })
      },
      children: [
        {
          path: '',
          name: 'auction-item-detail-view',
          component: AuctionItemDetailView,
          props: true
        },
        {
          path: 'register',
          name: 'auction-item-register-view',
          component: AuctionItemRegisterView,
          props: true
        },
        {
          path: 'edit',
          name: 'auction-item-edit-view',
          component: AuctionItemEditView,
          props: true
        }
      ]
    },

    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/add-organizer',
      name: 'add-organizer',
      component: AddOrganizerView
    },
    {
      path: '/404/:resource',
      name: '404-resource-view',
      component: NotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/network-error',
      name: 'network-error-view',
      component: NetworkErrorView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach(() => {
  nProgress.start()
})

router.afterEach(() => {
  nProgress.done()
})

export default router