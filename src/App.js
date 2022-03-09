const App = () => {
	// Ejercicio 1
	// Completá el siguiente código para obtener el resultado deseado en el console.log, utilizando
	//el operador de propagación (spread operator).
	const delUnoAlTres = [1, 2, 3];

	const otroArray = [4, 5];
	const delUnoAlCinco = [...delUnoAlTres, ...otroArray];

	console.log(delUnoAlCinco); // ACA LA SOLUCION // [1, 2, 3, 4, 5]

	//   Ejercicio 2
	// A partir del array dado, creá un nuevo array que empiece con el elemento ‘CERO’ y termine con el elemento ‘CUATRO’
	const arrayDado = ["UNO", "DOS", "TRES"];
	const cero = "CERO";
	const cuatro = "CUATRO";
	const nuevoArray = [cero, ...arrayDado, cuatro];

	console.log(nuevoArray); // ACA LA SOLUCION // ['CERO', 'UNO', 'DOS', 'TRES', 'CUATRO']

	//   Ejercicio 3
	// Completá el código para poder unir los 3 arrays en uno solo y llegar al resultado esperado utilizando el spread operator.
	const frase0 = ["¡", "Hola"];
	const frase1 = [",", " ", "Mundo"];
	const frase2 = ["!"];

	const fraseCompleta = [...frase0, ...frase1, ...frase2];

	console.log(fraseCompleta.join("")); // ACA LA SOLUCION // ¡Hola, Mundo!

	//   Ejercicio 4
	// Completá el siguiente código para llegar al resultado esperado (respetar orden).
	// Quiero obtener un único objeto final con todas las propiedades
	const reviews = {
		reviewIMDB: 9,
		reviewFilmAffinity: 8.1,
	};

	const peliInfo = {
		titulo: "The Dark Knight",
		anio: 2008,
	};

	const pelicula = {
		...peliInfo,
		...reviews,
	};

	console.log(pelicula); // ACA LA SOLUCION
	// {
	//   titulo: 'The Dark Knight',
	//   anio: 2008,
	//   reviewIMDB: 9,
	//   reviewFilmAffinity: 8.1
	// }

	//   Ejercicio 5
	// Completá el siguiente código para llegar al resultado esperado (respetar orden).
	// Tengo un objeto con propiedades que representa una alumna
	// Las propiedades que contiene son: nombre y apellido
	// Queremos agregar la propiedad sabeJS con valor true, y la propiedad edad con el valor 27
	// La propiedad sabeJS queremos que esté al principio y la propiedad edad al final
	const estudiante = {
		nombre: "Ada",
		apellido: "Lovelace",
	};
	const edad = {
		edad: 27,
	};
	const nuevaProp = {
		sabeJS: true,
	};
	const estudianteJS = {
		...nuevaProp,
		...estudiante,
		...edad,
	};
	console.log(estudianteJS); // SOLUCION
	// { sabeJS: true, nombre: 'Ada', apellido: 'Lovelace', edad: 27 }

	//   Ejercicio 6
	// La función Math.max() recibe varios números (distintos parámetros) y retorna el más alto.
	// ¿Cómo modificarías el siguiente código para que funcione con distintos arrays sin tener que estar todo el tiempo usando los índices?
	console.log(Math.max(4, 7)); // 7

	const tresNums = [9, 4, 7];

	console.log(Math.max(tresNums[0], tresNums[1], tresNums[2])); // 9
	console.log(Math.max(...tresNums)); // NaN

	const masNums = [5, 5, 4, 1, 32, 132, 54, 3, 4, 5, 76, 45, 23, 65, 12, 17];
	console.log(Math.max(...masNums)); // NaN, y debería ser 132

	// Ejercicio 7
	// Escribir una arrow function llamada agregarNumeroAlArray, que recibe un número como primer parámetro y un array como segundo parámetro
	// Utilizando spread operator, la función tiene que retornar un array conteniendo los números del array pasado por parámetro y concatenarle al final el nuevo número.
	// Utilizar Spread Operator
	// ejemplo de uso

	const agregarNumeroAlArray = (num, num2) => {
		return [...num2, num];
	};

	console.log(agregarNumeroAlArray(1, [6, 19])); // [6, 19, 1]
	console.log(agregarNumeroAlArray(4, [1, 2, 3])); // [1, 2, 3, 4]

	//   Ejercicio 8
	// Crear la función contarLosArgumentos, que toma un número variable de parámetros y retorna la cantidad de parámetros que tiene
	// Utilizar Rest Operator
	const contarLosArgumentos = (...num) => {
		let numero = "";
		return (numero = +num);
	};
	contarLosArgumentos("uno", "dos"); // 2
	contarLosArgumentos("uno", "dos", "tres", "cuatro"); // 4
	contarLosArgumentos(5, 5, 4, 1, 32, 132, 54, 3, 4, 5, 76, 45, 23, 65, 12, 17); // 16
	console.log(contarLosArgumentos("uno", "dos"));
	return <div>Hola</div>;
};
export default App;
