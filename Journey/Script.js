document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.getElementById("imageGrid");
    const numImages = 345;

    for (let i = 1; i <= numImages; i++) {
        let imageSrc = `./Pic/Pic (${i}).jpg`;

        let gridItem = document.createElement("div");
        gridItem.className = "grid-item";

        let img = document.createElement("img");
        img.src = imageSrc;
        img.alt = `Image ${i}`;
        img.addEventListener("mouseover", function () {
            img.style.transform = "scale(1.1)";
        });
        img.addEventListener("mouseout", function () {
            img.style.transform = "scale(1)";
        });

        let buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";

        const buttonNames = ['Like ❤', 'Buy $', 'Share ❗'];
        const buttonLinks = ['https://example.com/explore', 'https://example.com/discover', 'https://example.com/enjoy'];

        for (let j = 0; j < buttonNames.length; j++) {
            let button = document.createElement("a");
            button.href = buttonLinks[j];
            button.target = "_blank"; // Opens link in a new tab
            button.className = "grid-button responsive-button";
            button.innerText = buttonNames[j];

            buttonContainer.appendChild(button);
        }

        gridItem.appendChild(img);
        gridItem.appendChild(buttonContainer);
        gridContainer.appendChild(gridItem);
    }

    
});