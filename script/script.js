
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


function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);
  /*create magnifier glass:*/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);
  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /*set the position of the magnifier glass:*/
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}
// $(".detail_image_gallery").mouseover(function(){
//   $(".img-magnifier-glass").css("display", "block");
// });
// $(".detail_image_gallery").mouseout(function(){
//   $(".img-magnifier-glass").css("display", "none");
// });
magnify("myimage", 5);

        }); 
      
