// 
// Theme plugins and scripts
// 

$(function () {
  navbar.init()

  tooltip.init()

  swiper.init()

  highlight.init()

  autosizer.init()

  $.fancybox.defaults.loop = true
})


// 
// Navbar behavior
// 

var navbar = {
  init: function () {
    if (!window.utils.isMobile()) {
      this.initDropdownHover()
    }

    // toggle a bg color to the mobile menu when transparent
    $('.navbar-collapse').on('show.bs.collapse', function () {
      $(this).closest('.navbar').addClass('navbar-toggled')
    })

    $('.navbar-collapse').on('hide.bs.collapse', function () {
      $(this).closest('.navbar').removeClass('navbar-toggled')
    })
  },

  // show/hide dropdown on hover
  initDropdownHover: function () {
    var $dropdowns = $('.navbar .dropdown')
    $dropdowns.each(function (index, item) {
      var $item = $(this)

      $item.hover(function () {
        $item.find("> [data-bs-toggle='dropdown']").attr("aria-expanded", true)
        $item.find("> .dropdown-menu").addClass("show")
      }, function () {
        $item.find("> [data-bs-toggle='dropdown']").attr("aria-expanded", false)
        $item.find("> .dropdown-menu").removeClass("show")
      })
    })
  }
}


//
// Initialize a Swiper instance via data-toggle="swiper"
// and passing the options object via data-options
//

var swiper = {
  init: function () {
    $("[data-toggle='swiper']").each(function(index, item) {
      new Swiper(item, $(item).data('options'))
    })
  }
}


//
// Initialize Bootstrap tooltip plugins
//

var tooltip = {
  init: function () {
    $('[data-bs-toggle="tooltip"]').tooltip()
  }
}


// 
// Code syntax highlighting
// used in the docs
// 

var highlight = {
  init: function () {
    $('code.hl').each(function(i, block) {
      hljs.highlightBlock(block)
    })
  }
}


// 
// Initialize an autosize element
// via data-toggle="autosize"
// 

var autosizer = {
  init: function () {
    autosize($("[data-toggle='autosize']"))
  }
}


// 
// Extra Helpers
// 

window.utils = {
  isMobile: function () {
    if (window.innerWidth <= 992) {
      return true
    } else {
      return false
    }
  }
}
