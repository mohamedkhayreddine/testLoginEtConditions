$(window).scroll(function () {
  if ($(document).height() <= $(window).height() + $(window).scrollTop())
    $("#chk", window.parent.document).removeAttr("disabled");
});
