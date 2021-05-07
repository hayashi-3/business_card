<template>
    <v-app>
      <v-container>
        <v-row class="home-about__contents">

          <v-col cols="12" class="home-about__contents-img">
            <img src="@/assets/img/ma207_9_1.jpg" alt="" class="img-fluid">
          </v-col>
          <v-col md="6" class="home-about__contents-text">
            <strong>youtuber？ 作家？ 読書会管理人？</strong><br>
            <p>いいえ。ただの、しがない思想家です。<br>
              情報が過多で混沌とした世の中をどう生きていくか。<br>
              答えの無い問いを模索する中で自分の判断指針を見つけてみませんか？</p>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
</template>

<style lang="scss" scoped>
/* ここから追加 */
.home-about__contents {
  justify-content: center;
 
  &-img {
    text-align: center;
  }
 
  &-text {
    word-wrap: break-word;
  }
}
/* ここまで追加 */
</style>
