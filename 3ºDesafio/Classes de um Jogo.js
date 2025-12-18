class Hero{
    constructor(nome, idade, tipoClasse){
        this.nome = nome
        this.idade = idade
        this.tipoClasse = tipoClasse
    }

    tipoAtaque(){
        switch(this.tipoClasse){
            case "mago":
                return "magia"
                
            case "guerreiro":
                return "espada"
                
            case "monge":
                return "artes marciais"
                
            case "ninja":
                return "shuriken"
                
        }
    }

    atacar(){
        const ataque = this.tipoAtaque()
        console.log(`o ${this.tipoClasse} atacou usando ${ataque}`)
    }

}

let reiArtur = new Hero("Artur", 26, "guerreiro")
reiArtur.atacar()

let merlin = new Hero("Merlin", 150, "mago");
merlin.atacar();