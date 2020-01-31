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
    var nine = document.getElementById("nine").getAttribute("data-test");
    var ten = document.getElementById("ten").getAttribute("data-test");
    var eleven = document.getElementById("eleven").getAttribute("data-test");
    var twelve = document.getElementById("twelve").getAttribute("data-test");
    var one = document.getElementById("one").getAttribute("data-test");
    var two = document.getElementById("two").getAttribute("data-test");
    var three = document.getElementById("three").getAttribute("data-test");
    var four = document.getElementById("four").getAttribute("data-test");
    var myArray = [nine, ten, eleven, twelve, one, two, three, four]
    for (var i=0; i<myArray.length; i++) {
        if (h < myArray[i]) {
            //then what? :(
        }
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