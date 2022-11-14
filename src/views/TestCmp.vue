<template>
  <div class="TestView">
    <div :style="{ color: number1 !== number1Getter ? 'red' : '' }">
      number1: {{ number1 }}, number1Getter: {{ number1Getter }}
    </div>

    <div :style="{ color: number2 !== number2Getter ? 'red' : '' }">
      number2: {{ number2 }}, number2Getter: {{ number2Getter }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useTest1 } from '../stores/test1';
import { useTest2 } from '../stores/test2';

export default {
  name: 'TestCmp',
  computed: {
    ...mapState(useTest1, ['number1', 'number1Getter']),
    ...mapState(useTest2, ['number2', 'number2Getter']),
  },
  mounted() {
    this.updateTest1();
    this.updateTest2();
  },
  methods: {
    ...mapActions(useTest1, ['updateTest1']),
    ...mapActions(useTest2, ['updateTest2']),
  },
};
</script>
