<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  callback: {
    type: Function,
    default: () => {},
  },
  label: {
    type: String,
    default: "Button",
  },
});
</script>

<template>
  <button
    :disabled="disabled"
    class="p-2 px-10 border border-teal-800 rounded-lg bg-teal-500 text-white hover:shadow-md hover:shadow-cyan-300 disabled:bg-slate-500"
    @click="callback"
  >
    {{ label }}
  </button>
</template>
