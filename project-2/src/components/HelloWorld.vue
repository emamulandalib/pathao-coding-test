<template>
  <div class="hello">
    <h1>Demo Table</h1>
    
    <button v-if="currentColInputIdx != null && currentRowInputIdx != null" @click="clearInputSelection" @keyup.enter="clearInputSelection">Save</button>
    
    <table>
      <tr>
        <th v-for="(column, index) in columns" :key="index">
          {{column.replace(/_/g, ' ').toUpperCase()}}
        </th>
      </tr>
      <tr v-for="(obj, rowIdx) in dataInComponent" :key="rowIdx">
        <td v-for="(column, colIdx) in columns" :key="colIdx">
          <span v-if="obj[column]" @click="selectCurrentInput(rowIdx, colIdx, obj[column])">
            {{obj[column]}}
            <input v-model="currentInputVal" style="width: 100%" v-if="colIdx === currentColInputIdx && rowIdx === currentRowInputIdx"
            @keyup.enter="clearInputSelection">
          </span>
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
    currentRowInputIdx: null,
    currentInputVal: null
  }),
  computed: {
    dataInComponent: {
      get() {
        return this.data ? this.data : [];
      },
      set(v) {
        console.log(v);
        return v;
      }
    }
  },
  methods: {
    selectCurrentInput(rowIdx, colIdx, val) {
      this.currentColInputIdx = colIdx;
      this.currentRowInputIdx = rowIdx;
      this.currentInputVal = val;
    },
    setNewData() {
      let currentRowData = this.dataInComponent[this.currentRowInputIdx];
      currentRowData = {
        ...currentRowData,
        ...{ [this.columns[this.currentColInputIdx]]: this.currentInputVal }
      };
      this.dataInComponent[this.currentRowInputIdx][
        this.columns[this.currentColInputIdx]
      ] = this.currentInputVal;
    },
    clearInputSelection() {
      this.setNewData();
      this.currentColInputIdx = null;
      this.currentRowInputIdx = null;
      this.currentInputVal = null;
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
