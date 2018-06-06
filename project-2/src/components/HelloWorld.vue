<template>
  <div class="hello">
    <h1>Demo Table</h1>
    
    <button v-if="currentColInputIdx != null && currentRowInputIdx != null" @click="clearInputSelection" @keyup.enter="clearInputSelection">Save</button>
    
    <table>
      <tr>
        <th v-for="(column, index) in columns" :key="index" @click="sortBy(column)">
          {{column.replace(/_/g, ' ').toUpperCase()}}
        </th>
      </tr>
      <tr v-for="(obj, rowIdx) in dataInComponent" :key="rowIdx">
        <td v-for="(column, colIdx) in columns" :key="colIdx" @click="selectCurrentInput(rowIdx, colIdx, obj[column])">
            <span v-if="!(colIdx === currentColInputIdx && rowIdx === currentRowInputIdx)">{{obj[column]}}</span>
            <input v-model="currentInputVal" style="width: 100%" v-else @keyup.enter="clearInputSelection">
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  props: {
    data: Array
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
      set: v => v
    },
    columns() {
      let cols = [];
      this.data
        ? this.data.forEach(element =>
            Object.keys(element).forEach(el => cols.push(el))
          )
        : [];
      return [...new Set(cols)].sort();
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
    },

    sortBy(key) {
      this.dataInComponent.sort((a, b) => {
        let textA = a[key] ? a[key].toLowerCase() : "";
        let textB = b[key] ? b[key].toLowerCase() : "";
        return textA.localeCompare(textB)
      });
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
