class User {
    _varsta;
    #email;
    constructor(id, nume, email, varsta) {
        //setam proprietatile
        this.id = id;
        this.nume = nume;
        this.#email = email;
        this._varsta = varsta;
    }
    get email(){
        console.log('sunt in getter email');
        return this.#email;
    }
    set email(newEmail){
        console.log('sunt in setter email');
        if(newEmail== 'dan@dan.com'){
        this.#email= newEmail;
        }
        else{
            throw'Error: invalid email'
        }

    }



    get myAge(){
        return this._varsta;
    }
    set myAge(varstaNoua){
        if(varstaNoua >0){
            this._varsta=varstaNoua;
        }
        else{
            throw 'Error: invalid data!';
            // console.error('Error!')
        }
    }
    mananca(calorii) {
        console.log(`Mananca ${calorii} calorii pe zi.`);
    }
    doarme(ore) {
        console.log(`Doarme ${ore} ore pe zi`);
    }
}
export { User }
