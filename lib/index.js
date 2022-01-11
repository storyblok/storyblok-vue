const sbEditable = (blok) => {
  if (typeof blok !== "object" || typeof blok._editable === "undefined") {
    return {};
  }

  const options = JSON.parse(
    blok._editable.replace(/^<!--#storyblok#/, "").replace(/-->$/, "")
  );

  return {
    "data-blok-c": JSON.stringify(options),
    "data-blok-uid": options.id + "-" + options.uid,
  };
};

export const vEditableDirective = {
  beforeMount(el, binding) {
    if (binding.value) {
      const options = sbEditable(binding.value);
      el.setAttribute("data-blok-c", JSON.stringify(options));
      el.setAttribute("data-blok-uid", options.id + "-" + options.uid);
      el.classList.add("storyblok__outline");
    }
  },
};

export default {
  install: (app) => {
    app.directive("editable", vEditableDirective);
  },
};
