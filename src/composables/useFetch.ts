import { ref } from "vue";

export function useFetch() {
  const error = ref<unknown | null>(null);
  const loading = ref(false);
  const load = async (fn: () => Promise<any>) => {
    try {
      loading.value = true
      return fn()
    } catch (err: unknown) {
      error.value = err
    }
    finally {
      loading.value = false;
    }
  }

  return {
    load,
    loading,
    error
  }
}