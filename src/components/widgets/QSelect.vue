<script setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  default: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["onChanged", "update:modelValue"]);

function onChanged(e) {
  emit("onChanged", e.target.value);
  emit("update:modelValue", e.target.value);
}
</script>

<template>
  <select id="qselect" :value="modelValue" @change="onChanged">
    <option disabled selected value>{{ default }}</option>
    <option v-for="o in options" :key="o">{{ o }}</option>
  </select>
</template>

<style lang="scss">
#qselect {
  @apply border border-black rounded-sm p-2;
}
</style>
