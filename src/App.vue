<script setup lang="ts">
import { RouterView } from "vue-router";
import { AppHeader, AppFooter } from "@/components/layout";
</script>

<template>
  <AppHeader />
  <main class="container">
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped></style>
