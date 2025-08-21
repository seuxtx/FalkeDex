document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const images1 = document.querySelectorAll('.poke-grid .image img');

    const originalSources = Array.from(images1).map(img => img.src);

    const images2 = [
        "./images/nude/SewaddleFalkedex3.png",
        "./images/nude/SwaddyFalkedex2.png",
        "./images/nude/VannyFalkedex2.jpg"
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