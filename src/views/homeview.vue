<script setup>
import Hero from '@/components/Hero.vue';
import Homecards from '@/components/Homecards.vue';
import joblistings from '@/components/joblisting.vue';
</script>

<template>
  <Hero />
  <Homecards />
  <joblistings :limit="3" :showButton="true" />

</template>