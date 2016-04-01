$(document).ready(function() {
    $(".niceCheck").mousedown(
        function() {
            changeCheck($(this));
        });

    $(".niceCheck").hover(
        function() {
            onHover($(this));
        },
        function() {
            offHover($(this));
        }
    )
    
    $(".niceLabel").hover(
        function() {
            var e = (document.getElementById($(this).attr("for"))).parentElement;
            onHover($(e));
        
        },
        function() {
            var e = (document.getElementById($(this).attr("for"))).parentElement;
            offHover($(e));
        }
    );
        $(".niceLabel").mousedown(
        function() {
            var e = (document.getElementById($(this).attr("for"))).parentElement;            
            changeCheck($(e));
        });

    $(".niceCheck").each(
        function() {
            changeCheckStart($(this));
        });
});

function changeCheck(el) {
    var el = el,
        input = el.find("input").eq(0);
    if (!input.attr("checked")) {
        el.css("background-position", "0 -58px");
        input.attr("checked", true)
    } else {
        el.css("background-position", "0 0");
        input.attr("checked", false)
    }
    return true;
}

function onHover(el) {
    var el = el,
        input = el.find("input").eq(0);
   	if (!input.attr("checked")) {
        el.css("background-position", "0 -29px");
    } else {
        el.css("background-position", "0 -58px");
    }
    return true;
}

function offHover(el) {
    var el = el,
        input = el.find("input").eq(0);
   	if (!input.attr("checked")) {
        el.css("background-position", "0 0px");
    } else {
        el.css("background-position", "0 -87px");
    }
    return true;
}

function changeCheckStart(el) {
    var el = el,
        input = el.find("input").eq(0);
    if (input.attr("checked")) {
        el.css("background-position", "0 -29px");
    }
    return true;
}

