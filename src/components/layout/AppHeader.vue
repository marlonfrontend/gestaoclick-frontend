<script setup>
import { AppBrand } from "@/components/ui";
</script>

<template>
  <header class="app-header">
    <AppBrand />
  </header>
</template>

<style lang="scss">
.app-header {
  border-bottom: 1px solid #ddd;
  padding: 20px;
  display: flex;
  align-items: center;
}
</style>
