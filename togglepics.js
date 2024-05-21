document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const images1 = document.querySelectorAll('.pokemon-grid .image img');
    const originalSources = Array.from(images1).map(img => img.src);

    const images2 = [
        "./images/nude/001Bulba2.png",
        "./images/nude/002Ivy2.png",
        "./images/nude/003Venusa02.png",
        "./images/nude/004Charm2.png",
        "./images/nude/005Meleon2.png",
        "./images/nude/006Zard2.png",
        "./images/nude/007Wartiddy2.png",
        "./images/nude/008Wartiddy2.png",
        "./images/nude/009Blastty2.png",
        "./images/nude/010Caterpu2.png",
        "./images/nude/011Metapu2.png",
        "./images/nude/012Buttfree2.png",
        "./images/nude/013Weendy2.png",
        "./images/nude/014Kaku2.png",
        "./images/nude/015Beedry2.png",
        "./images/nude/016Pidgy2.png",
        "./images/nude/017Pidgytto2.png",
        "./images/nude/018Pidgett2.png",
        "./images/nude/019Ratta2.png",
        "./images/nude/020Ratikate2.png",
        "./images/nude/021Pear2.png",
        "./images/nude/022Fear2.png",
        "./images/nude/023Kans2.png",
        "./images/nude/024Kobra2.jpg",
        "./images/nude/025Pikachan2.png",
        "./images/nude/026Chuu2.png",
        "./images/nude/027Sandy2.png",
        "./images/nude/028Sandra2.png",
        "./images/nude/029Nidan2.png",
        "./images/nude/030Nidora2.png",
        "./images/nude/031Queen3.png",
        "./images/nude/032NidanTrans2.png",
        "./images/nude/033Nidoru2.png",
        "./images/nude/034King2.png",
        "./images/nude/035Fairy3.png",
        "./images/nude/036Fable2.png",
        "./images/nude/037Pix3.png",
        "./images/nude/038Nine2.png",
        "./images/nude/039Puffy2.png",
        "./images/nude/040Wiggly2.png",
        "./images/nude/041Zubs2.png",
        "./images/nude/Falkedex042_3.png",
        "./images/nude/Howler3.png",
        "./images/0535Tymppy1.png",
        "./images/nude/hallie3.png"
    ];
//Note tymppy has no alt clothing
    let isSet1 = true;

    toggleButton.addEventListener("click", function() {
        if (isSet1) {
            images1.forEach((img, index) => {
                img.src = images2[index];
            });
            isSet1 = false;
        } else {
            images1.forEach((img, index) => {
                img.src = originalSources[index];
            });
            isSet1 = true;
        }
    });
});