
    $(document).ready(function() {  

        $('.mobile_res_toggle_btn').click(function () {
            $('.mobile_res_toggle_content').toggleClass('responsive_bar');
        });
        

  $(document).ready(function() {      
    $('.Banner_slider').slick({
        slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      dots: false,
    arrows: false,
      });
      }); 

              $(".product_category_slider").slick({
                slidesToShow:4,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                dots: false,
               arrows: true,
       appendArrows: $('.category_slider_arrow_box'),
       nextArrow: '<a class="category_pre_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',
       prevArrow: '<a class="category_pre_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow:3,
                      slidesToScroll: 1,
                      autoplay: false,
                      autoplaySpeed: 1500,
                      dots: false,
                      arrows: true,
                    },
                  },
                  {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      autoplay: false,
                      autoplaySpeed: 1500,
                           dots: false,
                        arrows: true,
                    },
                  },
                  {
                    breakpoint: 540,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      autoplay: false,
                      autoplaySpeed: 1500,
                          dots: false,
                      arrows: true,
                    },
                  },
                  {
                    breakpoint: 400,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      autoplay: false,
                    autoplaySpeed: 1500,
                           dots: false,
                       arrows: true,
                    },
                  },
                ],
              });




              $(".testimonial_slider").slick({
                slidesToShow:3,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                dots: false,
               arrows: true,
      appendArrows: $('.testimonial_slider_arrow_box'),
      nextArrow: '<a class="testimonial_pre_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',
      prevArrow: '<a class="testimonial_pre_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow:3,
                      slidesToScroll: 1,
                      autoplay: false,
                      autoplaySpeed: 1500,
                      dots: false,
                      arrows: true,
                    },
                  },
                  {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      autoplay: false,
                      autoplaySpeed: 1500,
                           dots: false,
                        arrows: true,
                    },
                  },
                  {
                    breakpoint: 540,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      autoplay: false,
                      autoplaySpeed: 1500,
                          dots: false,
                      arrows: true,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      autoplay: false,
                    autoplaySpeed: 1500,
                           dots: false,
                       arrows: true,
                    },
                  },
                ],
              });


              var acc = document.getElementsByClassName("accordion");
              var i;
              
              for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                  this.classList.toggle("active");
                  var panel = this.nextElementSibling;
                  if (panel.style.display === "block") {
                    panel.style.display = "none";
                  } else {
                    panel.style.display = "block";
                  }
                });
              }


$("#type_delivery_location").click(function () {
  $("#type_delevery_address").css("display", "block");
  $("#toggle_tick_icon").css("display", "block");
  $("#toggle_truck_icon").css("display", "none");
  $("#type_delivery_location").css("background", "#0F994B");
  $("#toggle_tick_icon").css("color", "#ffffff");
  $("#toggle_delivery_text_color").css("color", "#ffffff");


  $("#select_pickup_location").css("background", "unset");
  $("#toggle_pickup_text_color").css("color", "#000000");

  $("#toggle_location_icon").css("display", "block");
  $("#toggle_location_tick_icon").css("display", "none");

  $("#type_pickup_detail_address").css("display", "none");
  $("#check_out_pick_up_location_selector").css("display", "none");

});

$("#select_pickup_location").click(function () {
  $("#type_delevery_address").css("display", "none");
  $("#toggle_tick_icon").css("display", "none");
  $("#toggle_truck_icon").css("display", "block");
  $("#toggle_tick_icon").css("display", "none");

  $("#select_pickup_location").css("background", "#0F994B");
  $("#toggle_location_tick_icon").css("color", "#ffffff");
  $("#toggle_pickup_text_color").css("color", "#ffffff");


  $("#type_delivery_location").css("background", "unset");
  $("#toggle_delivery_text_color").css("color", "#000000");
  
  $("#toggle_location_icon").css("display", "none");
  $("#toggle_location_tick_icon").css("display", "block");

  $("#type_pickup_detail_address").css("display", "block");
  $("#check_out_pick_up_location_selector").css("display", "flex");
});

$("#click_to_add_coupon").click(function () {
  $("#checkout_page_coupon_form").css("display", "block");
  
});




        }); 
      
