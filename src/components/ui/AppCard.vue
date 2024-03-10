<script setup>
defineProps({
  width: {
    type: String,
    default: () => "100%",
  },
});
</script>

<template>
  <div class="app-card" :style="`width: ${width}`">
    <slot />
  </div>
</template>

<style lang="scss">
.app-card {
  border-radius: 8px;
  border: 1px solid #ddd;
}
</style>
