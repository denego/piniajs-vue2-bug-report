import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useTest2 = defineStore('test2', () => {
  const number2 = ref(20);
  const number2Getter = computed(() => number2.value);

  function updateTest2() {
    number2.value += 1;
  }

  return { number2, number2Getter, updateTest2 };
});
