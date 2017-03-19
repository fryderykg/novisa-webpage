// Scroll certain amounts from current position
$(document).ready(function(){
  // Add smooth scrolling to all links
  $('a.menu').on('click', function(event) {
    // $('a:not([data-toggle="tab"])').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top -100
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
    $('button#navbar-button:not(:hidden)').click();
  });

  $(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset,
      scroll_pos_test = 150,
      navbar = $(".navbar"),
      header_inner = $(".header_inner");

    if(y_scroll_pos > scroll_pos_test) {
      navbar.css("background","rgba(0, 0, 0, 0.8)");
      navbar.css("padding-bottom","10px");
      header_inner.css("margin-top", "10px");
    }
    else {
      navbar.css("background","rgba(0, 0, 0, 0.0)");
      navbar.css("padding-bottom","20px");
      header_inner.css("margin-top", "36px");
    }
  });

  //Footer links on mobile
  var footer_header = $('footer h3');

  if ($(window).width()< 768) {
    footer_header.next('ul').slideToggle(250);
  }

  footer_header.click(function() {
    if ($(window).width()< 768) {
      $(this).toggleClass('active');
      $(this).next('ul').slideToggle(250);
    }
  });
});
