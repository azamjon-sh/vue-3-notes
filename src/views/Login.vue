<template>
  <div>
    <form class="login" @submit.prevent="logIn">
      <h1>Войти</h1>
      <label>Логин</label>
      <input v-model="myLogin" type="text" placeholder="Введите имя"/>
      <br>
      <label>Пароль</label>
      <input v-model="password" type="password" placeholder="Введите пароль"/>
      <hr/>
      <button type="submit">Вход</button>
    </form>
  </div>
</template>

<script>
import store from '@/store/index'

export default {
  name: "Login",
  data() {
    return {
      myLogin: "",
      password: ""
    }
  },
  methods: {
    logIn() {
      console.log(!!this.myLogin + ' ' + !!this.password)
      if (!!this.myLogin && !!this.password) {
        this.$router.push('/home')
        store.commit('logIn')
      }
    }
  }
}
</script>

<style scoped lang="scss">
form {
  width: 300px;
  margin: 20px auto;

  > * {
    display: block;
    margin-bottom: 8px;
    width: 100%;
  }
}

input {
  height: 20px;
}

label {
  text-align: left;
}
</style>