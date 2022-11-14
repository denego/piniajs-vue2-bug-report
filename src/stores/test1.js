import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useTest1 = defineStore('test1', () => {
  const number1 = ref(10);
  const number1Getter = computed(() => number1.value);

  function updateTest1() {
    number1.value += 1;
  }

  return { number1, number1Getter, updateTest1 };
});
