<template>
    <div class="relative w-full overflow-hidden carousel-container">
      <div
        class="flex transition-transform duration-500 carousel"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="relative flex items-center w-full carousel-item h-96"
        >
          <img
            :src="image"
            alt="Carousel image"
            class="object-cover w-full h-full"
            @error="onImageError"
          />
          <div class="absolute inset-x-0 flex justify-center">
            <div class="container max-w-6xl">
                <span class="text-3xl font-bold text-black">{{ texts[index] }}</span>¨
            </div>    
          </div>
        </div>
      </div>
      <div class="absolute flex transform -translate-x-1/2 bottom-4 left-1/2">
        <button
          v-for="(image, index) in images"
          :key="index"
          class="w-5 h-5 mx-2 rounded-full"
          :class="{
            'bg-gray-800': currentIndex === index,
            'bg-gray-400': currentIndex !== index
          }"
          @click="currentIndex = index"
        ></button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          '/images/img1.JPG', // Adjust paths as necessary
          '/images/img2.JPG',
          '/images/img3.JPG',
          '/images/img4.JPG',
          '/images/img5.JPG'
        ],
        texts: [
          'Vítek je smraďoch', 
          'Vítek je opice', 
          'Vítek je borec', 
          'Vítek je pochcánek', 
          'Vítek je fešák'
        ],
        currentIndex: 0,
      };
    },
    methods: {
      onImageError(event) {
        console.error('Image failed to load:', event.target.src);
      }
    }
  };
  </script>
  
  <style scoped>
  .carousel-container {
    width: 100%;
    height: 40rem; /* Height for the carousel */
  }
  
  .carousel-item {
    min-width: 100%;
    height: 40rem; /* Height for each carousel item */
    position: relative; /* Required for absolute positioning of text */
  }
  </style>
  