function Person(citation) {

    this.saying = citation
}

Person.prototype.talk = function () {
    console.log('I fucking sayd: ' + this.saying)
}

function _new(constructor) {

    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    var argsArray = Array.from(arguments).slice(1)
    constructor.apply(obj, argsArray)
    return obj
}

let mini = _new(Person, "I'm mini girl...")

let maxi = new Person("I love you mini! Kisses!")

mini.talk()
maxi.talk()

let pp = Person.prototype

let cat = {name: 'vaska'}

Object.setPrototypeOf(cat, maxi)
let cp = cat.__proto__//cat.prototype
cp

cat.talk()



