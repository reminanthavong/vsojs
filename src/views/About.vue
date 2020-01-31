<template>
  <div class="about">
    <h1>Create XML for Edgeview</h1>
    <h2>For Edgemarc upgrade</h2>
    <br>
    <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    
    <b-form-textarea
      id="textarea"
      v-model="address"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <table>
  <tr>
    <th>Edgemarc</th>
    <th>IP</th>
  </tr>
  <tr>
    <td><pre class="mt-3 mb-0">{{ text }}</pre></td>
    <td><pre class="mt-3 mb-0">{{ address }}</pre></td>
  </tr>
</table>   
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: '', 
        address: '' 
      }
    }
  }
</script>
