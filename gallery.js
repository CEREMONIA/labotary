var pos = 0;
var totalSlides = $("#slider-wrap ul li").length;
var sliderWidth = $("#slider-wrap").width();

$(document).ready(function(){
    $("#slider-wrap ul#slider").width(sliderWidth * totalSlides);

    $("#next").click(function(){
        sliderRight();
    });

    $("#previous").click(function(){
        sliderLeft();
    });

    var autoSlider = setInterval(sliderRight, 3000);


    $.each($("#slider-wrap ul li"), function(){
        var li = document.createElement("li");
        $("#pagination-wrap ul").append(li);
    });

    pagination(); 
    countSlides(); 

    $("#slider-wrap").hover(
        function(){
            $(this).addClass("active");
            clearInterval(autoSlider);
        },
        function(){
            $(this).removeClass("active");
            autoSlider = setInterval(sliderRight, 3000);
        }
    );
});

function sliderLeft(){
    pos--;
    if(pos == -1){
        pos = totalSlides - 1;
    }
    $("#slider-wrap ul#slider").css("left", -(sliderWidth * pos));

    countSlides();
    pagination();
}

function sliderRight(){
    pos++;
    if(pos == totalSlides){
        pos = 0;
    }
    $("#slider-wrap ul#slider").css("left", -(sliderWidth * pos));

    countSlides();
    pagination();
}

function pagination(){
    $("#pagination-wrap ul").empty(); // Clear existing pagination items

    for(var i = 0; i < totalSlides; i++){
        var li = $("<li></li>");
        if(i === pos){
            li.addClass("active");
        }
        $("#pagination-wrap ul").append(li);
    }

    // Click event for pagination items
    $("#pagination-wrap ul li").click(function(){
        pos = $(this).index();
        $("#slider-wrap ul#slider").css("left", -(sliderWidth * pos));
        countSlides();
        pagination();
    });
}

function countSlides(){
    $("#counter").html((pos + 1) + " / " + totalSlides);
}
