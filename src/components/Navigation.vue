<template>
  <header class="bg-navy text-white">
    <nav class="container  py-5 px-4 flex flex-row gap-4 items-center">

      <div class="flex items-center gap-x-4"><!--- branding --->
        <router-link :to="{name: 'Home'}">
          <img class="w-14" src="../assets/images/home.png" alt=""/>
        </router-link>
      </div>

      <ul class="hidden sm:flex sm:flex-1 sm:justify-end sm:gap-x-10"><!--- navigation --->
        <router-link v-if="!user" class="cursor-pointer duration-200 border-solid border-b-2 border-transparent
        hover:border-gray-400 hover:text-gray-400" :to="{name: 'Home'}">Home</router-link>
        <router-link v-if="user" class="cursor-pointer duration-200 border-solid border-b-2 border-transparent
        hover:border-gray-400 hover:text-gray-400" :to="{name: 'Workouts'}">Workouts</router-link>
        <router-link v-if="user" class="cursor-pointer duration-200 border-solid border-b-2 border-transparent
        hover:border-gray-400 hover:text-gray-400" :to="{name: 'Create'}">Create</router-link>
        <router-link v-if="!user" class="cursor-pointer duration-200 border-solid border-b-2 border-transparent
        hover:border-gray-400 hover:text-gray-400" :to="{name: 'Login'}">Login</router-link>
        <li v-if="user" @click="logout" class="cursor-pointer duration-200 border-solid border-b-2 border-transparent
        hover:border-gray-400 hover:text-gray-400">Logout</li>
      </ul>

      <div class="flex flex-1 items-center justify-end sm:hidden">
        <i @click="toggleMobileNav" class="easin-in duration-1000 fa-solid fa-bars fa-xl cursor-pointer" :class="{'icon-active': mobileNav}"></i>
      </div>

      <transition name="mobile-nav" class=""> <!--- drop-down nav---> 
        <ul v-show="mobileNav" class="flex flex-col fixed h-full text-xl top-0 left-0 w-1/3 bg-gray-500 text-white sm:hidden">
          <router-link v-if="!user" class="w-2/5 cursor-pointer duration-200 border-solid border-b-2 border-transparent
          hover:border-navy hover:text-navy mx-4 mt-4 mb-2" :to="{name: 'Home'}">Home</router-link>
          <router-link v-if="user" class="w-2/5 cursor-pointer duration-200 border-solid border-b-2 border-transparent
          hover:border-navy hover:text-navy mx-4 mt-4 mb-2 " :to="{name: 'Workouts'}">Workouts</router-link>
          <router-link v-if="user" class="w-2/5 cursor-pointer duration-200 border-solid border-b-2 border-transparent
          hover:border-navy hover:text-navy mx-4 my-2" :to="{name: 'Create'}">Create</router-link>
          <router-link v-if="!user" class="w-2/5 cursor-pointer duration-200 border-solid border-b-2 border-transparent
          hover:border-navy hover:text-navy mx-4 my-2" :to="{name: 'Login'}">Login</router-link>
          <li v-if="user" @click="logout" class="w-2/5 cursor-pointer duration-200 border-solid border-b-2 border-transparent
          hover:border-navy hover:text-navy mx-4 my-2">Logout</li>
        </ul>
      </transition>
    

    </nav>
    
  </header>
</template>

<script>
import {supabase} from '../supabase/init.js';
import {useRouter} from 'vue-router';
import store from '../store/index.js';
import {computed} from 'vue';

export default {
  
  setup() {
    // Get user from store
    const user = computed(() => store.state.user)

    // Setup ref to router
    const router = useRouter();

    // Logout function
    const logout = async () => {
      await supabase.auth.signOut();
      router.push({name: 'Workouts'});
    }
    return {logout, user};
  },
  
  data(){
    return {mobileNav:null};
  },
  
  methods: {
      toggleMobileNav(){
      this.mobileNav = !this.mobileNav;
    },
  },

};
</script>


<style lang="scss" scoped>
  header {
    nav{
      .icon-active{
        transform:rotate(90deg);
      }
    .mobile-nav-enter-active,
    .mobile-nav-leave-active{
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to{
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to{
      transform: translateX(0px);
    }
    }
  }

</style>