<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>You're email address: {{ email }} </p>
  </div>
</template>

<script>
  import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      users: []
    };
  },
  created() {
    axios.get("/users.json")
      .then((resp) => {
        console.log(resp);
        const data = resp.data;
        for(let key in data) {
          const user = data[key];
          user.id = key;
          this.users.push(user);
        }
        this.email = this.users[0].email;
      })
      .catch((err) => { console.log(err); });
  }
}
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>