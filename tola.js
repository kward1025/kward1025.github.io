document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });

  $(function () {
    // see the library options at the project's
    // website https://kenwheeler.github.io/slick/
    $('.carousel2').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
    $('.sidenav').sidenav();
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
            window.location.replace("file:///Users/kavonward/Desktop/beachcoders/kward1025.github.io/tola-about.html");
          } else {
            alert("An error occured: " + response.message);
          }
        }
    });
});
});