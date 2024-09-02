<template>
    <div class="bg-[#232F3E] text-[#FFFFFF] py-4">
        <div class="container flex items-center justify-between max-w-6xl mx-auto">
            <div class="text-4xl font-bold"><a href="/" class="font-bold">LOGOOO</a></div>
            <div class="flex flex-col">
                <div class="relative -mx-8">
                    <div class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                        <svg class="w-4 h-4 text-[#99A0A7]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." required />
                </div>
                <div class="pt-4 space-x-6 uppercase">
                    <a href="/views/PageNotFound.vue" class="font-bold">Sport nutrition</a>
                    <a href="#" class="font-bold">Healthy foods</a>
                    <a href="#" class="font-bold">Sportswear</a>
                    <a href="/views/BlogView.vue" class="font-bold text-[#F9BF3B]">Blog</a>
                </div>
            </div>
            <div class="flex space-x-2">
                <img src="/images/userIcon.png" alt="UserIcon" class="w-auto h-10">
                <img src="/images/basketIcon.png" alt="BasketIcon" class="w-auto h-10">
            </div>
        </div>
    </div>
</template>
