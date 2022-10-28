import { ref, computed } from "vue";

export default function useQueries(input) {
  const queries = ref([
    "select * from table",
    "select * from table2 where id = 1",
  ]);

  const items = computed(() => {
    const queryLength = input.value?.input.split(" ").length;
    const queryLengthTrim = input.value?.input.trim().split(" ").length;

    const steps = [
      ["select", "update", "delete"],
      ["*", "count(*)", "sum(*)"],
      ["from"],
      ["table1", "table2", "table3"],
      ["where"],
      ["column1", "column2", "column3"],
      ["=", ">", "<", ">=", "<=", "!="],
      ["value1", "value2", "value3"],
      ["limit", "offset"],
      ["1", "2", "3"],
    ];

    const step = queryLength - 1 || 0;

    if (step > 0 && queryLengthTrim < steps.length) {
      const mapped = steps[queryLengthTrim].map(
        (item) =>
          input.value?.input +
          item.padStart(item.length + (queryLengthTrim - step), " ")
      );
      return mapped;
    }

    return steps[0];
  });

  return {
    queries,
    items,
  };
}
