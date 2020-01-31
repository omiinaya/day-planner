var d = new Date();
var h = d.getHours();

function dateUpdate() {
    var d = new Date();
    $("#date").html(d);
    dateUpdate = setInterval(function() {
        var d = new Date();
        $("#date").html(d);
        changeColors()
    }, 1000);
}
function changeColors() {
    //future
    if (h < $("#nine").attr("data-test")) {
        $("#nine").css("background-color","#77dd77");
    }
    if (h < $("#ten").attr("data-test")) { 
        $("#ten").css("background-color","#77dd77");
    }
    if (h < $("#eleven").attr("data-test")) { 
        $("#eleven").css("background-color","#77dd77");
    }
    if (h < $("#twelve").attr("data-test")) { 
        $("#twelve").css("background-color","#77dd77");
    }
    if (h < $("#one").attr("data-test")) { 
        $("#one").css("background-color","#77dd77");
    }
    if (h < $("#two").attr("data-test")) { 
        $("#two").css("background-color","#77dd77");
    }
    if (h < $("#three").attr("data-test")) { 
        $("#three").css("background-color","#77dd77");
    }
    if (h < $("#four").attr("data-test")) { 
        $("#four").css("background-color","#77dd77");
    }
    if (h < $("#five").attr("data-test")) { 
        $("#five").css("background-color","#77dd77");
    } 
    //present
    if (h == $("#nine").attr("data-test")) { 
        $("#nine").css("background-color","red");
    }
    if (h == $("#ten").attr("data-test")) { 
        $("#ten").css("background-color","red");
    }
    if (h == $("#eleven").attr("data-test")) { 
        $("#eleven").css("background-color","red");
    }
    if (h == $("#twelve").attr("data-test")) { 
        $("#twelve").css("background-color","red");
    }
    if (h == $("#one").attr("data-test")) { 
        $("#one").css("background-color","red");
    }
    if (h == $("#two").attr("data-test")) { 
        $("#two").css("background-color","red");
    }
    if (h == $("#three").attr("data-test")) { 
        $("#three").css("background-color","red");
    }
    if (h == $("#four").attr("data-test")) { 
        $("#four").css("background-color","red");
    }
    if (h == $("#five").attr("data-test")) { 
        $("#five").css("background-color","red");
    }
    //past
    if (h > $("#nine").attr("data-test")) { 
        $("#nine").css("background-color","#d3d3d3");
    }
    if (h > $("#ten").attr("data-test")) { 
        $("#ten").css("background-color","#d3d3d3");
    }
    if (h > $("#eleven").attr("data-test")) { 
        $("#eleven").css("background-color","#d3d3d3");
    }
    if (h > $("#twelve").attr("data-test")) { 
        $("#twelve").css("background-color","#d3d3d3");
    }
    if (h > $("#one").attr("data-test")) { 
        $("#one").css("background-color","#d3d3d3");
    }
    if (h > $("#two").attr("data-test")) { 
        $("#two").css("background-color","#d3d3d3");
    }
    if (h > $("#three").attr("data-test"))  { 
        $("#three").css("background-color","#d3d3d3");
    }
    if (h > $("#four").attr("data-test")) { 
        $("#four").css("background-color","#d3d3d3");
    }
    if (h > $("#five").attr("data-test")) { 
        $("#five").css("background-color","#d3d3d3");
    }
}
function loadData() {
    dateUpdate()
    changeColors()
    $("#nine").val(localStorage.getItem("nine"));
    $("#ten").val(localStorage.getItem("ten"));
    $("#eleven").val(localStorage.getItem("eleven"));
    $("#twelve").val(localStorage.getItem("twelve"));
    $("#one").val(localStorage.getItem("one"));
    $("#two").val(localStorage.getItem("two"));
    $("#three").val(localStorage.getItem("three"));
    $("#four").val(localStorage.getItem("four"));
    $("#five").val(localStorage.getItem("five"));
}
function saveData() {
    localStorage.setItem("nine", $('#nine').val());
    localStorage.setItem("ten", $('#ten').val());
    localStorage.setItem("eleven", $('#eleven').val());
    localStorage.setItem("twelve", $('#twelve').val());
    localStorage.setItem("one", $('#one').val());
    localStorage.setItem("two", $('#two').val());
    localStorage.setItem("three", $('#three').val());
    localStorage.setItem("four", $('#four').val());
    localStorage.setItem("five", $('#five').val());
}