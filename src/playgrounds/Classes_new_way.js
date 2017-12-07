class Mammal {

    constructor(sound) {
        this.sound = sound
    }

    talk() {
        console.log(this.sound)
    }
}

class Dog extends Mammal {

    constructor(sound) {
        super("rrrrrrrrrrrrr......")
        if (sound) {
            this.sound = sound
        }
    }
}

let fluffykins = new Mammal("mur mur")
let doggy =  new Dog("gav gav")
let bobic = new Dog()

fluffykins.talk()
doggy.talk()
bobic.talk()
