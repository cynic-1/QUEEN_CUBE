
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'solutions',
        component: () => import('pages/SolutionList.vue'),
      },
      {
        path: 'solutions/:name',
        component: () => import('pages/SolutionDetail.vue')
      },
      {
        path: 'searchResults',
        component: () => import('pages/SearchResults.vue')
      },
      {
        path: 'download/:productLine?/:product?',
        component: () => import('pages/DownloadPage.vue')
      },
      {
        path: 'productCenter/:productLine?/:product?',
        component: () => import('pages/ProductList.vue')
      },
      {
        path: 'news',
        component: () => import('pages/NewsListPage.vue')
      },
      {
        path: 'about',
        component: () => import('pages/AboutPage.vue')
      },
      {
        path: 'detail',
        component: () => import('pages/DetailPage.vue')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
