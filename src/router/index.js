import { createRouter, createWebHistory, } from "vue-router"
import Workouts from "../views/Workouts.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Create from "../views/Create.vue"
import ViewWorkout from "../views/ViewWorkout.vue"
import NotFound from "../views/NotFound.vue"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import {supabase} from "../supabase/init.js"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
      auth: false,
    },
  },
  {
    path: "/workouts",
    name: "Workouts",
    component: Workouts,
    meta: {
      title: "Workouts",
      auth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
      auth: false,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register",
      auth: false,
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "About",
      auth: false,
    },
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
    meta: {
      title: "Create",
      auth: true,
    },
  },
  {
    path: "/view-workout/:workoutId",
    name: "View-Workout",
    component: ViewWorkout,
    meta: {
      title: "View Workout",
      auth: false,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Not-Found",
    component: NotFound,
    meta: {
      title: "Page Not Found",
      auth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Change document titles
router.beforeEach((to, from, next) =>{
  document.title=  `${to.meta.title} | Active Tracker`;
  next();
});

// Route guard for auth routes
router.beforeEach((to, from, next) =>{
  const user = supabase.auth.user();
  if(to.matched.some((res) => res.meta.auth)){
    if(user){
      next();
      return;
    }
    next({name: "Login"});
    return;
  }
  next();
});
export default router;
