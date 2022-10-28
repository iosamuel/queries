<script setup>
import { ref, inject } from "vue";

import useQuery from "./composables/useQuery";
import useQueries from "./composables/useQueries";

import QLoading from "./components/widgets/QLoading.vue";
import QButton from "./components/widgets/QButton.vue";
import QSelect from "./components/widgets/QSelect.vue";

import Typeahead from "./components/Typeahead.vue";
import QueryResults from "./components/QueryResults.vue";

const loading = inject("loading");

const { queries } = useQueries();
const { runQuery } = useQuery();

const querySelected = ref("");
const typeaheadValue = ref("");
function selectPreQuery(value) {
  querySelected.value = value;
  typeaheadValue.value = value;
  runQuery();
}

function typeaheadInput({ input }) {
  if (input !== querySelected.value) {
    querySelected.value = "";
  }
}
</script>

<template>
  <QLoading v-if="loading" />

  <header class="flex">
    <Typeahead :value="typeaheadValue" @onInput="typeaheadInput" />
    <QSelect
      default="Predefined"
      v-model="querySelected"
      :options="queries"
      @onChanged="selectPreQuery"
    />
  </header>

  <main class="p-6 flex flex-col justify-center items-center">
    <QButton label="¡Query!" :disabled="loading" :callback="runQuery" />
    <QueryResults />
  </main>
</template>
