<template>
  <v-app>
      <v-app-bar
        app
        color="#0000"
        flat
      >
        <v-bottom-navigation
        :value="value"
        color="#00bfff"
        horizontal
      >
        <v-btn text to="/">
          <span>じゅんちゃんとは</span>
          <v-icon>mdi-antenna</v-icon>
        </v-btn>
        
        <v-btn text to="/works">
          <span>動画/書籍</span>
          <v-icon>mdi-youtube</v-icon>
        </v-btn>
        
        <v-btn text to="/work_shop">
          <span>読書会</span>
          <v-icon>mdi-book-open-blank-variant</v-icon>
        </v-btn>
        
        <v-btn text to="/contact_us">
          <span>お問い合わせ</span>
          <v-icon>mdi-bird</v-icon>
        </v-btn>
      
      </v-bottom-navigation>
    </v-app-bar>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ value: 3 })
  }
</script>
