<script setup>
import { ref } from "vue";

  const name = ref('Enzo');
  const status = ref('active');
  const tasks = ref(['Task1', 'Task2', 'Task3']);
  const newTask = ref('');
  
  
  const togglestatus = () => {
      if( status.value === 'active') {
        status.value = 'pending';
      } else if(status.value === 'pending') {
        status.value = 'inactive';
      } else {
        status.value = 'active';
      }
     
  };

 const addTask = () => {
  if(newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }


 };

 const deleteTask = (index) => {
  tasks.value.splice(index, 1);

  //Next for life cycle methods
 }
</script>
<template>
  <div class="container p-2">
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status ==='pending'">User is pending</p>
  <p v-else>User inactive</p>

  <form @submit.prevent="addTask" class="form-inline">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" class="border rounded w-full py-2 px-3 mb-2" v-model="newTask">
    <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="submit">Submit</button>
  </form>
  <h3 class="text-3xl">Tasks:</h3>
  <ul>
    <li v-for="(task,index) in tasks" :key="task">
      <span>
        {{ task }}
      </span>
      <button class="btn btn-danger m-2" v-on:click="deleteTask(index)">X</button>
      </li>
  </ul>
  <!--<a :href="link">Click for Google</a>-->
  <!--<a v-bind:href="link">Click for Google</a>-->
  <br>
  <button class="btn btn-success" v-on:click="togglestatus">Change Status</button>
  </div>
</template>
