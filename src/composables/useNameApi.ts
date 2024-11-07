// useFetch.js
import type { ColorApiResponse } from "@/types/colorTypes";
import { ref, watchEffect } from "vue";

export function useNameApi(hex: string) {
  const data = ref<null | ColorApiResponse>(null);
  const error = ref<null | string>(null);
  const isLoading = ref(true);

  const endpoint = "https://www.thecolorapi.com/";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  const fetchData = async () => {
    isLoading.value = true;
    try {
      const response = await fetch(
        `${endpoint}id?hex=${hex}&format=json`,
        options
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      data.value = await response.json();
    } catch (err) {
      error.value = "Error fetching data";
    } finally {
      isLoading.value = false;
    }
  };

  watchEffect(() => {
    fetchData();
  });

  return { data, error, isLoading };
}
