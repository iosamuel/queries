<script setup>
import SimpleTypeahead from "vue3-simple-typeahead";

import { ref, nextTick, watch } from "vue";

import useQueries from "../composables/useQueries";

const props = defineProps({
  value: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["onInput"]);

const typeahead = ref(null);

const { items } = useQueries(typeahead);

function typeaheadSelect() {
  nextTick(() => {
    typeahead.value.input += " ";
    typeahead.value.$el.querySelector("input").focus();
    emit("onInput", { input: typeahead.value.input });
  });
}

watch(
  () => props.value,
  (value) => {
    typeahead.value.input = value;
  }
);
</script>

<template>
  <SimpleTypeahead
    ref="typeahead"
    id="simple-typeahead"
    placeholder="Place a query..."
    :items="items"
    :min-input-length="0"
    @onInput="$emit('onInput', $event)"
    @selectItem="typeaheadSelect"
  />
</template>

<style lang="scss">
#simple-typeahead {
  @apply w-full border border-black rounded-sm p-2;

  &_wrapper {
    @apply w-3/4 flex-grow relative;

    .simple-typeahead {
      &-list {
        @apply w-full absolute left-0 p-2 border border-black;
        top: theme("spacing.10");

        &-item {
          @apply p-2 bg-white odd:border-b border-black;

          &-active {
            @apply bg-gray-200;
          }
        }
      }
    }
  }
}
</style>
