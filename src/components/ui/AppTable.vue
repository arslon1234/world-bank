<template>
  <table >
    <thead>
      <tr>
        <th v-for="(header, i) in headers" :key="`header${i}`">
          {{ header.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in body" :key="item.id">
        <td
          v-for="(bodyInHeader, bodyHeaderIndex) in headers"
          :key="`bodyHeader${bodyHeaderIndex}`"
        >
          <slot :name="`body_${bodyInHeader.value}`" :item="item">{{
            item[bodyInHeader.value]
          }}</slot>
        </td>
      </tr>
    </tbody>
  </table>
      <div class="nothing" v-if="!body.length">
        <span>{{ $t("no_data") }}</span>
      </div>
</template>
<script setup>
const props = defineProps({
  headers: {
    type: Array,
    default: () => [],
  },
  body: {
    type: Array,
    default: () => [],
  },
});
</script>
<style scoped lang="scss">
table {
  padding: 10px;
  border-collapse: separate;
  border-spacing: 0;
  thead {
    background-color: #eaf5fb;
    th {
      border-top: 1px solid #e1eaed;
      padding: 3px 36px;
      font-size: 13px;
    }
  }
  tbody {
    tr{
    font-size: 13px;
    }
    tr:nth-child(even) {
      background-color: #f7fcff;
    }
  }
}
    .nothing {
      width: 98%;
      margin-left: 1%;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #e1eaed;
      border-left: 1px solid #e1eaed;
      border-right: 1px solid #e1eaed;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      span {
        font-size: 16px;
      }
    }
td {
  padding: 5px 30px;
  border: 1px solid #e1eaed;
  text-align: center;
}
tr:last-child td:first-child {
  border-bottom-left-radius: 10px;
}
tr:last-child td:last-child {
  border-bottom-right-radius: 10px;
}
tr:first-child th:first-child {
  border-top-left-radius: 10px;
  border-left: 1px solid #e1eaed;
}
tr:first-child th:last-child {
  border-top-right-radius: 10px;
  border-right: 1px solid #e1eaed;
}
</style>