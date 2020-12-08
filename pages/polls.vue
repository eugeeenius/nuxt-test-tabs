<template>
  <div>
    <div class="tab">
      <div class="tab-item"><a href="">Параметры</a></div>
      <div class="tab-item"><a href="">Вопросы</a></div>
      <div class="tab-item"><a href="">Логика</a></div>
      <div class="tab-item"><a href="">Условия</a></div>
      <div class="tab-item"><a href="">Респонденты</a></div>
    </div>
    <hr />
  </div>
</template>
<style lang="scss" scoped>
.tab {
  display: flex;

  &-item {
    padding: 1rem;

    a {
      text-decoration: none;
      color: rgb(29, 165, 81);
    }
  }
}
</style>