import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/Home.vue";
import Contact from "../pages/contacts/Contact.vue";
import About from "../pages/about/About.vue";
import News from "../pages/news/News.vue";
import Post from "../pages/news/Post.vue";
import ProductGroups from "../pages/products/ProductGroups.vue";
import ProductGroup from "../pages/products/ProductGroup.vue";
import Product from "../pages/products/Product.vue";
import PrivacyPolicy from "../pages/static/PrivacyPolicy.vue";
import MapVue from "../pages/contacts/Map.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/news",
    component: News,
  },
  {
    path: "/news/:page",
    component: News,
  },
  {
    path: "/post/:id",
    component: Post,
  },
  {
    path: "/products",
    component: ProductGroups,
    name: "ProductGroups",
  },
  {
    path: "/products/:group",
    component: ProductGroup,
    name: "ProductGroup",
  },
  {
    path: "/product/:id",
    component: Product,
  },
  {
    path: "/policy",
    component: PrivacyPolicy,
  },
  {
    path: "/map",
    component: MapVue,
  },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
