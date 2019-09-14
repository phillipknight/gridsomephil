// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import TopNavigation from '~/components/TopNavigation.vue'

import 'prismjs/themes/prism-okaidia.css'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),
  Vue.component('TopNavigation', TopNavigation)
}
