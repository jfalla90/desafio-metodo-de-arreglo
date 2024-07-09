let superheroes = ['iron man', 'hulk', 'thor'];

console.log(superheroes[1]);

superheroes.forEach( y => console.log(y));

superheroes.push('wanda');
superheroes.unshift('black panter');
superheroes.splice(2, 0, 'ant man');

superheroes.shift();
superheroes.pop();

console.log(superheroes);

const meses= ['enero', 'febrero', 'marzo', 'mayo'];

meses.pop()
meses.unshift('diciembre');
meses.splice(2, 1);

if(meses.includes('marzo')) {
    console.log("Welcome march");
};



const indiceDeMarzo = meses.findIndex( mes => mes ==="marzo")

console.log(indiceDeMarzo);


const eliminarIndiceDeMayo = meses.findIndex( mes => mes ==="mayo")

meses.splice(eliminarIndiceDeMayo, 1)

console.log(meses);


const peliculas = [
    {id: 1, nombre: "Thor"},
    {id: 2, nombre: "Ant-Man"},
    {id: 3, nombre: "Terminator"},
    {id: 4, nombre: "Ip Man"},
    {id: 5, nombre: "Rocky"}
]

console.log(peliculas);

const eliminarPelicula = peliculas.findIndex( pelicula => pelicula.nombre ==="Terminator");

peliculas.splice(eliminarPelicula, 1);

console.log(peliculas);


const estaciones = ["Verano", "Otoño", "Invierno", "Primavera"];

estaciones.forEach(x => console.log(x));

const valores2 = [200, 100, 500, 300, 250];
const nuevos_valores = valores2.filter(x => x >= 250);
console.log(nuevos_valores);

const estudiantes = [
    { nombre: "Juan", nota: 3.4 },
    { nombre: "Laura", nota: 6 },
    { nombre: "Katherine", nota: 4.3 },
    { nombre: "Jonathan", nota: 5.4 }
];

const estudiantesAprobados =
estudiantes.filter( z => z.nota >= 4 );
console.table(estudiantesAprobados);
    

let trabajadores = [
    {nombre: "Contanza", cargo: "Chef"},
    {nombre: "Luis", cargo: "garzón"},
    {nombre: "Estefany", cargo: "Administradora"},
    {nombre: "Andrés", cargo: "Recepcionista"},
    {nombre: "Pedro", cargo: "garzón"},
    {nombre: "Felipe", cargo: "Aseo"},
    {nombre: "Maria", cargo: "garzón"},
    {nombre: "Diego", cargo: "garzón"},
    ]

const trabajador =
trabajadores.filter( trabajador => trabajador.cargo === "garzón" );
console.log(trabajador);





//---------------------------------------------------------------------------//

const inputInvitado = document.getElementById('nuevoInvitado');
const btnInvitado = document.getElementById('agregarInvitado');
const listaInvitados = document.getElementById('invitados');

const invitados = []
btnInvitado.addEventListener('click', () => {
    const nuevoInvitado = inputInvitado.value;
    invitados.push(nuevoInvitado);
    inputInvitado.value = "";

    let html = ""
    for (let invitado of invitados) {
        html += `<li>${invitado}</li>`;
    }

    listaInvitados.innerHTML = html;

});