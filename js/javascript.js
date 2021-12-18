var baslik, altbaslik;

function haber(resim, baslik, altbaslik) {
    document.getElementById("haberresim").src = "img/gundem/" + resim;
    baslik = document.getElementById("haberbaslik").innerHTML = baslik;
    altbaslik = document.getElementById("haberaltbaslik").innerHTML = altbaslik;

}


var resim = document.getElementById('haberresim');

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

var modalImg = document.getElementById("img01");

resim.onclick = function() {
    modal.style.display = "block";

    modalImg.src = this.src;

}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
    modal.style.display = "none";
}

$(function() {
    typeof $.fn.paraceviriciWidget == "function" &&
        $("#W2683").paraceviriciWidget({
            widget: "slideline",
            wData: {
                kategori: 0,
                currency: "USD-EUR-GBP-CHF-CNY-JPY-SAR"
            },
            wSize: {
                wWidth: "100%",
                wHeight: 22
            },
            wLeft: {
                lStat: 0
            },
            wCode: {
                cS: 18
            }
        });
});