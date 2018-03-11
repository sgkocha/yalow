$(document).on('ready', function() {
     $(".slider-top").slick({
        prevArrow:"<img class='a-left control-c prev slick-prev' src='./img/prev.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='./img/next.png'>",
        dots: false,
        infinite: true,
        speed: 150,
        centerMode: false,
        variableWidth: true,
        slidesToWatch: 2,
        slidesToScroll: 2,
        responsive: [
          {
              breakpoint: 1025,
              settings: {
                  centerMode: true,
                  arrows: false,

                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }]
     });

    var dialog = $(".dialog");

    $(document).on("click", ".text-btn", function(){
        $("#dialog1").css("display", "block");
        $(".dialog-body").addClass("active");

    });
    $(document).on("click", ".social-btn", function(){
        $("#dialog2").css("display", "block");

    });

    $(document).on("click", ".middle-wr-social.twitter-btn", function () {
        console.log("tweet");
    });
    $(document).on("click", "*", function(event){
        if ($(event.target).closest(".plusBtn").length) return;
        if ($(event.target).closest(".dialog-body").length) return;
        dialog.css("display", "none");
        event.stopPropagation();

    });



});