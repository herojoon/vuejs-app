<template>
  <div>
    <h3>작가 리스트</h3>
    <span style="padding-right: 20px">
      <router-link :to="'/'">메인으로 이동</router-link>
    </span>
    <span>
      <router-link :to="'/web/book/list'">책 리스트로 이동</router-link>
    </span>
    <br><br>
    <table>
      <tr>
        <th>작가</th>
      </tr>
      <tr v-for="(writer, index) in writerList" v-bind:key="index">
        <td>{{writer}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BoardList',
  data: function () {
    return {
      writerList: []
    }
  },
  created: function () {
    this.getList()
  },
  methods: {
    getList: function () {
      // axios를 이용하여 API 호출 (component 안에서 axios를 this.$axios로 사용할 수 있습니다.)
      this.$axios.get('http://localhost:8080/api/writer/list').then(response => {
        console.log('### writer list: ' + JSON.stringify(response))
        this.writerList = response.data
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border: 1px solid #A0A0A0;
  border-collapse: collapse;
}
tr {
  border: 1px solid #A0A0A0;
}
th, td {
  border: 1px solid #A0A0A0;
  border-collapse: collapse;
  padding: 8px;
}
</style>
