<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'koi.png',
          },
          {
            src: 'sky.png',
          },
          {
            src: '4426136_m.jpg',
          },
          {
            src: 'キツネ.jpg',
          },
        ],
      }
    },
  }
</script>