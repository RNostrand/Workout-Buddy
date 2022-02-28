<template>
  <body>
    <!-- Main -->
    <section :style="{ backgroundImage: 'url(' + require('../assets/images/background.jpg') + ')' }">
      <div class="container flex flex-col-reverse lg:flex-row items-center gap-12">

        <!-- Content -->
        <div class="flex flex-1 flex-col items-center lg:pl-2">

          <!-- Welcome -->
          <h2 class="text-white font-medium text-3xl md:text-4 lg:text-5xl text-center mt-8 mb-2">
            About Me
          </h2>
          <p class="w-3/4 lg:w-5/6 text-white font-medium text-md text-center mb-4">
            Learn about me down below
          </p>
            
        </div>
    </div>
    </section>

    <!-- Who am I -->
    <section class="py-20">

      <!-- Header -->
      <div class="w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-3xl text-center text-navy">Who Am I?</h1>
        <p class="text-center text-md text-gray-500 mt-4">
            I am a computer science student graduating from the University of California, Merced  in May 2022. 
            I have experience programming in Python, C++, Java, and JavaScript. 
            Some of my technological skills included git, unit testing, and debugging.
            
        </p>
      </div>
    </section>

    <section class="bg-gray-300">
       <!-- Image -->
       <div class=" container pt-8 flex flex-col pl-8">
         <h1 class="text-3xl uppercase font-medium text-navy">
            Team
         </h1>
         <p class="text-sm text-navy">
            Meet our team
         </p>
       </div>
        <div class="flex justify-center flex-1 mt-10 pb-10 z-10">
            <img class="w-2/5 w-2/5 md:w-1/5 md:h-1/5" src="../assets/images/profile.jpg" alt="" />
        </div>
    </section>

    <!-- Resume -->
    <section class="py-20 mt-10 mb-40">
      <!-- Header -->
      <h1 class="text-4xl text-center text-navy mb-8">My Resume</h1>

        <!-- Content -->
      <div class="w-3/4 lg:w-5/12 mx-auto px-2 bg-navy">
        <img class="py-2 " src="../assets/images/resume.png"/>
      </div>
    </section>
  </body>
</template>

<script>
export default {
  name: "about",
 };
</script>

<style lang="scss" scoped>

</style>