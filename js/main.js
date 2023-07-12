// document.getElementById("#pageTitle") = "Lab 5 - DOM Manipulation with jQuery";
// $("#pageTitle").val("Lab 5 - DOM Manipulation with jQuery");

$(document).ready(function () {
    $("button").css("background-color", "red");

    $("body").css("background-color", "ivory");

    $(".center-icons").css("background-color", "yellow");
    $('.center-icon').addClass('selected');

    
    $("#panel-2").append("<img src='images/art/thumbs/13030.jpg'/>");
    
    $(".img-responsive").on("mouseover", function () {
        var alt = $(this).attr('alt');
        var src = $(this).attr('src');
        var newsrc = src.replace("small", "medium");

        var preview = $('<div id="preview"></div>');
        var image = $('<img src="' + newsrc + '">');
        var caption = $('<p>' + alt + '</p>');

        preview.append(image);
        preview.append(caption);
        $(this).after(preview);
        $(this).addClass("gray");
        $("#preview").fadeIn("1000");
    });
    $(".img-responsive").on("mouseleave", function () {
        $(this).removeClass("gray");
        $("#preview").remove();
    });

});
