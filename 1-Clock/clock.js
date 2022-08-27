let names = prompt("İsminizi giriniz");
let added = document.querySelector("#myName")
added.innerHTML = names;

function showTime() {
    var date = new Date().toLocaleString('tr-TR');
    document.getElementById("zaman").innerHTML = date;

}
setInterval(showTime(), 1000);