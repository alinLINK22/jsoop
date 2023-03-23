class Carte {
    constructor(titlu, autor, editura, an_aparitie, pret, nr_pagini) {
        this.titlu = titlu;
        this.autor = autor;
        this.editrura = editura;
        this.an_aparitie = an_aparitie;
        this.pret = pret;
        this.nr_pagini = nr_pagini;
    }
    deschidCartea(pagina) {
        console.log(`Am deschis cartea la pagina ${pagina}`);

    }
    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    modificaPret(pretNou) {
        if (pretNou < 100 && pretNou > this.pret) {
            this.pret = pretNou;
        }
    }
    reducere(procent) {
        // this.pret = this.pret - (procent/100* this.pret)
        this.pret -= (procent * this.pret) / 100
        console.log(`pretul cu reducere este ${this.pret}`);

    }
}


