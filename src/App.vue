<template>
  <v-app>
    <v-main>
      <router-view />
      <Header />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  title: 'じゅんちゃんのサイト',
  components: { Header, Footer }
};
</script>