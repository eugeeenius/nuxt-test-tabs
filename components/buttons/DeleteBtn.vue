<template>
  <span>
    <button>Удалить условие</button>
  </span>
</template>

<style lang="scss" scoped>
button {
  margin-left: 20rem;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  border: 2px solid red;
  border-radius: 6px;
  padding: 1rem 0.75rem;
  color: red;
  font-size: 1rem;
  cursor: pointer;
  transition: 300ms;
  background: rgb(255, 255, 255);

  span {
    font-size: 2rem;
    font-weight: thin;
    margin-right: 0.5rem;
  }

  &:hover {
    background: rgba(231, 124, 124, 0.493);
  }
}
</style>
