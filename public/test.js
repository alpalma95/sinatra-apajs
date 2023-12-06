import { define, html, stream, hook } from "apajs";

define({ tag: "test-test", shadow: "open" }, function (ctx) {
  const count = stream(0);

  ctx.onInit = () => {
    hook(() => (ctx.$refs.count.innerHTML = count.val));
  };

  ctx.handlers = {
    inc() {
      count.val++;
    },
  };
  return html`
    <h1>Count from component <span ref="count">${count.val}</span></h1>
    <slot></slot>
  `;
});
