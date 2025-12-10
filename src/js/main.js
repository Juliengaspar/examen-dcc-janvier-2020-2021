

/*import {Player} from "./Player";
const app = {
    timerMax: 100,
    resultItemjs: document.querySelector('.result_item--js'),
    resultItemLove: document.querySelector('.result_item--love'),
    joueurCourant: "js",
    ulElemnts: document.getElementById('app'),
    timerElement: document.querySelector('.timer'),
    plateaux: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    init() {
        this.playerJs = new Player('js')
        this.playerLove = new Player('love')
        document.documentElement.classList.add('js-enabled');
        document.documentElement.classList.remove('no-js__message');
        this.generateItems();
        this.timerText();
    },
    generateItems() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let newLi = document.createElement('li');
                newLi.classList.add('grid__item');
                this.ulElemnts.appendChild(newLi);
                newLi.addEventListener('click', () => {
                    this.plateaux[i][j] = this.joueurCourant;
                    this.verifierGagnant();
                    if (this.joueurCourant === "js") {
                        newLi.classList.add('grid__item--js');
                        this.joueurCourant = "love";
                    } else {

                        newLi.classList.add('grid__item--love');
                        this.joueurCourant = "js";
                    }
                });
            }
        }
    },
    timerText() {
        this.minute = 0;
        this.seconde = this.timerMax;
        this.timerElement.textContent = this.timerMax;
        if (this.timerElement.textContent > 60) {
            this.minute += 1;
            this.seconde = this.timerMax - 60;
            this.timerElement.textContent = `${this.minute} : ${this.seconde}`;
        }
    },
    verifierGagnant() {
        //on veréfiez les lignes
        for (let ligne = 0; ligne < 3; ligne++) {
            if ((this.plateaux[ligne][0] === this.plateaux[ligne][1]) && (this.plateaux[ligne][1] === this.plateaux[ligne][2]) && (this.plateaux[ligne][0] === this.plateaux[ligne][2])) {
                if (this.plateaux[ligne][0] !== null) {
                    console.log(this.plateaux[ligne][0] + " a gagner");
                }
            }
        }
        //on verifie les collones
        for (let collone = 0; collone < 3; collone++) {
            if ((this.plateaux[0][collone] === this.plateaux[1][collone] ) && (this.plateaux[1][collone] === this.plateaux[2][collone]) && (this.plateaux[0][collone] === this.plateaux[2][collone])){
                if (this.plateaux[0][collone] !== null){
                    console.log(this.plateaux[0][collone] + " a gagner");
                }
            }
        }
        //on verifie la diagonales1

        if ((this.plateaux[0][0] === this.plateaux[1][1]) && (this.plateaux[0][0] === this.plateaux[2][2]) && (this.plateaux[1][1] === this.plateaux[2][2])){
            if (this.plateaux[0][0] !== null){
                console.log(this.plateaux[0][0] + " a gagner");
            }
        }
        //on verifie la diagonales2
        if ((this.plateaux[0][2] === this.plateaux[1][1]) && (this.plateaux[0][2] === this.plateaux[2][0]) && (this.plateaux[2][0] === this.plateaux[1][1])){
            if (this.plateaux[1][1] !== null){
                console.log(this.plateaux[1][1] + " a gagner");
            }
        }
    }
}
app.init()

 */