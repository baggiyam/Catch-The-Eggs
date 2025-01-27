//Creating the CHANGABLE BACKGROUND

function applyBannerClass() {
    const bodyElement = document.body;

    let counter = 1;

    const id = setInterval(function () {
        console.log(`hello ${counter}`);
        counter++;

        if (counter > 0 && counter < 15) {
            bodyElement.classList.add('Banner2');
        }
        if (counter > 15 && counter < 30) {
            bodyElement.classList.add('Banner3');
        }
        if (counter > 30 && counter < 45) {
            bodyElement.classList.add('Banner4');
        }
        if (counter > 45 && counter < 50) {
            bodyElement.classList.add('Banner2');
            counter = 1;
            bodyElement.classList.remove('Banner2', 'Banner3', 'Banner4');

        }
    }, 1000);
}

window.onload = applyBannerClass();

//INSERTING THE BASKET

class Basket{
    constructor(){
        
        this.width = 50;
        this.height = 50; 
        this.positionX = 50 - (this.width / 2);
        this.positionY = 0;
        this.playerElm = document.getElementById("player");
        this.updateUI();

    }
    updateUI() {
        if (this.playerElm) {
            this.playerElm.style.position = 'absolute'; 
            this.playerElm.style.width = `${this.width}px}`; 
            this.playerElm.style.height = `${this.height}px`; 
            this.playerElm.style.left = `${this.positionX}px`; 
            this.playerElm.style.top = `${this.positionY}px`; 
    
            this.playerElm.style.backgroundImage = 'url("Images/Nest.jpeg")'; 
            this.playerElm.style.backgroundSize = 'cover'; 
            this.playerElm.style.backgroundPosition = 'center'; 
        }
    }
}