<template>
  <div class="about">
    <h1>Create XML for Edgeview</h1>
    <h2>For Edgemarc upgrade</h2>
    <br>
    <span>Edgemarcs List:</span>
    <p style="white-space: pre-line;">{{ edgemarc }}</p>
    <br>
    <textarea v-model="edgemarc" placeholder="add multiple lines"></textarea>
    <textarea v-model="address" placeholder="add multiple lines"></textarea>
    <br>
  </div>
</template>
