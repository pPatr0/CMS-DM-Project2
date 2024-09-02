<template>
    <main>
        <NavbarMenu/>
        <div class="h-[75vh] justify-center items-center flex flex-col">
          <p class="pb-8 text-5xl font-bold uppercase">
            404 - Page not found
          </p>
          <p class="max-w-md pb-4 text-lg text-center">
            The page you are looking for might have been removed, had its name changed or is temporary unavailable
          </p>
          <button class="bg-[#1D6EC1] text-white rounded-lg px-5 py-3">
              <a href="/">Go To Homepage</a>
          </button>
        </div>
        <FooterMenu/>
    </main>
</template>

<script>
import NavbarMenu from '@/components/NavbarMenu.vue';
import FooterMenu from '@/components/FooterMenu.vue';

export default {
  components: {
    NavbarMenu,
    FooterMenu
  }
}
</script>