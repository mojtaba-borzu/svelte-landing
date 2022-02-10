import App from "./App.svelte";

const Tree = new App({
  target: document.body,
  props: {
    name: "Svelte",
  },
});

export default app;
