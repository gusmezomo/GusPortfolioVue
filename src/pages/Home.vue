<script setup>
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue';
import Sobre from '@/components/Sobre.vue';
import Projetos from '@/components/Projetos.vue';
import Contact from '@/components/Contact.vue';
</script>

<template>
  <div class="page-wrapper">
    <Header />
    <Hero />
    <Sobre />
    <Projetos />
    <Contact />
  </div>
</template>

<style scoped>
.page-wrapper {
  overflow-x: clip;
  max-width: 100%;
}
</style>
