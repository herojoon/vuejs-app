<template>
  <div>
    <h3>메인</h3>
    <span style="padding-right: 20px">
      <router-link :to="'/web/book/list'">책 리스트로 이동</router-link>
    </span>
    <span>
      <router-link :to="'/web/writer/list'">작가 리스트로 이동</router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped>

</style>
