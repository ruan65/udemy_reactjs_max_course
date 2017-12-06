class Cat {
    constructor(sound) {
        this.sound = sound
    }

    makeSound() {
        return this.sound
    }
}

class Tyger extends Cat {

    constructor() {
        super('roooaaarrrr.....')
    }
}


let dog = {
    sound: 'woof',
    talk: function () {
        console.log(this.sound)
        // return this
    }
}

let tf = dog.talk
tf()
let bf = tf.bind(dog)
bf()






