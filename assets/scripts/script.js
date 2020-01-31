var d = new Date();
var h = d.getHours();

function dateUpdate() {
    //one time outside so it doesnt take a full second to load.
    var d = new Date();
    $("#date").html(d);
    dateUpdate = setInterval(function() {
        var d = new Date();
        $("#date").html(d);
    }, 1000);
}
function changeColors() {
    if (h == document.getElementById("nine").getAttribute("data-test")) { 
        document.getElementById("nine").classList.toggle("hourS");
    }
    if (h == document.getElementById("ten").getAttribute("data-test")) { 
        document.getElementById("ten").classList.toggle("hourS");
    }
    if (h == document.getElementById("eleven").getAttribute("data-test")) { 
        document.getElementById("eleven").classList.toggle("hourS");
    }
    if (h == document.getElementById("twelve").getAttribute("data-test")) { 
        document.getElementById("twelve").classList.toggle("hourS");
    }
    if (h == document.getElementById("one").getAttribute("data-test")) { 
        document.getElementById("one").classList.toggle("hourS");
    }
    if (h == document.getElementById("two").getAttribute("data-test")) { 
        document.getElementById("two").classList.toggle("hourS");
    }
    if (h == document.getElementById("three").getAttribute("data-test")) { 
        document.getElementById("three").classList.toggle("hourS");
    }
    if (h == document.getElementById("four").getAttribute("data-test")) { 
        document.getElementById("four").classList.toggle("hourS");
    }
    if (h == document.getElementById("five").getAttribute("data-test")) { 
        document.getElementById("five").classList.toggle("hourS");
    }
    //testing
    if (h < document.getElementById("nine").getAttribute("data-test")) { 
        document.getElementById("nine").classList.toggle("hourS");
    }
    if (h < document.getElementById("ten").getAttribute("data-test")) { 
        document.getElementById("ten").classList.toggle("hourS");
    }
    if (h < document.getElementById("eleven").getAttribute("data-test")) { 
        document.getElementById("eleven").classList.toggle("hourS");
    }
    if (h < document.getElementById("twelve").getAttribute("data-test")) { 
        document.getElementById("twelve").classList.toggle("hourS");
    }
    if (h < document.getElementById("one").getAttribute("data-test")) { 
        document.getElementById("one").classList.toggle("hourS");
    }
    if (h < document.getElementById("two").getAttribute("data-test")) { 
        document.getElementById("two").classList.toggle("hourS");
    }
    if (h < document.getElementById("three").getAttribute("data-test")) { 
        document.getElementById("three").classList.toggle("hourS");
    }
    if (h < document.getElementById("four").getAttribute("data-test")) { 
        document.getElementById("four").classList.toggle("hourS");
    }
    if (h < document.getElementById("five").getAttribute("data-test")) { 
        document.getElementById("five").classList.toggle("hourS");
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