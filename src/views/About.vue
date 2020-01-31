<template>
  <div class="about">
    <h1>Create XML for Edgeview</h1>
    <h2>For Edgemarc upgrade</h2>
    <br>
    <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Egdgemarc name list (one by line)"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    
    <b-form-textarea
      id="textarea"
      v-model="address"
      placeholder="Egdgemarc ip address list (one by line)"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <br>
    <h3>List Preview</h3>
    <table>
  <tr>
    <th>Edgemarc name</th>
    <th>IP Address</th>
  </tr>
  <tr>
    <td><pre class="mt-3 mb-0">{{ text }}</pre></td>
    <td><pre class="mt-3 mb-0">{{ address }}</pre></td>
  </tr>
</table>   
  </div>
</template>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>

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
