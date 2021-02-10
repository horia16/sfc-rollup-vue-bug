<template>
  <div class="hellion-ui-sample">
    {{ test.msg }}
    {{ test.message }}
    <button @click="test.message = 'working'">test</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import test from "./test";

export default defineComponent({
  name: "HellionUiSample",
  setup() {
    return {
      test,
    };
  },
});
</script>

<style>
.hellion-ui-sample {
  display: block;
  width: 400px;
  margin: 25px auto;
  border: 1px solid #ccc;
  background: #eaeaea;
  text-align: center;
  padding: 25px;
}
.hellion-ui-sample p {
  margin: 0 0 1em;
}
</style>
