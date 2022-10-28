import { inject, ref } from "vue";
import fetchQuery from "../services/fetchQuery";

const queryResults = ref([]);

export default function useQuery() {
  const loading = inject("loading");

  const runQuery = async () => {
    loading.value = true;

    const results = await fetchQuery();
    queryResults.value = results;

    loading.value = false;
  };

  return {
    queryResults,
    runQuery,
  };
}
