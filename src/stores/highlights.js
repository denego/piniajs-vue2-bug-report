import { computed } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import { useDocumentEditor } from './editor';

export const useDocumentHighlights = defineStore('documentHighlights', () => {
  const { fields: documentFields } = storeToRefs(useDocumentEditor());
  const fields = computed(() => documentFields.value);
  return {
    fields,
  };
});
