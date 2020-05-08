<template>
<form id="app" @submit="checkForm" method="post">

  <p v-if="hasErrors">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>

  <p>
    <label for="name">Name</label>
    <input id="name" v-model="name" type="text" name="name">
  </p>

  <p>
    <label for="age">Age</label>
    <input id="age" v-model="age" type="number" name="age" min="0">
  </p>

  <p>
    <label for="framework">Favorite Framework</label>
    <select id="framework" v-model="framework" name="framework">
      <option>VueJS</option>
      <option>React</option>
      <option>Angular</option>
    </select>
  </p>

  <p>
    <input type="submit" value="Submit">
  </p>

</form>
</template>

<script>
export default {
 data: {
    errors: [],
    name: null,
    age: null,
    movie: null
  },
  methods:{
    checkForm: function (e) {
      if (this.name && this.age) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.age) {
        this.errors.push('Age required.');
      }

      e.preventDefault();
    }
  }
}

</script>

<style scoped>

</style>