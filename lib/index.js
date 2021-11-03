const addClass = (el, className) => {
  if (el.classList) {
    el.classList.add(className);
  } else if (!new RegExp("\\b" + className + "\\b").test(el.className)) {
    el.className += " " + className;
  }
};

export default {
  install(Vue) {
    Vue.directive("editable", {
      bind: function (el, binding) {
        if (
          typeof binding.value._editable === "undefined" ||
          binding.value._editable === null
        ) {
          return;
        }

        var options = JSON.parse(
          binding.value._editable
            .replace("<!--#storyblok#", "")
            .replace("-->", "")
        );

        el.setAttribute("data-blok-c", JSON.stringify(options));
        el.setAttribute("data-blok-uid", options.id + "-" + options.uid);

        addClass(el, "storyblok__outline");
      },
    });
  },
};

if (typeof window !== "undefined" && typeof window.storyblok !== "undefined") {
  Vue.prototype.$storyblok = window.storyblok;
}
