<template>
  <div>
    <div class="tab">
      <nuxt-link to="polls/1"><div>Параметры</div> </nuxt-link>
      <nuxt-link to="polls/2"><div>Вопросы</div> </nuxt-link>
      <nuxt-link to="polls/3"><div>Логика</div> </nuxt-link>
      <nuxt-link to="polls/4"><div>Условия</div> </nuxt-link>
      <nuxt-link to="polls/respondents"><div>Респонденты</div> </nuxt-link>
    </div>
    <hr />
  </div>
</template>
<style lang="scss" scoped>
.tab {
  padding-right: 4rem;
  padding-left: 1rem;
  display: flex;
  justify-content: space-between;
  div {
    padding: 1rem;
  }

  a {
    text-decoration: none;
    color: rgb(29, 165, 81);
  }

  .nuxt-link-active {
    font-weight: bold;
    color: #000;
    div {
      border-bottom: 2px solid rgb(132, 230, 86);
    }
  }
}
hr {
  height: 1px;
  border: 1px solid rgb(132, 230, 86);
  border-bottom: none;
}
</style>