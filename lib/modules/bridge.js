/**
 * storyblok-editable
 */
export const sbEditable = (blok) => {
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

let loaded = false;
const callbacks = [];

export const loadBridge = (src) => {
  // Way to make sure all event handlers are called after loading
  window.storyblokRegisterEvent = (cb) => {
    if (window.location === window.parent.location) {
      console.warn("You are not in Draft Mode or in the Visual Editor.");
      return;
    }

    if (!loaded) callbacks.push(cb);
    else cb();
  };

  return new Promise((resolve, reject) => {
    if (document.getElementById("storyblok-javascript-bridge")) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    script.id = "storyblok-javascript-bridge";

    script.onerror = (error) => reject(error);
    script.onload = (ev) => {
      callbacks.forEach((cb) => cb());
      loaded = true;
      resolve(ev);
    };

    document.getElementsByTagName("head")[0].appendChild(script);
  });
};
