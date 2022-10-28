<script setup>
import useQuery from "../composables/useQuery";

defineProps({
  results: {
    type: Array,
    default: () => [],
  },
});

const { queryResults } = useQuery();
</script>

<template>
  <table id="query-results">
    <thead>
      <tr>
        <th
          v-for="(key, index) in Object.keys(queryResults[0] || {})"
          :key="index"
        >
          {{ key }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in queryResults" :key="index">
        <td v-for="(value, index) in Object.values(row)" :key="index">
          {{ value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
#query-results {
  @apply w-full mt-6 border border-black rounded-sm;

  th {
    @apply p-2 bg-gray-200 border border-black;
  }

  td {
    @apply p-2 border border-black;
  }
}
</style>
