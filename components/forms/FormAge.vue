<template>
  <div class="container">
    <div class="conditions">
      <div class="conditions-age">
        <div class="select">
          <h4>Условие 1</h4>
          <select>
            <option>Возраст респондента</option>
          </select>
        </div>

        <div class="range">
          <div class="range-row">
            Диапазон 1
            <div>
              от <input v-model="option.firstRange[0]" type="text" /> до
              <input v-model="option.firstRange[1]" type="text" />
            </div>
          </div>
          <div class="range-row">
            <span class="or">или</span>
            Диапазон 2
            <div>
              от <input v-model="option.secondRange[0]" type="text" /> до
              <input v-model="option.secondRange[1]" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-wrapper">
      <button class="add-btn">{{ title }}</button>
      <button class="delete-btn">Удалить условие</button>
    </div>
  </div>
</template>

<script>
import AddBtn from "@/components/buttons/AddBtn.vue";
import DeleteBtn from "@/components/buttons/DeleteBtn.vue";

export default {
  props: {
    title: { type: String, required: true },
    submitForm: { type: Function, required: true },
  },
  data() {
    return {
      option: {
        id: 1,
        firstRange: [],
        secondRange: [],
      },
    };
  },
  methods: {
    getInputText() {
      submitForm(this.option);
    },
  },
  mounted() {
    this.getInputText();
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

  h4 {
    color: rgb(148 100 0);
    font-size: 1.2rem;
  }

  select {
    font-size: 1rem;
    width: 50vw;
    @include input-box();
  }
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