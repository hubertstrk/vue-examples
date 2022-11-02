<template>
  <div>
    <div class="home">
      <h2>Hello World</h2>
      <router-link to="/foo">foo</router-link> |
      <router-link to="/bar">bar</router-link> |
      <router-link to="/baz/baz1/5/baz3">baz</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>
