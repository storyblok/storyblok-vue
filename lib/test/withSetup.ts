import { createApp, h } from "vue";

export function withSetup(hook) {
  let result;

  const app = createApp({
    async setup() {
      result = await hook();
      return () => {};
    },
    render: () => h("div"),
  });

  return [app, result];
}
