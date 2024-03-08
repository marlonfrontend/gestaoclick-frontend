<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const { params } = useRoute();

const author = ref(null);

const fetchPost = async () => {
  store.dispatch("fetchPost", params.id);
};

onMounted(() => {
  fetchPost();
});

onUnmounted(() => {
  store.commit("clearPost");
});
</script>

<template>
  <div class="post-detail">
    <div class="post-detail--heading">
      <div @click="router.back()" class="back">Voltar</div>
      <h3 class="title" v-if="!!store.state.post">{{ store.state.post.title }}</h3>
    </div>
    <div class="post-detail--stats">
      <span class="author"
        >Por: {{ store.state.post?.user?.name ?? "Não encontrado" }}</span
      >
    </div>
    <div class="post-detail--image">
      <img
        :src="`https://picsum.photos/id/${store.state.post.id}/700/400`"
        :alt="store.state.post.title"
        v-if="store.state.post"
      />
    </div>
    <p v-if="store.state.post">
      {{ store.state.post.body }}
    </p>
  </div>
</template>

<style lang="scss">
.post-detail {
  max-width: 768px;
  margin: 0 auto;
  padding: 30px 0;
  h3.title {
    font-size: 32px;
    font-weight: 600;
    color: var(--clr-primary);
    line-height: 50px;
    margin-bottom: 15px;
    text-transform: capitalize;
  }
  &--image {
    height: 400px;
    overflow: hidden;
    border-radius: 10px;
    margin: 20px 0;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
  &--heading {
    .back {
      cursor: pointer;
      display: inline-block;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &--stats {
    display: flex;
    justify-content: space-between;
  }
}
</style>
