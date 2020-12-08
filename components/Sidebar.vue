<template>
  <div class="sidebar">
    <nuxt-link
      :to="item.link"
      class="sidebar-item"
      v-for="item in sidebarContent"
      :href="item.link"
      :key="item.title"
    >
      <img
        :src="require(`~/assets/icons/${item.icon}.svg`)"
        :alt="item.title"
      />
      <span>{{ item.title }}</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarContent: [
        { icon: "file", title: "Опросы", link: "/polls" },
        { icon: "users", title: "Пользователи", link: "/users" },
        { icon: "flag", title: "Черные списки", link: "/blacklist" },
        { icon: "call", title: "Колл-центр", link: "/call" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10rem;
  height: 300vh;
  border-right: 1px solid rgb(221, 221, 221);
  padding-top: 7.5rem;

  &-item {
    width: 8.5rem;
    height: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0.75rem;
    border-radius: 8px;
    text-decoration: none;
    color: #000;
    img {
      width: 3rem;
    }
    span {
      margin-top: 0.5rem;
    }
  }
  .nuxt-link-active {
    background: rgba(204, 204, 204, 0.3);
    font-weight: bold;
  }
}
</style>