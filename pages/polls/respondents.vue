<template>
  <div>
    <Tabs />
    <div class="content">
      <div class="add-question">
        <h4>Добавить опрос</h4>
      </div>
      <section class="bordered" id="first">
        <FormAge :title="'Возраст респондента'" />
      </section>

      <section v-for="option in options" :key="option.number">
        <Form :option="option" />
      </section>

      <section id="add-new">
        <button id="add-new-btn">
          <span>+</span>
          <br />
          Нажмите, чтобы добавить новые условия выборки.
          <br />
          Все условия связываются между собой логическим "И"
        </button>
      </section>

      <section id="next">
        <div class="btn-wrapper">
          <button class="test-btn">Протестировать опрос</button>
          <button class="next-btn">Далее &rarr;</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import FormAge from "@/components/forms/FormAge.vue";
export default {
  data() {
    return {
      options: [
        {
          number: "2",
          first: "Тип карты лояльности",
          second: "Gold",
          btn: "Добавить тип",
          sectionId: "second",
          color: "rgb(41	74	160)",
        },
        {
          number: "3",
          first: "Статус карты лояльности",
          second: "Активна",
          btn: "Добавить статус",
          sectionId: "third",
          color: "rgb(101	152	0)",
        },
        {
          number: "4",
          first: "Выберите условие",
          second: null,
          sectionId: "choose",
          btn: null,
        },
      ],
    };
  },
  components: { Tabs, FormAge },
};
</script>


<style lang="scss" scoped>
.content {
  box-shadow: 1px 7px 20px -5px rgba(88, 87, 87, 0.2);
  padding-top: 2rem;
}

.container {
  padding: 1rem 2rem 3rem 2rem;
}

.add-question {
  height: 1.75rem;
  color: grey;
  padding: 0 1rem 0 2rem;
}

#next {
  position: relative;
  height: 12vh;
  background: rgb(244 247 249);
  padding: 1rem 2rem;

  .btn-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    border: none;
    border-radius: 6px;
    padding: 1rem 0.75rem;
    font-size: 1rem;
    cursor: pointer;
    transition: 300ms;
    background: rgb(255, 255, 255);
  }

  .test-btn {
    color: rgb(29, 165, 81);

    &:hover {
      background: rgba(228, 228, 228, 0.493);
    }
  }

  .next-btn {
    background: rgb(29, 165, 81);
    color: #fff;
    font-weight: bold;

    &:hover {
      background: rgba(29, 165, 81, 0.712);
    }
  }
}

#first {
  background: rgb(255 252 246);
}

#second {
  background: rgb(248 250 255);
}

#third {
  background: rgb(251 255 249);
}

#choose {
  background: rgb(250 250 250);
}

#add-new {
  height: 30vh;
  padding: 2.5rem 2rem;

  &-btn {
    width: 100%;
    height: 100%;
    background: transparent;
    border: 1px solid rgba(196, 209, 218, 0.589);
    border-radius: 6px;
    color: rgb(29, 165, 81);
    font-size: 1rem;
    transition: 300ms;
    cursor: pointer;

    &:hover {
      background: rgba(196, 209, 218, 0.233);
    }

    span {
      font-size: 2rem;
    }
  }
}

section.bordered {
  border-bottom: 1px solid #ccc;
}
</style>
