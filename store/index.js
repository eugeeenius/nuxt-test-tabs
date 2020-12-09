export const state = () => ({
  option: {
    id: 1,
    firstRange: { from: '', to: '' },
    secondRange: { from: '', to: '' },
  },
})

// Все мутации отслеживают изменение инпутов 1 формы
export const mutations = {
  updateFirstRangeFrom(state, message) {
    state.option.firstRange.from = message
  },
  updateFirstRangeTo(state, message) {
    state.option.firstRange.to = message
  },
  updateSecondRangeFrom(state, message) {
    state.option.secondRange.from = message
  },
  updateSecondRangeTo(state, message) {
    state.option.secondRange.to = message
  },

  // Обнуляет диапазоны возрастов в state, когда отправляем данные на сервер
  clearRanges(state) {
    state.option.firstRange.from = ''
    state.option.firstRange.to = ''
    state.option.secondRange.from = ''
    state.option.secondRange.to = ''

  }
}