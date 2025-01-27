var _body = "",
  _html = "",
  _htmlBody = "",
  _window = "",
  _layout = "",
  isTocActive = false,
  isTocRuning = false,
  casesSlider = null;

jQuery(document).ready(function ($) {

  _body = jQuery('body');
  _html = jQuery('html');
  _htmlBody = jQuery('html, body');
  _window = jQuery(window);
  _layout = jQuery('.layout');

  // default script
  jQuery('#icon_vgfx').load(THEME_URL + 'assets/images/vgfx.svg');

  // for handle mobile nav
  jQuery('.nav-toggle-btn').on('click', function (e) {
    e.preventDefault();
    _html.toggleClass('nav-expanded');
  });

  jQuery('.la-backdrop').on('click', function (e) {
    e.preventDefault();
    setTimeout(function () {
      _html.removeClass('nav-expanded');
    }, 0.5 * 1000);
  });

  // header menu add and removeclass
  if (jQuery(window).width() <= 991) {
    jQuery('.la-header-link').on('mouseenter', function () {
      if (navToggleBtnWrap && !navToggleBtnWrap.is(":visible")) {
        var ele = jQuery(this);
        jQuery('.la-header-nav-list > li').removeClass('active');
        ele.parent().addClass('active');
      }
    });

    jQuery('.la-header-nav-list > li').on('mouseleave', function () {
      if (navToggleBtnWrap && !navToggleBtnWrap.is(":visible")) {
        jQuery('.la-header-nav-list > li').removeClass('active');
      }
    });

    jQuery('.la-header-nav-list > li > a').on('click', function (e) {
      _html.removeClass('nav-expanded');
    });

  }


  // for scrollTo the particular section
  jQuery('.js-scrollto').on('click', function (e) {
    e.preventDefault();
    jQuery('.js-scrollto').parent().removeClass('active');

    var ele = jQuery(this),
      targetEle = jQuery(ele.attr('href'));

    if (targetEle.length) {
      ele.parent().addClass('active');
      _htmlBody.stop(true, true).animate({ scrollTop: (targetEle.offset().top - jQuery('.site-header').height()) });
    }
  });

});