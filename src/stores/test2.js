import { defineStore } from 'pinia';

export const useTest2 = defineStore('test2', {
  state: () => ({
    number2: 20,
  }),
  getters: {
    number2Getter: (state) => state.number2,
  },
  actions: {
    updateTest2() { this.number2 += 1; },
  },
});
