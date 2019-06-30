document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems);
});



$(document).ready(function () {
  $this = $('nav')

  var $target = $($this.attr('data-target'));
  $this.pushpin({
    top: $target.offset().top,
  });

  $('.sidenav').sidenav();
  $('.sidenav li a').click(function (e) {
    $('.sidenav').sidenav('close');
    return true;
  });
  $(".main-nav li a").click(function (e) {
    // e.preventDefault();
    var hash = e.currentTarget.hash;
    $('.main-nav li').removeClass('active');
    $(`.main-nav li a[href='${hash}']`).parent('li').addClass('active');
  });
});

$(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    var href = $(this).attr("action");
    $.ajax({
      type: "POST",
      dataType: "json",
      url: href,
      data: $(this).serialize(),
      success: function (response) {
        if (response.status == "success") {
          alert("We are in receipt of your submission!")
          window.location.replace("https://kward1025.github.io/");
        } else {
          alert("An error occured: " + response.message);
        }
      }
    });
  });
});