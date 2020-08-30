import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contents",
    name: "Contents",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contents.vue"),
    children: [
      {
        path: "profile",
        name: "content-profile",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/ContentProfile.vue"),
      },
      {
        path: "program",
        name: "content-program-list",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/ContentProgramList.vue"
          ),
      },
      {
        path: "program/:id",
        name: "content-program",
        props: true,
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/ContentProgram.vue"),
      },
      {
        path: "drawing",
        name: "content-drawing-list",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/ContentDrawingList.vue"
          ),
      },
      {
        path: "contact",
        name: "content-contact",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/ContentContact.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
