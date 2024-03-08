<script setup lang="ts">
import { AppPostCard } from "@/components/common";
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const fetchPosts = () => {
  store.dispatch("fetchPosts");
};

onMounted(() => {
  fetchPosts();
});
</script>

<template>
  <div class="post-list">
    <AppPostCard
      v-for="post in store.state.posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :thumb="`https://picsum.photos/id/${post.id}/400/300`"
      :description="post.body"
    />
  </div>
</template>

<style lang="scss">
.post-list {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  flex-wrap: wrap;
  gap: 20px;
  padding: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
