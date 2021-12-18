//Galeri yazi
var baslik, altbaslik;

function haber(resim, baslik, altbaslik) {
    document.getElementById("haberresim").src = "img/gundem/" + resim;
    baslik = document.getElementById("haberbaslik").innerHTML = baslik;
    altbaslik = document.getElementById("haberaltbaslik").innerHTML = altbaslik;

}

//Galeri modal
var resim = document.getElementById('haberresim');
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");

resim.onclick = function() {
    modal.style.display = "block";

    modalImg.src = this.src;

}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}