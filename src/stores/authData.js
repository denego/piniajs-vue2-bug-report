import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useAppAuthData = defineStore('appAuthData', () => {
  const state = {
    analyticsV2Enabled: false,
  };

  const authData = Object.keys(state)
    .reduce((res, key) => ({ ...res, [key]: ref(state.key) }), {});

  return {
    ...authData,
  };
});
