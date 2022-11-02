import {reactive, Ref, unref, computed} from 'vue'

export function useMyObject () {

  const myObject = reactive({
    propA: 'foo',
    propB: 0,
    propC: true
  })

  const increase = () => {
    myObject.propB++
  }

  const set = (value: number) => {
    myObject.propB = value
  }

  const double = computed(() => myObject.propB * 2)

  return {myObject, double, increase, set}
}
