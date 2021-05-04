<template>
  <div class="works">
    <Carousel />
    <IconLinks />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import IconLinks from '@/components/IconLinks.vue'

export default {
  name: 'works',
  components: {
    Carousel,
    IconLinks
  }
}
</script>