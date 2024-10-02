<template>
  <nuxt-link :to="link" class="max-w-full w-150" :aria-label="title">
    <article class="w-full">
      <div class="flex items-center justify-between">
        <span v-text="date"></span>
        <ul
          class="flashy-pills-list flex flex-wrap items-center justify-center"
        >
          <li
            class="flashy-pill uppercase text-sm font-bold border-solid border-gray-800 border-2 rounded-full px-4 py-1 m-1"
            v-for="(tag, i) in tags"
            v-text="tag"
            :key="i"
          ></li>
        </ul>
        <span class="text-right"
          ><hyvor-talk-comment-count :page-id="hyvorId"
            >... comments</hyvor-talk-comment-count
          ></span
        >
      </div>
      <div
        class="bg-cover bg-center w-full h-50 my-2 rounded-md"
        :style="`background-image: url(${img});`"
      ></div>
      <h3 class="text-2xl font-bold text-bid-magenta" v-text="title"></h3>
      <p v-text="summary"></p>
    </article>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    date: String,
    tags: {
      type: Array,
      default: () => [],
    },
    img: String,
    title: String,
    summary: String,
    link: String,
    hyvorId: Number,
  },
}
</script>
