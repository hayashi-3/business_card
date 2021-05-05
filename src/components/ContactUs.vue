<template>
  <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
    <input type="hidden" name="form-name" value="contact" />
    <input id="name" name="name" type="text" />
    <input id="email" name="email" type="email"/>
    <textarea id="message" name="message" />
    <button type="submit">送信</button>
  </form>
</template>