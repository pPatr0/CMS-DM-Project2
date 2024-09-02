<template>
    <main>
        <NavbarMenu />
        <div>
            <div class="container max-w-6xl pt-8 mx-auto">
                <div class="text-lg font-bold text-white">
                    <button 
                        @click="selectedCategory = 'How to lose weight'" 
                        class="bg-[#232F3E] rounded-lg py-2 px-4 uppercase mr-4"
                        :class="{ 'text-yellow-500': selectedCategory === 'How to lose weight' }">
                        How to lose weight
                    </button>
                    <button 
                        @click="selectedCategory = 'Fitness Recipes'" 
                        class="bg-[#232F3E] rounded-lg py-2 px-4 uppercase mr-4"
                        :class="{ 'text-yellow-500': selectedCategory === 'Fitness Recipes' }">
                        Fitness Recipes
                    </button>
                    <button 
                        @click="selectedCategory = 'Nutrition Supplements'" 
                        class="bg-[#232F3E] rounded-lg py-2 px-4 uppercase mr-4"
                        :class="{ 'text-yellow-500': selectedCategory === 'Nutrition Supplements' }">
                        Nutrition Supplements
                    </button>
                    <button 
                        @click="selectedCategory = 'Exercises and Workouts'" 
                        class="bg-[#232F3E] rounded-lg py-2 px-4 uppercase"
                        :class="{ 'text-yellow-500': selectedCategory === 'Exercises and Workouts' }">
                        Exercises and Workouts
                    </button>
                    <button 
                        @click="selectedCategory = 'Lifestyle'" 
                        class="bg-[#232F3E] rounded-lg py-2 px-4 uppercase mt-4"
                        :class="{ 'text-yellow-500': selectedCategory === 'Lifestyle' }">
                        Diet and Healthy Lifestyle
                    </button>
                </div>
            </div>
            <div class="container max-w-6xl mx-auto">
                <h1 class="pt-12 text-6xl font-bold text-black">
                    All blog posts
                </h1>
                <p class="pt-8">
                    All blog posts lalalalalala All blog posts lalalalalala All blog posts lalalalalala All blog posts lalalalalala All blog posts lalalalalala
                    All blog posts lalalalalala All blog posts lalalalalala All blog posts lalalalalala All blog posts lalalalalala All blog posts lalalalalala
                </p>
            </div>
            <div class="container max-w-6xl pt-4 mx-auto">
                <div class="flex">
                    <div class="bg-[#F0F2F5] rounded-lg flex items-center justify-center max-w-sm mr-2">
                        <img src="/images/moneyBack.png" alt="haha" class="w-auto h-auto max-w-full max-h-full">
                    </div>
                    <div class="flex bg-[#F0F2F5] rounded-lg p-8 ml-2 w-full justify-between">
                        <div class="max-w-lg">
                            <h2 class="pb-4 text-3xl font-bold">
                                Fitness Recipe: Eggs Benedict with Hollandaise Sauce
                            </h2>
                            <p>
                                Want a high-end café breakfast? Yes, please. These eggs Benedict with Hollandaise have it all. The combination of a fluffy soft bun with a runny yolk and creamy sauce is simply irresistible.
                            </p>
                        </div>
                        <div class="flex items-end">
                            <button class="bg-[#1D6EC1] text-white rounded-lg px-5 py-3">
                                <a href="/views/SingleBlog.vue">Read More</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container max-w-6xl pt-4 pb-8 mx-auto">
                <div class="flex">
                    <div class="bg-[#F0F2F5] rounded-lg flex items-center justify-center max-w-sm mr-2">
                        <img src="/images/moneyBack.png" alt="haha" class="w-auto h-auto max-w-full max-h-full">
                    </div>
                    <div class="flex bg-[#F0F2F5] rounded-lg p-8 ml-2 w-full justify-between">
                        <div class="max-w-lg">
                            <h2 class="pb-4 text-3xl font-bold">
                                Fitness Recipe: Eggs Benedict with Hollandaise Sauce
                            </h2>
                            <p>
                                Want a high-end café breakfast? Yes, please. These eggs Benedict with Hollandaise have it all. The combination of a fluffy soft bun with a runny yolk and creamy sauce is simply irresistible.
                            </p>
                        </div>
                        <div class="flex items-end">
                            <button class="bg-[#1D6EC1] text-white rounded-lg px-5 py-3">
                                <a href="">Read More</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterMenu/>
    </main>
</template>


<script>
import FooterMenu from '@/components/FooterMenu.vue';
import NavbarMenu from '@/components/NavbarMenu.vue';

export default {
  components: {
    NavbarMenu,
    FooterMenu
  },
  data() {
    return {
      selectedCategory: '', // State to track the selected category
    };
  },
};
</script>

