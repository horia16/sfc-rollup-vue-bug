<template>
  <div id="app">
    <hellion-ui-sample />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { HellionUiSample } from '@/entry.esm';

export default defineComponent({
  name: "ServeDev",
  // components: {
  //  HellionUiSample,
  // }
});
</script>
