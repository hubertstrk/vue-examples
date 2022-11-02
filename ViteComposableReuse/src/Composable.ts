import { ref } from "vue";

const value = ref(0);

export function useValue() {
  const setValue = (newValue: number) => {
    value.value = newValue;
  };

  return { value, setValue };
}
