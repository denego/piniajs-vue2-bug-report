<template>
  <div>
    <div>
      [{{ authData.analyticsV2Enabled }}]
    </div>
    <div>
      [{{ documentHighlightsStore.allHighlights }}]
    </div>
    <div>
      [{{ documentEditorStore.fieldsOriginal }}]
    </div>
    <div>
      [{{ documentEditorStore.fields }}]
    </div>
    <div>
      [{{ documentHighlightsStore.fields }}]
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useAppAuthData } from '../stores/authData';
import { useDocumentHighlights } from '../stores/highlights';
import { useDocumentEditor } from '../stores/editor';

export default {
  name: 'TestCmp',
  components: {},
  computed: {
    authData: () => useAppAuthData().$state,
    ...mapStores(useDocumentEditor, useDocumentHighlights),
  },
  mounted() {
    this.documentEditorStore.updateDocumentData({
      fields: [{ id: Math.random() }],
    });
  },
};
</script>
