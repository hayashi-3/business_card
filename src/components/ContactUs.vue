<template>
  <form name="contact" method="POST" netlify>
    <v-container>
        <h2>お問い合わせフォーム</h2>
        <v-row>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              label="お名前（姓）"
              clearable
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              label="お名前（名）"
              clearable
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
          >
          <v-text-field
            label="email"
            clearable
          ></v-text-field>
          </v-col>
      </v-row>

      <v-textarea
          outlined
          name="input-7-4"
          label="お問い合わせ"
          value="仕事のご依頼などはこちらに詳細をお願いいたします。"
          clearable
      ></v-textarea>
      <p>
        <button type="submit">送信</button>
      </p>

    </v-container>
  </form>
</template>