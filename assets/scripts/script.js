var d = new Date();
var h = d.getHours();

function dateUpdate() {
    //one time outside so it doesnt take a full second to load.
    var d = new Date();
    $("#date").html(d);
    dateUpdate = setInterval(function() {
        var d = new Date();
        $("#date").html(d);
        console.log(h);
    }, 1000);
}
function changeColors() {
    colorUpdate = setInterval(function() {
        //fill logic later
    }, 100);
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