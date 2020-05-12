$("textarea").height($(window).height()/($(".active").length-1));

$("iframe").height(
    $(window).height()
);


$("#html").click(function(){
    $(this).toggleClass("active");
    $("#html").attr("class") == "active" ? $("#htmlText").show() : $("#htmlText").hide();
    $("#output").attr("class") == "active" ? $("textarea").height($(window).height()/($(".active").length-1)): $("textarea").height($(window).height()/($(".active").length));
    $("#output").attr("class") == "active" ? $("textarea").width("49%") : $("textarea").width("100%");
});


$("#css").click(function(){
    $(this).toggleClass("active");
    $("#css").attr("class") == "active" ? $("#cssText").show() : $("#cssText").hide();
    $("#output").attr("class") == "active" ? $("textarea").height($(window).height()/($(".active").length-1)): $("textarea").height($(window).height()/($(".active").length));
    $("#output").attr("class") == "active" ? $("textarea").width("49%") : $("textarea").width("100%");
});


$("#javascript").click(function(){
    $(this).toggleClass("active");
    $("#javascript").attr("class") == "active" ? $("#javascriptText").show() : $("#javascriptText").hide();
    $("#output").attr("class") == "active" ? $("textarea").height($(window).height()/($(".active").length-1)): $("textarea").height($(window).height()/($(".active").length));
    $("#output").attr("class") == "active" ? $("textarea").width("49%") : $("textarea").width("100%");
});


$("#output").click(function(){
    $(this).toggleClass("active");

    if ($("#output").attr("class") == "active"){
        $("iframe").show();
        $("textarea").width("49%");
    } else {
        $("iframe").hide();
        $("textarea").width("100%");
    }
    
});

//write keyup function here to replace contents of iframe

$("textarea").keyup(function(){ //this line has been verified to work.
    let htmlInput = $("#htmlText").val();
    let cssInput = $("#cssText").val();
    $("iframe").contents().find('html').html("<head><style>"+cssInput+"</style></head><body>"+htmlInput+"</body>");
});

$("button").click(function(){
    let javascriptInput = $("#javascriptText").val(); 
    document.getElementById("frame").contentWindow.eval(javascriptInput);
});
