import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useDocumentEditor = defineStore('documentEditor', () => {
  const fieldsOriginal = ref([]);

  const updateDocumentData = (data) => {
    fieldsOriginal.value = data.fields;
  };

  const fields = computed(() => fieldsOriginal.value);

  return {
    fieldsOriginal, fields, updateDocumentData,
  };
});
