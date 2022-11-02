import {ref, computed} from 'vue'

// global state: counter is same for every component using useCounter()
const counter = ref(0)

export function useCounter () {

  // local state: counter is different for every component using useCounter()
  // const counter = ref(0)

  const increase = () => {
    counter.value++
  }

  const double = computed(() => counter.value * 2)

  return {increase, double}
}
