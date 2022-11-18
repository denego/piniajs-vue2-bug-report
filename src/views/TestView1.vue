<template>
  <div class="TestView1">
    <div>
      <router-link :to="{ name: 'test2' }">Click to test</router-link>
    </div>
    <TestCmp />
  </div>
</template>

<script>
import TestCmp from './TestCmp.vue';

export default {
  name: 'TestView1',
  components: { TestCmp },
};
</script>
