function talk() {

    console.log(this.sound)
}

function run() {
    console.log("I'm fricking running fast!!!")

}

let animal = {
    run
}

let dog = {
    talk
}

let bobik = {
    sound: "Gav Gav..."
}

Object.setPrototypeOf(dog, animal)
Object.setPrototypeOf(bobik, dog)


bobik.talk()
bobik.run()