<template>
  <div>
    <button>
      <span>+</span>
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
div {
  overflow: hidden;
  box-sizing: border-box;
  min-width: auto;
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  border: 2px solid rgb(132, 230, 86);
  border-radius: 6px;
  padding: 1rem 0.75rem;
  color: rgb(132, 230, 86);
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
    background: rgba(187, 235, 178, 0.726);
  }
  div {
    width: 150px;
  }
}
</style>

