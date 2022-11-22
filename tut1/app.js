var events = require('events');

// var myEmmiter = new events.EventEmitter();

// myEmmiter.on('someEvent', function(msg){
//     console.log(msg);
// });
// myEmmiter.emit('someEvent', 'hello world')



// var Person = function(name){
//     this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// var james = new Person('james');
// var marry = new Person('marry');
// var ryu = new Person('ryu');

// var people = [james, marry, ryu];

// people.forEach(function(person){
//     person.on('speak', function(msg){
//         console.log(person.name = ' said: ' + msg);
//     });
// });


// james.emit('speak', 'hello niggas');

 
class Person extends events.EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }
}
 
let james = new Person('james'); 
let mary = new Person('mary'); 
let ruy = new Person('ruy');
let people = [james, mary, ruy];

people.forEach(person => {
    person.on('speak', msg => {
        console.log(person.name + ' said : ' + msg);
    });
});

james.emit('speak', 'hey dudes');