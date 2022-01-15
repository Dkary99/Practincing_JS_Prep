

// Objetos literales 

const jose = {
    name: "Jose",
    age: 20,
    cursosAprobados: ["a","b","c"],
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
        
    }
}

// iterar objetos literales *
const usuario = {
    username: 'juan.perez',
    password: 'loremipsumpwd123',
    lovesJavascript: true,
    favoriteNumber: 42
};

for (let clave in usuario){
    console.log(clave);
    console.log(usuario[clave]); // usuario.clave
}

// prototipo de función 

function Student (name, age , CursAprobados){
    this.name = name;
    this.age = age;
    this.CursAprobados = CursAprobados;
}
Student.prototype.aprobarCurso = function (nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

// instancia 

const Yo = new Student(
    "jose",
    22,
    ["a","b","c"]
) ;


///// RETOS USUALES ///////////

/*
CENTURY:
//redondeamos hacia abajo: 
Math.ceil(number/100)


/// PALINDROME ///////////

string.split('').reverse().join('');
OR

let sizestring = string.length();
for (let  i = 0 ; i < sizestring / 2; i++){
    if (string[i] === string [sizestring - 1 - i ]
}

*/

