## ¿Qué es una variable y para qué sirve?

- Es una forma de almacenar un valor en la memoria RAM, para poder reutilizarlas , calcularlas , etc.

## ¿Cuál es la diferencia entre declarar e inicializar una variable?

- Declarar es dar un nombre a la variable ej: `let numero`
- Inicializar es **asignar** un valor a la variable ej `numero=1`

## ¿Cuál es la diferencia entre sumar números y concatenar strings?

- La suma se realiza unicamente con variables de tipo `number`
- la concatenacion se realiza uniendo string con otros valores

## ¿Qué operador me permite sumar o concatenar?

- El operador suma: `+`

## Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre `const nombre = 'Sebastian'`
Apellido `const apellido = 'Guevara'`
Nombre de usuario `const username: sebastianssg `
Edad `let edad = 20`
Correo electrónico `let correo = sebastianguevara32569830@gmail.com `
Mayor de edad `let mayor = true`
Dinero ahorrado `let ahorro = 100`
Deudas `let deudas = 0`

## Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en un archivo nuevo.

`const persona = {nombre: 'Sebastian', apellido: 'Guevara', username: 'sebastianssg' '', edad:20, email: 'sebastianguevara32569830@gmail.com', mayor: true, ahorro: 100, deudas: 0;`

## Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

Nombre completo (nombre y apellido)
`const nomCompleto = persona.nombre + '' + persona.apellido`
Dinero real (dinero ahorrado menos deudas)
`const patrimonio = persona.ahorro - persona.deudas`

## 2- Funciones

## ¿Qué es una función?

- Es un conjunto de instrucciones agrupadas en un bloque de codigo

## ¿Cuándo me sirve usar una función en mi código?

- Me sirve para dividir mis tareas en diferentes funciones que realizan una unica tarea

## ¿Cuál es la diferencia entre parámetros y argumentos de una función?

- Parametros son cuando inicializamos la funcion.
- Argumentos son cuando llamamos a la funcion.

## Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

`function presentacion (nomComp , nickname) {`
`const frase = Mi nombre es ${nomComp}, pero prefiero que me digas ${nickName}.` `return frase; }`
`}`
`const frase = (completeName, nickname)`

## 3- Condicionales

## ¿Qué es una condicional?

- los condicionales es una forma de controlar el flujo de ejecucion de mi codigo. Por eel lado verdadero y falso

## ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

Existen 4 tipos: if else, else if, switch y if ternario. Cuando tenemos varios else if anidados nos conviene usar un switch.

## ¿Puedo combinar funciones y condicionales?

- Si

## Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
case "Free":
console.log("Solo puedes tomar los cursos gratis");
break;
case "Basic":
console.log("Puedes tomar casi todos los cursos durante un mes");
break;
case "Expert":
console.log("Puedes tomar casi todos los cursos durante un año");
break;
case "ExpertPlus":
console.log("Tú y alguien más pueden tomar TODOS los cursos durante un año");
break;
}

`if (tiposDeSuscripcion === 'free') {`
`console.log ("Solo puedes tomar los cursos gratis"); `
`} else if (tiposDeSuscripcion === 'Basic') {`
`console.log ("Puedes tomar casi todos los cursos durante un mes"); `
`} else if (tiposDeSuscripcion === 'Expert') {`
`console.log ("Puedes tomar casi todos los cursos durante un año"); `
`} else if (tiposDeSuscripcion === 'ExpertPlus') {`
` console.log ("Tú y alguien más pueden tomar TODOS los cursos durante un año"); }`

## Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

`if (tipoDeSubscripcion === 'free') console.log ("Solo puedes tomar loscursosgratis")`
`if (tipoDeSubscripcion === 'Basic') console.log ("Puedes tomar casi todos los cursos durante un mes") `
`if (tipoDeSubscripcion === 'Expert') console.log ("Puedes tomar casi todos los cursos durante un año") `
`if (tipoDeSubscripcion === 'ExpertPlus') console.log (Tú y alguien más pueden tomar TODOS los cursos durante un año")`

## Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

`const subs = ['free', 'Basic', 'Expert', 'ExpertPlus'] `
`const mensaje = ['mens1', 'm2', 'm3', 'm4']`
`const pos = subs.indexOf (tiposDeSubscripcion) `
`if (pos !== -1) { console.log(mensaje[pos]) }`

## 4- Ciclos

## ¿Qué es un ciclo?

- Dicho en otras palabras, es una manera en la cual se repite un mismo código varias veces.

## ¿Qué tipos de ciclos existen en JavaScript?

- existen 3 ciclos el while, el for ,y el do while

## ¿Qué es un ciclo infinito y por qué es un problema?

- Es cuando un codigo no se detiene, sucede cuando nos olvidamos de hacer una accion para que pare el ciclo.
- Es un problema porque la pantalla del navegador se puede trabar.

## ¿Puedo mezclar ciclos y condicionales?

- si se pueden mezclar, es posible

## Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

`for (let i = 0; i < 5; i++) {`
`console.log("El valor de i es: " + i);`
`}`
`for (let i = 10; i >= 2; i--) {`
`console.log("El valor de i es: " + i);`
`}`

## Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

- hecho en ciclos4.js

Pista: puedes usar la función prompt de JavaScript.

## 5- Arrays y Objetos

## ¿Qué es un array?

- Es una coleccion de datos

## ¿Qué es un objeto?

- Es un tipo de dato en javascript donde podemos declarar varios titulos,variables,etc. y sus respectivos valores.

## ¿Cuándo es mejor usar objetos o arrays?

- El array se utiliza cuando queremos tener una lista de cosas,productos,etc. ej:
  `nombre de personas ['seba', 'facu', 'fabian']`
- El objeto se usa cuando quieres saber el producto mas su descripcion o otros datos relacionados al producto ej: `const descripcion = { nombre = sebastian, apellido = guevara, celular = 3884434512, }`

## ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

- Si

## Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

- hecho en arrays2.js

## Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

- hecho en arrays3.js

## Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

- hecho en arrays4.js
