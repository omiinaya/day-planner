var d = new Date();

function dateUpdate() {
    dateUpdate = setInterval(function() {
        var d = new Date();
        document.getElementById("date").innerHTML = d;
    }, 5);   
}
function loadData() {
    dateUpdate()
    document.getElementById("nine").value = localStorage.getItem("nine");
    document.getElementById("ten").value = localStorage.getItem("ten");
    document.getElementById("eleven").value = localStorage.getItem("eleven");
    document.getElementById("twelve").value = localStorage.getItem("twelve");
    document.getElementById("one").value = localStorage.getItem("one");
    document.getElementById("two").value = localStorage.getItem("two");
    document.getElementById("three").value = localStorage.getItem("three");
    document.getElementById("four").value = localStorage.getItem("four");
    document.getElementById("five").value = localStorage.getItem("five");
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