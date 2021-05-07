<template>
  <v-form name="contact" method="POST" netlify>
    <v-text-field
    v-show="false"
    v-model="title"
    name="form-name"
    />
    <input type="hidden" name="form-name" value="contact" />
    <v-container>
      <h2>お問い合わせフォーム</h2>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="name"
            label="お名前"
            clearable
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
        <v-text-field
          v-model="email"
          label="email"
          clearable
        ></v-text-field>
        </v-col>

      <v-textarea
          outlined
          v-model="message"
          label="お問い合わせ"
          clearable
      ></v-textarea>

      <v-btn type="submit" color="primary" @click="submit">送信</v-btn>

    </v-container>
  </v-form>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    }
  },
  methods: {
    async submit() {
      const params = new FormData()
      //以下、ダミーフォームの各フォーム要素のnameと合わせる
      params.append('form-name', 'contact')
      params.append('name', this.name)
      params.append('email', this.email)
      params.append('message', this.message)

      const response = await axios.$post(window.location.origin, params)
      //実際はresponseを使って画面側にフィードバックさせるが、ここでは仮にconsoleに出力
      console.log(response)
    },
  },
}
</script>