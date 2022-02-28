<template>
    <footer class="bg-navy py-6 bottom-0 fixed w-full z-20">
      <div class="container flex flex-col md:flex-row items-center">
        <div class="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
          <img src="" alt="" />
          <ul class="flex text-white uppercase gap-12 text-sm ">
          <router-link :to="{name: 'About'}">
            <li class="cursor-pointer duration-200 border-solid border-b-2 border-transparent
        hover:border-gray-400 hover:text-gray-400">About</li>
          </router-link>

          <router-link :to="{name: 'Home'}">
            <li class="cursor-pointer duration-200 border-solid border-b-2 border-transparent
        hover:border-gray-400 hover:text-gray-400">Contact</li>
          </router-link>
          </ul>
        </div>
        <div class="flex gap-10 mt-12 md:mt-0 px-8">
          <a href="https://Github.com/RNostrand">
            <li><i class="text-white text-2xl fab fa-github"></i></li>
          </a>

          <a href="https://Linkedin.com/in/RNostrand">
            <li><i class="text-white text-2xl fab fa-linkedin"></i></li>
          </a>
        </div>
      </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>