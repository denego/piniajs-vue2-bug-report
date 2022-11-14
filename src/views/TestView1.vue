<template>
  <div>
    <div>
      <router-link :to="{ name: 'test1' }">test 1</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'test2' }">test 2</router-link>
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
