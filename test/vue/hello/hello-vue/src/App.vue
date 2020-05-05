<template>
  <div id="app">
      <ToDoList list_name="Today"></ToDoList>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'App',
  components: {
    ToDoList
  }
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(242, 205,	102);
    font-size: 1.2em;	
}

#app {
    border: 0px solid #e0e0e0;
    border-radius: 5px;
    padding: 2em;
    margin-top: 2em;
    background-color: #f5f5f5;
    font-family: sans-serif;
    width: 40%;
    -webkit-box-shadow: 10px 10px 11px -2px rgba(0,0,0,0.3);
    -moz-box-shadow: 10px 10px 11px -2px rgba(0,0,0,0.3);
    box-shadow: 10px 10px 11px -2px rgba(0,0,0,0.3);
    color: #888;
}

</style>
