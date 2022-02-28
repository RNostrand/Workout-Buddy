<template>
  <div class="max-w-screen-sm mx-auto px-4 py-10">

    <!--- Error Handling ---> 
    <div v-if="errMsg" class="mb-10 p-4 rounded-md bg-light-grey shadow-lg">
      <p class="text-red-500">{{errMsg}}</p>
    </div>   

    <!--- Login ---> 
    <form @submit.prevent="login" class="p-8 flex flex-col bg-light-grey rounded-md shadow-lg mb-40">
      <h1 clas="text-3xl text-navy mb-4">Login</h1>

      <!--- Email ---> 
      <div class="flex flex-col mb-2">
        <label for="email" class="mb-1 text-sm text-navy">Email</label>
        <input 
        type="text" 
        required 
        class="p-2 text-grey-500 focus:outline-none" 
        id="email"
        v-model="email"
        />
      </div>

      <!--- Password ---> 
      <div class="flex flex-col mb-2">
        <label for="password" class="mb-1 text-sm text-navy">Password</label>
        <input 
        type="password" 
        required 
        class="p-2 text-grey-500 focus:outline-none" 
        id="password"
        v-model="password"
        />
      </div>

      <!--- Submit Button ---> 
      <button type="submit" class="mt-6 py-2 px-6 rounded-md self-start text-sm text-white 
      bg-navy duration-200 border-solid border-2 border-transparent
      hover:border-navy hover:bg-white hover:text-navy">Login</button>
    
      <!--- Register Link ---> 
      <router-link class="text-sm mt-6 text-center" :to="{name: 'Register'}">
        Don't have an account? <span class="text-navy">Register</span>
      </router-link>
    </form>
  </div>
</template>

<script>
import {ref} from "vue"
import {supabase} from "../supabase/init.js"
import {useRouter} from "vue-router"

export default {
  name: "login",
  setup() {
    // Create data / vars
    const email = ref(null);
    const password = ref(null);
    const errMsg = ref(null);
    const router = useRouter();

    // Login function
      const login = async() => {
        try {
          const {error} = await supabase.auth.signIn({
            email: email.value,
            password: password.value,
          });
          if (error) throw error;
          router.push({name: 'Workouts'});
        } 
        catch (error) {
          errMsg.value = `Error: ${error.message}`;
          setTimeout(() => {
            errMsg.value = null;
          }, 5000);
        }

    };
    return {email, password, errMsg, login};
  },
};
</script>
