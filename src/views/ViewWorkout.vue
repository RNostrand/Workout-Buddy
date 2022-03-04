<template>
  <div class="max-w-screen-sm mx-auto px-4 py-10">
    <!--- Status Message--->
    <div
      v-if="statusMsg || errMsg"
      class="mb-10 p-4 rounded-md bg-light-grey shadow-lg"
    >
      <p class="text-navy">{{ statusMsg }}</p>
      <p class="text-red-500">{{ errMsg }}</p>
    </div>

    <!--- Data Loaded --->
    <div v-if="dataLoaded">
      <!--- General Info --->
      <div
        class="flex flex-col items-center p-8 rounded-md shadow-md bg-light-grey relative"
      >
        <!--- User Logged In --->
        <div v-if="loggedIn" class="flex absolute left-2 top-2 gap-x-2">
          <!--- Edit Image --->
          <div
            @click="editMode"
            class="h-7 w-7 rounded-full flex justify-center items-center cursor-pointer bg-navy shadow-lg"
          >
            <img
              class="h-3.5 w-auto"
              src="@/assets/images/pencil-light.png"
              alt=""
            />
          </div>

          <!--- Delete Image --->
          <div
            @click="deleteWorkout"
            class="h-7 w-7 rounded-full flex justify-center items-center cursor-pointer bg-navy shadow-lg"
          >
            <img
              class="h-3.5 w-auto"
              src="@/assets/images/trash-light.png"
              alt=""
            />
          </div>
        </div>

        <!--- Cardio Image --->
        <img
          v-if="data.workoutType === 'cardio'"
          class="h-24 w-auto"
          src="@/assets/images/running-navy.png"
          alt=""
        />

        <!--- Strength Image --->
        <img
          v-else
          class="h-24 w-auto"
          src="@/assets/images/dumbbell-navy.png"
          alt=""
        />

        <!--- Workout Type --->
        <span
          class="mt-6 py-1.5 px-5 text-xs text-white bg-navy rounded-lg shadow-md"
          >{{ data.workoutType }}</span
        >

        <!--- Display Name (+edit mode) --->
        <div class="w-full mt-6">
          <input
            v-if="edit"
            type="text"
            class="p-2 w-full text-gray-500 focus:outline-none"
            v-model="data.workoutName"
          />
          <h1 v-else class="text-navy text-2xl text-center">
            {{ data.workoutName }}
          </h1>
        </div>
      </div>

      <!--- Exercises --->
      <div
        class="flex flex-col mt-10 p-8 rounded-md item-center bg-light-grey shadow-lg mb-40"
      >
        <!--- Strength --->
        <div
          v-if="data.workoutType === 'strength'"
          class="flex flex-col w-full gap-y-4"
        >
          <div
            class="flex flex-col gap-x-6 gap-y-2 relative sm:flex-row"
            v-for="(item, index) in data.exercises"
            :key="index"
          >
            <!--- Display Exercises (+edit mode) --->
            <div class="flex flex-col flex-2 md:w-1/3">
              <label for="exercise-name" class="mb-1 text-sm text-navy"
                >Exercise</label
              >
              <input
                v-if="edit"
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                id="exercise-name"
                v-model="item.exercise"
              />
              <p v-else>{{ item.exercise }}</p>
            </div>

            <!--- Display Sets (+edit mode) --->
            <div class="flex flex-col flex-1">
              <label for="sets" class="mb-1 text-sm text-navy">Sets</label>
              <input
                v-if="edit"
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                id="sets"
                v-model="item.sets"
              />
              <p v-else>{{ item.sets }}</p>
            </div>

            <!--- Display Reps (+edit mode) --->
            <div class="flex flex-col flex-1">
              <label for="reps" class="mb-1 text-sm text-navy">Reps</label>
              <input
                v-if="edit"
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                id="reps"
                v-model="item.reps"
              />
              <p v-else>{{ item.reps }}</p>
            </div>

            <!--- Display Weight (+edit mode) --->
            <div class="flex flex-col flex-1">
              <label for="weight" class="mb-1 text-sm text-navy">Weight</label>
              <input
                v-if="edit"
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                id="weight"
                v-model="item.weight"
              />
              <p v-else>{{ item.weight }}</p>
            </div>

            <!--- Delete Image --->
            <img
              @click="deleteExercise(item.id)"
              v-if="edit"
              class="h-4 w-auto absolute -left-5 cursor-point"
              src="@/assets/images/trash-navy.png"
              alt=""
            />
          </div>

          <button
            @click="addExercise"
            v-if="edit"
            type="button"
            class="py-2 px-6 rounded-md self-start text-sm text-white bg-navy duration-200 border-solid border-2 border-transparent hover:border-navy hover:bg-navy hover:text-navy"
          >
            Add Exercise
          </button>
        </div>

        <!--- Cardio --->
        <div v-else class="flex flex-col w-full gap-y-4">
          <div
            class="flex flex-col gap-x-6 gap-y-2 relative sm:flex-row"
            v-for="(item, index) in data.exercises"
            :key="index"
          >
            <!--- Display Cardio Type (+edit mode) --->
            <div class="flex flex-col flex-2">
              <label for="cardioType" class="mb-1 text-sm text-navy"
                >Type</label
              >
              <select
                v-if="edit"
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                id="cardioType"
                v-model="item.cardioType"
              >
                <option value="#">Select Type</option>
                <option value="Run">Run</option>
                <option value="Walk">Walk</option>
              </select>
              <p v-else>{{ item.cardioType }}</p>
            </div>

            <!--- Display Duration (+edit mode) --->
            <div class="flex flex-col flex-2">
              <label for="duration" class="mb-1 text-sm text-navy"
                >Duration (min)</label
              >
              <input
                v-if="edit"
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                id="duration"
                v-model="item.duration"
              />
              <p v-else>{{ item.duration }}</p>
            </div>

            <!--- Display Distance (+edit mode) --->
            <div class="flex flex-col flex-2">
              <label for="distance" class="mb-1 text-sm text-navy"
                >Distance</label
              >
              <input
                v-if="edit"
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                id="distance"
                v-model="item.distance"
              />
              <p v-else>{{ item.distance }}</p>
            </div>

            <!--- Display Pace (+edit mode) --->
            <div class="flex flex-col flex-2">
              <label for="pace" class="mb-1 text-sm text-navy">Pace</label>
              <input
                v-if="edit"
                type="text"
                class="p-2 w-full text-gray-500 focus:outline-none"
                id="pace"
                v-model="item.pace"
              />
              <p v-else>{{ item.pace }}</p>
            </div>

            <!--- Delete Image --->
            <img
              @click="deleteExercise(item.id)"
              v-if="edit"
              class="h-4 w-auto absolute -left-5 cursor-point"
              src="@/assets/images/trash-navy.png"
              alt=""
            />
          </div>

          <button
            @click="addExercise"
            v-if="edit"
            type="button"
            class="py-2 px-6 rounded-md self-start text-sm text-white bg-navy duration-200 border-solid border-2 border-transparent hover:border-navy hover:bg-navy hover:text-navy"
          >
            Add Exercise
          </button>
        </div>
      </div>

      <!--- Update --->
      <button
        @click="update"
        v-if="edit"
        type="button"
        class="mt-10 py-2 px-6 rounded-md self-start text-sm text-white bg-navy duration-200 border-solid border-2 border-transparent hover:border-navy hover:bg-navy hover:text-navy"
      >
        Update Workout
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { supabase } from "../supabase/init.js";
import { useRoute, useRouter } from "vue-router";
import store from "../store/index.js";
import { uid } from "uid";

export default {
  name: "view-workout",
  setup() {
    // Create data / vars
    const data = ref(null);
    const dataLoaded = ref(null);
    const errMsg = ref(null);
    const statusMsg = ref(null);
    const route = useRoute();
    const router = useRouter();
    const loggedIn = computed(() => store.state.user);
    const user = supabase.auth.user();
    const demoId = process.env.VUE_APP_DEMO_ID;

    // Get current Id of route
    const currentId = route.params.workoutId;

    // Get workout data
    const getData = async () => {
      try {
        if (user) {
          const { data: workouts, error } = await supabase
            .from("Workouts")
            .select("*")
            .eq("user", user.id)
            .eq("id", currentId);
          if (error) throw error;
          data.value = workouts[0];
          dataLoaded.value = true;
        } else {
          const { data: workouts, error } = await supabase
            .from("Workouts")
            .select("*")
            .eq("user", demoId)
            .eq("id", currentId);
          if (error) throw error;
          data.value = workouts[0];
          dataLoaded.value = true;
        }
      } catch (error) {
        errMsg.value = `Error: ${error.message}`;
        setTimeout(() => {
          errMsg.value = null;
        }, 5000);
      }
    };
    getData();

    // Delete workout
    const deleteWorkout = async () => {
      try {
        const { error } = await supabase
          .from("Workouts")
          .delete()
          .eq("id", currentId);
        if (error) throw error;
        router.push({ name: "Workouts" });
      } catch (error) {
        errMsg.value = `Error: ${error.message}`;
        setTimeout(() => {
          errMsg.value = null;
        }, 5000);
      }
    };

    // Edit mode
    const edit = ref(null);
    const editMode = () => {
      edit.value = !edit.value;
    };

    // Add exercise
    const addExercise = () => {
      if (data.value.workoutType === "strength") {
        data.value.exercises.push({
          id: uid(),
          exercise: "",
          sets: "",
          reps: "",
          weight: "",
        });
        return;
      }
      data.value.exercises.push({
        id: uid(),
        cardioType: "",
        distance: "",
        duration: "",
        pace: "",
      });
    };

    // Delete exercise
    const deleteExercise = (id) => {
      if (data.value.exercises.length > 1) {
        data.value.exercises = data.value.exercises.filter(
          (exercise) => exercise.id !== id
        );
        return;
      }
      errMsg.value = "Error: Cannot remove, need at least one exercise";
      setTimeout(() => {
        errMsg.value = null;
      }, 5000);
    };

    // Update Workout
    const update = async () => {
      try {
        const { error } = await supabase
          .from("Workouts")
          .update({
            workoutName: data.value.workoutName,
            exercises: data.value.exercises,
          })
          .eq("id", currentId);
        if (error) throw error;
        edit.value = null;
        statusMsg.value = "Success: Workout Updated!";
        setTimeout(() => {
          statusMsg.value = null;
        }, 5000);
      } catch (error) {
        errMsg.value = `Error: ${error.message}`;
        setTimeout(() => {
          errMsg.value = null;
        }, 5000);
      }
    };

    return {
      data,
      dataLoaded,
      errMsg,
      statusMsg,
      loggedIn,
      edit,
      deleteWorkout,
      editMode,
      addExercise,
      deleteExercise,
      update,
    };
  },
};
</script>
