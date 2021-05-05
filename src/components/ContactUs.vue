<template>
  <form name="contact" method="POST" netlify>
    <input type="hidden" name="form-name" value="contact" />
    <v-container>
        <h2>お問い合わせフォーム</h2>
        <v-row>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="last_name"
              label="お名前（姓）"
              clearable
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="first_name"
              label="お名前（名）"
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
      </v-row>

      <v-textarea
          outlined
          v-model="inquiry"
          label="お問い合わせ"
          value="仕事のご依頼などはこちらに詳細をお願いいたします。"
          clearable
      ></v-textarea>

      <v-btn type="submit" color="primary" @click="submit">送信</v-btn>

    </v-container>
  </form>
</template>

<script>
export default {
  data() {
    return {
      last_name: "",
      first_name: "",
      email: "",
      inquiry: "",
    }
  },
  methods: {
    async submit() {
      const params = new FormData()
      //以下、ダミーフォームの各フォーム要素のnameと合わせる
      params.append('form-name', 'contact')
      params.append('last_name', this.last_name)
      params.append('first_name', this.first_name)
      params.append('email', this.email)
      params.append('inquiry', this.inquiry)

      const response = await this.$axios.$post(window.location.origin, params)
      //実際はresponseを使って画面側にフィードバックさせるが、ここでは仮にconsoleに出力
      console.log(response)
    },
  },
}
</script>