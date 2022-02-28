<template>

  <!--- Error Handling ---> 
  <div v-if="errMsg" class="mb-10 p-4 rounded-md bg-light-grey shadow-lg">
    <p class="text-red-500">{{errMsg}}</p>
  </div>

  <!--- Data Loaded --->
  <div v-if="dataLoaded" class="container mt-10 mb-40 px-4">

    <!--- No Data --->
    <div v-if="data.length === 0" class="w-full flex flex-col items-center">
      <h1 class="text-2xl">Looks empty here...</h1>
      <router-link 
      :to="{name: 'Create'}" 
      class="mt-6 py-2 px-6 rounded-md text-sm text-white 
      bg-navy duration-200 border-solid border-2 border-transparent
      hover:border-navy hover:bg-white hover:text-navy">Create Workout</router-link>
    </div>

    <!--- Has Data --->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <router-link
        :to="{name: 'View-Workout', params: {workoutId: workout.id}}"
        class="flex flex-col items-center bg-light-grey p-8 shadow-md cursor-pointer 
        hover:border-navy hover:bg-gray-400 duration-200 border-solid border-2 border-transparent"
        v-for="(workout, index) in data"
        :key="index">

          <!--- Cardio Image --->
          <img v-if="workout.workoutType === 'cardio'" src="@/assets/images/running-navy.png" alt="" class="h-24 w-auto">

          <!--- Strength Image --->
          <img v-else src="@/assets/images/dumbbell-navy.png" alt="" class="h-24 w-auto">

          <!--- Workout Type --->
          <p class="mt-6 py-1 px-3 text-xs text-white bg-navy shadow-md rounded-lg">{{workout.workoutType}}</p>

          <!--- Workout Name --->
          <h1 class="mt-8 mb-2 text-center text-xl text-navy">{{workout.workoutName}}</h1>

        </router-link>
    </div>
  </div>
</template>

<script>
import {ref} from "vue"
import {supabase} from "../supabase/init.js"

export default {
  name: "workouts",
  components: {},
  setup() {
    // Create data / vars
    const data = ref([]);
    const dataLoaded = ref(null);
    const errMsg = ref(null);
    const user = supabase.auth.user();

    // Get data
    const getData = async() => {
      try{
        const {data: workouts, error} = await supabase.from('Workouts').select('*').eq('user', user.id);
        if (error) throw error;
        data.value = workouts;
        dataLoaded.value = true;
      }
      catch (error) {
        errMsg.value = `Error: ${error.message}`;
        setTimeout(() => {
          errMsg.value = null;
        }, 5000);
      }
    }

    // Run data function
    getData();
    console.log(data);
    return {data, dataLoaded, errMsg};
  },
};
</script>
