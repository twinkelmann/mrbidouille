<template>
  <main class="flex-grow text-gray-100">
    <article>
      <section>
        <div
          class="bg-cover bg-center bg-no-repeat w-full h-50 md:h-76 lg:h-100"
          :style="`background-image: url(${img});`"
        ></div>
        <h2
          class="text-center text-2xl lg:text-3xl font-bold mt-4 lg:mt-8 px-8"
          v-text="title"
        ></h2>
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
        <p class="text-center text-gray-400 my-2 px-8">
          Mr. Bidouille - {{ date }}
        </p>
      </section>
      <!-- article content -->
      <section
        class="marked px-6 md:px-16 lg:px-32 xl:px-0 xl:mx-auto xl:w-300"
      >
        <slot />
        <!-- comments -->
        <script
          async
          src="https://talk.hyvor.com/embed/embed.js"
          type="module"
        ></script>
        <hyvor-talk-comments
          :website-id="HYVOR_TALK_WEBSITE"
          :page-id="hyvorId"
          :page-url="'https://mrbidouille.ch' + this.link"
          loading="lazy"
        ></hyvor-talk-comments>
      </section>
    </article>
    <!-- back to top -->
    <a
      href="#top"
      class="back-to-top transition-opacity-200 opacity-1 pointer-events-auto fixed bottom-0 right-0 mb-12 mr-4 md:mr-8 p-6 rounded-full shadow-lg bg-gray-900 border-solid border-2 border-gray-800 flex items-center"
    >
      <i class="material-icons text-xl">arrow_upward</i>
    </a>
    <!-- Matomo Image Tracker-->
    <img
      :src="`https://analytics.naito.one/matomo.php?idsite=2&amp;rec=1&amp;action_name=${title}&amp;url=https://mrbidouille.ch${link}&amp;rand=${random}`"
      style="width: 1px; height: 1px; border: 0"
      alt
    />
    <!-- End Matomo -->
  </main>
</template>
<script>
import ministore from '../assets/ministore'
export default {
  head() {
    return {
      title: `${this.title} - Mr. Bidouille`,
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.summary,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: [...this.tags, 'tech', 'cars', 'bidouille'].join(','),
        },
      ],
    }
  },
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
  computed: {
    random() {
      return ministore.MATOMO_SEED
    },
    HYVOR_TALK_WEBSITE() {
      return ministore.HYVOR_TALK_WEBSITE
    },
  },
}
</script>
