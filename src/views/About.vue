<template>
  <div class="about">
    <h1>Create XML for Edgeview</h1>
    <h2>For Edgemarc upgrade</h2>
    <br>
    <textarea v-model="name" placeholder="add multiple lines"></textarea>
    <textarea v-model="address" placeholder="add multiple lines"></textarea>
    
    <span>Edgemarcs List:</span>
    <p style="white-space: pre-line;">{{ name }} || {{ address }}</p>
  </div>
</template>
