<template>
  <v-container>
    <h2>読書会 polis<v-icon large color="purple darken-2">mdi-bee</v-icon></h2>
    <p>youtubeの活動以外にも読書会を開催しています。<br>
       題材として取り扱うのは教養書や哲学書といった、
       少しとっつきにくいものではありますが<br>
       polisでは肩肘をはらずに個々人が本を通して感じたことや、
       考えたことを共有していこうと思います。<br>
       じゅんちゃんが主となって本の内容紹介や進行をしていくのではなく、
       参加者全員で知識を共有するイメージです。<br>
       ご興味がありましたら、ぜひのぞいてみてください。
      <a href="http://polis-dokusyokai.com/">polisはこちら</a>
    </p>

    <h3>過去の読書会</h3>
    <v-row>
      <v-col
        v-for="n in 9"
        :key="n"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>