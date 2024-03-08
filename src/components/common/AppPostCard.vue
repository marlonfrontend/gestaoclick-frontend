<script setup>
import { AppCard, AppImage } from "@/components/ui";
defineProps({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  thumb: {
    type: String,
  },
  description: {
    type: String,
  },
});
</script>

<template>
  <AppCard class="post-card">
    <div class="post-card--image">
      <AppImage :src="thumb" :alt="title" />
    </div>

    <div class="post-card--content">
      <RouterLink class="title" :to="`/posts/${id}`">
        {{ title }}
      </RouterLink>
      <small>Fev 9, 2024 | Por Carolina Durval</small>
      <p class="description">
        {{ description }}
      </p>
    </div>
  </AppCard>
</template>

<style lang="scss">
.post-card {
  &--image {
    width: 100%;
    overflow: hidden;
    border-radius: 8px;
    height: 260px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  &--content {
    padding: 20px;
    .title {
      font-size: 26px;
      color: var(--clr-primary);
      line-height: 30px;
      font-weight: 600;
      margin-bottom: 10px;
      text-decoration: none;
      transform: all 300ms ease;
      display: block;
      text-transform: capitalize;
    }
    .description {
      margin-top: 15px;
      font-size: 14px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
  }
}
</style>
