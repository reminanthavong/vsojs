<template>
  <div class="about">
    <h1>Create XML for Edgeview</h1>
    <h2>For Edgemarc upgrade</h2>
    <br>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Edgemarc name list (one by line)"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    
    <b-form-textarea
      id="textarea2"
      v-model="address"
      placeholder="Edgemarc ip address list (one by line)"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <br>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
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
  <pre class="mt-3 mb-0">{{ xmlresult }}</pre>
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
        show: true,
        text: '', 
        address: '',
        xmlresult: ''
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        const jsonForm = {};
                    jsonForm.name = this.text;
                    jsonForm.address = this.address;
        fetch('/makexml', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(jsonForm)
                })
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    console.log(data.list);
                    this.xmlresult = data.list
                    
                })
                .catch(error => {
                    console.log(error);
                });
      const url = window.URL.createObjectURL(this.xmlresult)
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'edgemarclist.xml')
      document.body.appendChild(link)
      link.click()
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.text = ''
        this.address = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
