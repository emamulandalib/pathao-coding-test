<template>
  <div class="hello">
    <h1>Demo Table</h1>
    
    <button v-if="currentColInputIdx != null && currentRowInputIdx != null" @click="clearInputSelection">Save</button>
    
    <table>
      <tr>
        <th v-for="(column, index) in columns" :key="index">
          {{column.replace(/_/g, ' ').toUpperCase()}}
        </th>
      </tr>
      <tr v-for="(obj, rowIdx) in data" :key="rowIdx">
        <td v-for="(column, colIdx) in columns" :key="colIdx" @click="selectCurrentInput(rowIdx, colIdx)">
          {{obj[column]}}
          <input v-model="obj[column]" style="width: 100%" v-if="colIdx === currentColInputIdx && rowIdx === currentRowInputIdx">
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    data: Array,
    columns: Array
  },
  data: () => ({
    currentColInputIdx: null,
    currentRowInputIdx: null
  }),
  methods: {
    selectCurrentInput(rowIdx, colIdx) {
      this.currentColInputIdx = colIdx;
      this.currentRowInputIdx = rowIdx;
    },
    clearInputSelection() {
      this.currentColInputIdx = null;
      this.currentRowInputIdx = null;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
