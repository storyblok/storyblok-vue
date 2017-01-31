(function () {

  var addClass = function(el, className) {
    if (el.classList) {
      el.classList.add(className)
    } else if (!hasClass(el, className)) {
      el.className += ' ' + className
    }
  }

  function install(Vue) {

    Vue.directive('editable', {
      bind: function(el, binding) {
        if (typeof binding.value._editable === 'undefined') {
          return
        }

        var options = JSON.parse(binding.value._editable.replace('<!--#storyblok#', '').replace('-->', ''))

        el.setAttribute('data-blok-c', JSON.stringify(options))
        el.setAttribute('data-blok-uid', options.id + '-' + options.uid)

        addClass(el, 'storyblok__outline')
      }
    }
  }

  if (typeof exports == "object") {
    module.exports = install
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return install })
  } else if (window.Vue) {
    Vue.use(install)
  }

})()