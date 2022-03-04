<template>
  <body>
    <!-- Main -->
    <section class="">
      <div
        class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28"
      >
        <!-- Content -->
        <div class="flex flex-1 flex-col items-center lg:items-start lg:pl-2">
          <!-- Welcome -->
          <h2
            class="text-navy text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6"
          >
            Welcome to<br />Workout Buddy!
          </h2>
          <p
            class="w-3/4 lg:w-5/6 text-gray-500 text-lg text-center lg:text-left mb-6"
          >
            A clean and simple way to track your exercises. Try it out below!
          </p>

          <!-- Buttons -->
          <div class="flex justify-center flex-row gap-6">
            <router-link :to="{ name: 'Login' }">
              <button
                type="button"
                class="py-2 px-6 rounded-md self-start text-md text-white bg-navy duration-200 border-solid border-2 border-transparent hover:border-navy hover:bg-white hover:text-navy"
              >
                &nbsp; Login &nbsp;
              </button>
            </router-link>

            <router-link :to="{ name: 'Register' }">
              <button
                type="button"
                class="py-2 px-6 rounded-md self-start text-md text-white bg-navy duration-200 border-solid border-2 border-transparent hover:border-navy hover:bg-white hover:text-navy"
              >
                Register
              </button>
            </router-link>
          </div>
        </div>

        <!-- Image -->
        <div class="flex justify-center flex-1 mb-0 z-10">
          <img
            class="w-2/5 h-2/5 md:w-1/2 md:h-1/2 lg:w-3/5 lg:h-3/5 lg:mr-8"
            src="../assets/images/notes.png"
            alt=""
          />
        </div>
      </div>

      <!-- Styling -->
      <div
        class="hidden lg:block overflow-hidden bg-navy-bright rounded-l-full absolute h-60 w-1/2 top-80 lg:-bottom-10 lg:-right-40"
      ></div>
    </section>

    <!-- Try it Out -->
    <section class="py-20 mt-20">
      <!-- Header -->
      <div class="w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-3xl text-center text-navy">Try it out!</h1>
        <p class="text-center text-md text-gray-500 mt-4">
          Create exercise cards like these! Track how much weight you lifted
          during a workout or how far you went on a run. Click on one to see
          more!
        </p>
      </div>
      <!--- Data Loaded --->
      <div v-if="dataLoaded" class="container mt-10 px-4">
        <!--- Has Data --->
        <div
          v-if="data"
          class="grid grid-cols-1 mx-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <router-link
            :to="{ name: 'View-Workout', params: { workoutId: workout.id } }"
            class="flex flex-col items-center bg-light-grey p-8 shadow-md cursor-pointer hover:border-navy hover:bg-gray-400 duration-200 border-solid border-2 border-transparent"
            v-for="(workout, index) in data"
            :key="index"
          >
            <!--- Cardio Image --->
            <img
              v-if="workout.workoutType === 'cardio'"
              src="@/assets/images/running-navy.png"
              alt=""
              class="h-24 w-auto"
            />

            <!--- Strength Image --->
            <img
              v-else
              src="@/assets/images/dumbbell-navy.png"
              alt=""
              class="h-24 w-auto"
            />

            <!--- Workout Type --->
            <p
              class="mt-6 py-1 px-3 text-xs text-white bg-navy shadow-md rounded-lg"
            >
              {{ workout.workoutType }}
            </p>

            <!--- Workout Name --->
            <h1 class="mt-8 mb-2 text-center text-xl text-navy">
              {{ workout.workoutName }}
            </h1>
          </router-link>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-white py-20">
      <div class="container">
        <!-- Header -->
        <div class="w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 class="text-3xl text-center text-navy">
            Frequently Asked Questions
          </h1>
          <p class="text-center text-gray-500 mt-4 text-md">
            If you have any other questions you would like answered please feel
            free to email me.
          </p>
        </div>
        <!-- FAQ Items -->
        <div class="flex flex-col w-3/4 lg:w-5/12 mt-12 mx-auto mb-20">
          <!-- Q1 -->
          <div class="faq">
            <div class="flex items-center border-b py-4">
              <span class="flex-1 px-2 text-lg">Who are you?</span>
              <i
                @click="toggleShowAnswer(1)"
                class="cursor-pointer text-navy-bright fas fa-chevron-down easin-in duration-300"
                :class="{ 'icon-active': showAnswer1 }"
              ></i>
            </div>

            <p
              v-show="showAnswer1"
              class="transition text-md p-2 h-25 border-b-2 border-t-0 rounded-md bg-light-grey border-solid border-navy"
            >
              I am a computer science student graduating from the University of
              California, Merced in May 2022. For more Information visit my
              Github or LinkedIn found at the bottom of the page
            </p>
          </div>

          <!-- Q2 -->
          <div class="faq">
            <div class="flex items-center border-b py-4">
              <span class="flex-1 px-2 text-lg"
                >How can I get in contact with you?</span
              >
              <i
                @click="toggleShowAnswer(2)"
                class="text-navy-bright fas fa-chevron-down easin-in duration-500"
                :class="{ 'icon-active': showAnswer2 }"
              ></i>
            </div>

            <p
              v-show="showAnswer2"
              class="transition text-md p-2 h-25 border-b-2 border-t-0 rounded-md bg-light-grey border-solid border-navy"
            >
              You can email me using the form below or directly at
              Rnostrand1@gmail.com
            </p>
          </div>

          <!-- Q3 -->
          <div class="faq">
            <div class="flex items-center border-b py-4">
              <span class="flex-1 px-2 text-lg"
                >What frameworks are used to create this?</span
              >
              <i
                @click="toggleShowAnswer(3)"
                class="text-navy-bright fas fa-chevron-down easin-in duration-500"
                :class="{ 'icon-active': showAnswer3 }"
              ></i>
            </div>

            <p
              v-show="showAnswer3"
              class="transition ease-in-out duration-300 text-md p-2 h-25 border-b-2 border-t-0 rounded-md bg-light-grey border-solid border-navy"
            >
              The frontend is configured with Vue 3 and Tailwind CSS and the
              backend utilizes Supabase
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Me -->
    <section class="bg-navy-bright text-white py-20 mb-20">
      <div class="container">
        <div class="w-3/4 lg:w-2/4 mx-auto">
          <h1 class="text-3xl text-center">Contact Me</h1>
          <form
            class="flex flex-col flex-row gap-2 mt-8"
            ref="form"
            @submit.prevent="sendEmail"
          >
            <label class="text-xl text-navy font-medium">Name</label>
            <input
              type="text"
              name="name"
              required=""
              placeholder="Enter your name"
              class="w-full focus:outline-none flex-1 px-2 py-3 rounded-md text-black"
            />

            <label class="text-xl text-navy font-medium mt-6">Subject</label>
            <input
              type="text"
              name="subject"
              required=""
              placeholder="Enter your subject"
              class="w-full focus:outline-none flex-1 px-2 py-3 rounded-md text-black"
            />

            <label class="text-xl text-navy font-medium mt-6">Email</label>
            <input
              type="text"
              name="email"
              required=""
              placeholder="Enter your email address"
              class="w-full focus:outline-none flex-1 px-2 py-3 rounded-md text-black"
            />

            <label class="text-xl text-navy font-medium mt-6">Message</label>
            <textarea
              type="text"
              name="message"
              required=""
              placeholder="Enter your message"
              class="w-full h-60 focus:outline-none flex px-2 py-3 rounded-md text-black"
            ></textarea>

            <button
              type="submit"
              class="mt-6 py-2 px-6 rounded-md self-start text-sm text-white bg-navy duration-200 border-solid border-2 border-transparent hover:border-navy hover:bg-white hover:text-navy"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  </body>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase/init.js";
import emailjs from "@emailjs/browser";

export default {
  name: "home",
  components: {},

  setup() {
    // Create data / vars
    const data = ref([]);
    const dataLoaded = ref(null);
    const demoId = process.env.VUE_APP_DEMO_ID;

    // Get data
    const getData = async () => {
      const { data: workouts, error } = await supabase
        .from("Workouts")
        .select("*")
        .eq("user", demoId);
      if (error) throw error;
      data.value = workouts;
      dataLoaded.value = true;
    };

    // Run data function
    getData();
    return { data, dataLoaded };
  },

  data() {
    return {
      showAnswer1: null,
      showAnswer2: null,
      showAnswer3: null,
      showAnswer4: null,
    };
  },

  methods: {
    toggleShowAnswer(num) {
      switch (num) {
        case 1:
          this.showAnswer1 = !this.showAnswer1;
          this.showAnswer2 = null;
          this.showAnswer3 = null;
          this.showAnswer4 = null;
          break;
        case 2:
          this.showAnswer2 = !this.showAnswer2;
          this.showAnswer1 = null;
          this.showAnswer3 = null;
          this.showAnswer4 = null;
          break;
        case 3:
          this.showAnswer3 = !this.showAnswer3;
          this.showAnswer1 = null;
          this.showAnswer2 = null;
          this.showAnswer4 = null;
          break;
        case 4:
          this.showAnswer4 = !this.showAnswer4;
          this.showAnswer1 = null;
          this.showAnswer2 = null;
          this.showAnswer3 = null;
          break;
      }
    },

    sendEmail() {
      emailjs.sendForm(
        process.env.VUE_APP_SERVICE_ID,
        process.env.VUE_APP_TEMPLATE_ID,
        this.$refs.form,
        process.env.VUE_APP_USER_ID
      );
      this.$refs.form.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-active {
  transform: rotate(180deg);
}
</style>
