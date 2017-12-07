const cat = {

    init: function (name, sound) {
        this.name = name
        this.sound = sound
        return this
    },

    makeSound: function () {

        console.log(this.sound)
    }
}

const mark = Object.create(cat).init("Mark", "meow.meow...")
mark
mark.makeSound()
mark

console.log(mark.name)