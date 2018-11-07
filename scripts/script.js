let placeholder = document.getElementsByClassName("image");
let paths = [
    "url(img/Beispiel1.jpg)",
    "url(img/Beispiel2.jpg)",
    "url(img/Beispiel3.jpg)",
    "url(img/Beispiel4.jpg)",
    "url(img/Beispiel5.jpg)"
];

let addCounter = 0;

let leftImg = () => {
    addCounter--;
    if(addCounter <= -5) {
        addCounter = 0;
    }

    for(let i = 0; i < placeholder.length; i++) {
        let pathNumber = i + addCounter;

        if(pathNumber < 0) {
            pathNumber = paths.length + pathNumber;
        }else if(pathNumber === 5) {
            pathNumber = 0;
        }

        placeholder[i].style.backgroundImage = paths[pathNumber];
    }
}

let rightImg = () => {
    addCounter++;
    if(addCounter >= 5) {
        addCounter = 0;
    }

    for(let i = 0; i < placeholder.length; i++) {
        let pathNumber = i + addCounter;

        if(pathNumber < 0) {
            pathNumber = paths.length + pathNumber;
        }else if(pathNumber > 4) {
            pathNumber = pathNumber - 4 + i;
        }

        placeholder[i].style.backgroundImage = paths[pathNumber];
    }
}