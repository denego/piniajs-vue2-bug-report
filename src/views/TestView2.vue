<template>
  <div class="TestView2">
    <div>
      <router-link :to="{ name: 'test1' }">Click to test</router-link>
    </div>
    <TestCmp />
  </div>
</template>

<script>
import TestCmp from './TestCmp.vue';

export default {
  name: 'TestView2',
  components: { TestCmp },
};
</script>
