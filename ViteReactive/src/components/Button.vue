<template>
  <div>
    <button type="button" @click="increase">increase</button>
    <button type="button" @click="setInitialValue">set initial</button>
  </div>
  <div>{{myObject.propA}}</div>
  <div>{{myObject.propB}}</div>
  <div>{{myObject.propC}}</div>
  <div>{{double}}</div>
</template>
<script lang="ts" setup>
import { useMyObject } from './MyObject'

const setInitialValue = () => {
  set(Math.random())
}

const {increase, myObject, double, set} = useMyObject()

</script>
