<template>
  <div class="container flex flex-col items-center mt-10">
      <h1 class="text-3xl mb-3">Sorry, This page does not exist!</h1>
        <router-link :to="{name: 'Workouts'}">
            <button type="button" class="py-2 px-6 rounded-md self-start text-sm text-white 
      bg-navy duration-200 border-solid border-2 border-transparent
      hover:border-navy hover:bg-white hover:text-navy">Back to Workouts</button>
        </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>