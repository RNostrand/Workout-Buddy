<template>
  <div class="max-w-screen-md mx-auto px-4 py-10">

    <!--- Status Message---> 
    <div v-if="statusMsg || errMsg" class="mb-10 p-4 rounded-md bg-light-grey shadow-lg">
      <p class="text-navy">{{statusMsg}}</p>
      <p class="text-red-500">{{errMsg}}</p>
    </div>   


    <!--- Create ---> 
    <div class="p-8 flex items-start bg-light-grey rounded-md shadow-lg mb-40">
      <form @submit.prevent="createWorkout" class="flex flex-col gap-y-5 w-full">
        <h1 class="text-2xl text-navy">Record Workout</h1>

        <!--- Workout Name --->
        <div class="flex flex-col">
          <label for="workout-name" class="mb-1 text-sm text-at-light-greeb">Workout Name</label>
          <input 
          type="text" 
          required 
          class="p-2 text-gray-500 focus:outline-none" 
          id="workout-name" 
          v-model="workoutName"
          />
        </div>

        <!--- Workout Type --->
        <div class="flex flex-col">
          <label for="workout-type" class="mb-1 text-sm text-at-light-greeb">Workout Type</label>
          <select  
          required 
          class="p-2 text-gray-500 focus:outline-none" 
          id="workout-type" 
          v-model="workoutType"
          @change="workoutChange"
          >
            <option value="select-workout">Select Workout</option>
            <option value="strength">Strength Training</option>
            <option value="cardio">Cardio</option>
          </select>
        </div>

        <!--- Strength Training Inputs --->
        <div v-if="workoutType === 'strength'" class="flex flex-col gap-y-4">
          <div class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row" 
          v-for="(item, index) in exercises" 
          :key="index">

            <!--- Exercise --->
            <div class="flex flex-col md:w-1/3">
              <label for="exercise-name" class="mb-1 text-sm text-navy">Exercise</label>
              <input 
                type="text" 
                required 
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.exercise"
              />
            </div>

            <!--- Sets --->
            <div class="flex flex-col flex-1">
              <label for="sets" class="mb-1 text-sm text-navy">Sets</label>
              <input 
                type="text" 
                required 
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.sets"
              />
            </div>

            <!--- Reps --->
            <div class="flex flex-col flex-1">
              <label for="reps" class="mb-1 text-sm text-navy">Reps</label>
              <input 
                type="text" 
                required 
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.reps"
              />
            </div>

            <!--- Weight --->
            <div class="flex flex-col flex-1">
              <label for="weight" class="mb-1 text-sm text-navy">Weight (lbs)</label>
              <input 
                type="text" 
                required 
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.weight"
              />
            </div>

            <!--- Image ---> 
            <img @click="deleteExercise(item.id)" src="@/assets/images/trash-navy.png" class="h-4 w-auto absolute -left-5 cursor-pointer"/>
          </div>

          <!--- Add Exercise Button ---> 
            <button @click="addExercise" type="button" class="mt-6 py-2 px-6 rounded-md self-start text-sm text-white 
            bg-navy duration-200 border-solid border-2 border-transparent
            hover:border-navy hover:bg-white hover:text-navy">Add Exercise</button>
        </div>



        <!--- Cardio Inputs --->
        <div v-if="workoutType === 'cardio'" class="flex flex-col gap-y-4">
          <div class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row" 
          v-for="(item, index) in exercises" 
          :key="index">

            <!--- Cardio Type --->
            <div class="flex flex-col md:w-1/3">
              <label for="exercise-name" class="mb-1 text-sm text-navy">Type</label>
              <select  
                required 
                class="p-2 w-full text-gray-500 focus:outline-none" 
                id="cardio-type" 
                v-model="item.cardioType"
              >
                <option value="#">Select Type</option>
                <option value="Run">Run</option>
                <option value="Walk">Walk</option>
              </select>
            </div>

            <!--- Duration --->
            <div class="flex flex-col flex-1">
              <label for="duration" class="mb-1 text-sm text-navy">Duration (min)</label>
              <input 
                type="text" 
                required 
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.duration"
              />
            </div>

            <!--- Distance --->
            <div class="flex flex-col flex-1">
              <label for="distance" class="mb-1 text-sm text-navy">Distance</label>
              <input 
                type="text" 
                required 
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.distance"
              />
            </div>

            <!--- Pace --->
            <div class="flex flex-col flex-1">
              <label for="pace" class="mb-1 text-sm text-navy">Pace</label>
              <input 
                type="text" 
                required 
                class="p-2 w-full text-gray-500 focus:outline-none"
                v-model="item.pace"
              />
            </div>

            <!--- Image ---> 
            <img @click="deleteExercise(item.id)" src="@/assets/images/trash-navy.png" class="h-4 w-auto absolute -left-5 cursor-pointer"/>
          </div>

          <!--- Add Exercise Button ---> 
            <button @click="addExercise" type="button" class="mt-6 py-2 px-6 rounded-md self-start text-sm text-white 
            bg-navy duration-200 border-solid border-2 border-transparent
            hover:border-navy hover:bg-white hover:text-navy">Add Exercise</button>
        </div>

          <!--- Submit Button ---> 
            <button type="submit" class="mt-6 py-2 px-6 rounded-md self-start text-sm text-white 
            bg-navy duration-200 border-solid border-2 border-transparent
            hover:border-navy hover:bg-white hover:text-navy">Record Workout</button>
      </form>
    </div>

  </div>
</template>

<script>
import {ref} from "vue"
import {uid} from "uid"
import {supabase} from "../supabase/init.js"

export default {
  name: "create",
  setup() {
    // Create data
    const workoutName = ref("");
    const workoutType = ref("select-workout");
    const exercises = ref([]);
    const statusMsg = ref(null);
    const errMsg = ref(null);
    const user = supabase.auth.user();

    // Add exercise
    const addExercise = () => {
      if(workoutType.value ==='strength'){
        exercises.value.push({
          id: uid(),
          exercise: '',
          sets: '',
          reps: '',
          weight: '',
        });
        return
      }
      exercises.value.push({
        id: uid(),
        cardioType: '',
        distance: '',
        duration: '',
        pace: '',
      });
      
    }

    // Delete exercise
    const deleteExercise = (id) => {
      if(exercises.value.length > 1){
        exercises.value = exercises.value.filter((exercise) => exercise.id !== id);
        return;
      }
      errMsg.value = "Error: Cannot remove, need at least one exercise";
      setTimeout(() => {
            errMsg.value = null;
          }, 5000);
    }

    // Listens for chaging of workout type input
    const workoutChange = () => {
      exercises.value = [];
      addExercise();
    }

    // Create workout
    const createWorkout = async() => {
      try{
        const {error} = await supabase.from('Workouts').insert([{
          workoutName: workoutName.value,
          workoutType: workoutType.value,
          exercises: exercises.value,
          user: user.id,
        }]);
        if (error) throw error;
        statusMsg.value = 'Success: Workout Created!'
        workoutName.value = null;
        workoutType.value = "select-workout";
        exercises.value  = [];
        setTimeout(() => {
          statusMsg.value = null;
        }, 5000);
      }
      catch (error) {
        errMsg.value = `Error: ${error.message}`;
        setTimeout(() => {
          errMsg.value = null;
        }, 5000);
      }
    }

    return {workoutName, workoutType, exercises, statusMsg, errMsg, addExercise, deleteExercise, workoutChange, createWorkout};
  },
};
</script>
