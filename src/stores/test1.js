import { defineStore } from 'pinia';

export const useTest1 = defineStore('test1', {
  state: () => ({
    number1: 10,
  }),
  getters: {
    number1Getter: (state) => state.number1,
  },
  actions: {
    updateTest1() { this.number1 += 1; },
  },
});
