<template>
  <section
    class="container"
    :id="option.sectionId"
    :class="{ bordered: option.sectionId !== 'choose' }"
  >
    <div class="conditions">
      <div class="conditions-age">
        <div class="select">
          <h4 :style="{ color: option.color }">Условие{{ option.id }}</h4>
          <select>
            <option>{{ option.type }}</option>
          </select>
        </div>
        <div v-if="option.status" class="select short">
          <select>
            <option>{{ option.status }}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="btn-wrapper">
      <button class="add-btn" :class="[option.status ? '' : 'hide']">
        {{ option.btn }}
      </button>
      <button class="delete-btn">Удалить условие</button>
    </div>
  </section>
</template>

<script>
import AddBtn from "@/components/buttons/AddBtn.vue";
import DeleteBtn from "@/components/buttons/DeleteBtn.vue";

export default {
  props: {
    option: { type: Object, required: true },
  },
};
</script>

<style lang="scss" scoped>
@mixin input-box {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 0 0.5rem;
  height: 3rem;
}

h4 {
  font-size: 1.2rem;
}

.btn-wrapper {
  margin-top: 3.5rem;
  display: flex;
  justify-content: space-between;
  width: 50vw;
  margin-left: 20.5vw;
}

.add-btn {
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

  &.hide {
    color: transparent;
    border: transparent;
    background: none;
    cursor: none;
  }
}

.delete-btn {
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

  &:hover {
    background: rgba(231, 124, 124, 0.493);
  }
}

.select {
  display: flex;
  align-items: center;
  justify-content: space-between;

  select {
    font-size: 1rem;
    width: 50vw;
    @include input-box();
  }
}

.select.short {
  margin-left: 20.5vw;
  margin-top: 2rem;
  width: 45vw;
}

.range {
  width: 45vw;
  margin-top: 2rem;
  &-row {
    width: 48.3vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    .or {
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgb(246, 241, 228);
      width: 4rem;
      height: 3rem;
      border-radius: 6px;
    }
  }

  input {
    height: 2rem;
    @include input-box;
  }
}
</style>