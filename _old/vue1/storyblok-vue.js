(function () {

  var addClass = function(el, className) {
    if (el.classList) {
      el.classList.add(className)
    } else if (!new RegExp('\\b'+ className+'\\b').test(el.className)) {
      el.className += ' ' + className
    }
  }

  function install(Vue) {

    Vue.directive('editable', {
      update: function(value) {
        if (typeof value._editable === 'undefined') {
          return
        }

        var options = JSON.parse(value._editable.replace('<!--#storyblok#', '').replace('-->', ''))

        this.el.setAttribute('data-blok-c', JSON.stringify(options))
        this.el.setAttribute('data-blok-uid', options.id + '-' + options.uid)

        addClass(this.el, 'storyblok__outline')
      }
    })

  }

  if (typeof exports == "object") {
    module.exports = install
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return install })
  } else if (window.Vue) {
    Vue.use(install)
  }

})()