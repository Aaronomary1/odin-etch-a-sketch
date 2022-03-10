const etchcontainer = document.getElementById("etchcontainer");
let grid = 16;

for (let i = 0; i < grid; i++){
    //create 1 container, if > 1, append to previous container
    const etchbox = document.createElement("div");
    etchbox.classList.add("etchbox");
    etchcontainer.appendChild(etchbox);
    for (let n = 0; n < grid; n++){
        const etchpixel = document.createElement("div");
        etchpixel.classList.add("etchpixel");
        etchbox.appendChild(etchpixel);
    }

}
let etchpixels = document.querySelectorAll(".etchpixel");
let options = ["blue", "green", "red", "purple", "pink", "yellow", "orange"];
let randomoption = options[Math.floor(Math.random() * options.length)];
etchpixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
        randomoption = options[Math.floor(Math.random() * options.length)];
        pixel.style.backgroundColor = randomoption;
    });
});
// MAKING LISTENER FOR BUTTON TO CLEAR GRID ... WIP 

let button = document.querySelector(".clear");
    button.addEventListener("click", () => {
    let etchboxes = document.querySelectorAll(".etchbox");
    etchboxes.forEach((box) => {
        box.remove();
        
    });
    grid = Number(prompt("Grid Size (100 max): "));
    while (grid > 100){
    grid = Number(prompt("Grid Size (100 max): "));
    }
    for (let i = 0; i < grid; i++){
        //create 1 container, if > 1, append to previous container
        const etchbox = document.createElement("div");
        etchbox.classList.add("etchbox");
        etchcontainer.appendChild(etchbox);
        for (let n = 0; n < grid; n++){
            const etchpixel = document.createElement("div");
            etchpixel.classList.add("etchpixel");
            etchbox.appendChild(etchpixel);
        }
    
    }
    etchpixels = document.querySelectorAll(".etchpixel");
    etchpixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
        randomoption = options[Math.floor(Math.random() * options.length)];
        pixel.style.backgroundColor = randomoption;
    });
});
    });