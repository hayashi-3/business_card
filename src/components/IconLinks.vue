<template>
  <div class="text-center d-flex align-center justify-space-around">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-col
          cols="12"
          sm="3"
        >

        <v-btn
          href="https://www.youtube.com/channel/UCa6oNOr1S251sHs8rile4Rw"
          icon
          color="red"
          v-bind="attrs"
          v-on="on"
        >
            <v-icon large>mdi-youtube</v-icon>
          </v-btn>
        </v-col>
      </template>
      <span>youtube</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-col
          cols="12"
          sm="3"
        >
          <v-btn
            href="https://twitter.com/junchann0202"
            icon
            color="blue darken-2"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon large>mdi-twitter</v-icon>
          </v-btn>
        </v-col>
      </template>
      <span>twitter</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-col
          cols="12"
          sm="3"
        >
          <v-btn
            href="https://www.amazon.co.jp/gp/product/4866808020/ref=as_li_tl?ie=UTF8&tag=orenzi02020c-22&camp=247&creative=1211&linkCode=as2&creativeASIN=4866808020&linkId=c431090d305fe3ab036ae37f9551b734"
            icon
            color="indigo"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon large>mdi-book</v-icon>
          </v-btn>
        </v-col>
      </template>
      <span>じゅんちゃんの本</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-col
          cols="12"
          sm="3"
        >
          <v-btn
            href="http://polis-dokusyokai.com/"
            icon
            color="purple darken-2"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon large>mdi-bee</v-icon>
          </v-btn>
        </v-col>
      </template>
      <span>読書会 polis</span>
    </v-tooltip>

</div>
</template>