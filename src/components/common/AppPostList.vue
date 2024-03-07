<script setup lang="ts">
import { AppPostCard } from "@/components/common";
</script>

<template>
  <div class="post-list">
    <AppPostCard
      v-for="i in 5"
      :key="i"
      title="Guia completo de segurança da informação: conceito, pilares e tendências"
      thumb="https://gestaoclick.com.br/wp-content/uploads/tomada-de-decisao.webp"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi expedita dolorum numquam rerum alias id porro tempora vero. In doloremque cum culpa neque magni provident eveniet esse ad eligendi."
    />
  </div>
</template>

<style lang="scss">
.post-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  flex-wrap: wrap;
  gap: 20px;
  padding: 40px;
}
</style>
