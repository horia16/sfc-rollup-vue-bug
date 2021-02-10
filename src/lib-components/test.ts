import { reactive } from "@vue/reactivity";
import { ref } from "vue";

const message = ref("new_message");

const test = reactive({
  msg: "test",
  message,
});

export default test;
