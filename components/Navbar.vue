<template>
  <div class="navbar">
    <div>
      <input
        type="text"
        id="search"
        :placeholder="text"
        @focus="text = ''"
        @blur="text = 'Поиск по сайту'"
      />
      <div class="route">Опросы &nbsp; &rarr; &nbsp;Добавить опрос</div>
    </div>
    <div class="user">
      <img
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        alt="user"
      />
      <div class="user-info">
        <strong>Alexander C.</strong>
        <br />
        <span>Администратор</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Поиск по сайту",
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  top: 2rem;
  right: 6rem;
  display: flex;
  justify-content: space-between;
  width: 75vw;

  .user {
    display: flex;
    align-items: top;
    &-info {
      span {
        font-size: 0.75rem;
      }
    }
  }

  .route {
    margin-top: 2rem;
  }

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 100%;
    margin-right: 0.5rem;
  }

  input {
    height: 2.5rem;
    width: 45vw;
    padding-left: 1rem;

    :focus {
      input::-webkit-input-placeholder {
        color: transparent;
      }
      input:-moz-placeholder {
        color: transparent;
      } /* FF 4-18 */
      input::-moz-placeholder {
        color: transparent;
      } /* FF 19+ */
      input:-ms-input-placeholder {
        color: transparent;
      }
    }
  }
}
</style>