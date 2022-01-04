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
Nombre de usuario `const username `
Edad `let edad = 20`
Correo electrónico `let correo = sebastianguevara32569830@gmail.com `
Mayor de edad `let mayor = true`
Dinero ahorrado `let ahorro = 100`
Deudas `let deudas = 0`

## Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en un archivo nuevo.

`const persona = {nombre: 'Sebastian', apellido: 'Guevara', username: '', edad:20, email: 'sebastianguevara32569830@gmail.com', mayor: true, ahorro: 100, deudas: 0;`

## Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

Nombre completo (nombre y apellido)
`const nomCompleto = persona.nombre + '' + persona.apellido`
Dinero real (dinero ahorrado menos deudas)
`const patrimonio = persona.ahorro - persona.deudas`

## Responde las siguientes preguntas en un nuevo archivo:

## ¿Qué es una función?

## ¿Cuándo me sirve usar una función en mi código?

## ¿Cuál es la diferencia entre parámetros y argumentos de una función?

## Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

`function presentacion `

## Responde las siguientes preguntas en un nuevo archivo:

- ¿Qué es una condicional?
- los condicionales es una forma de controlar el flujo de ejecucion de mi codigo. Por eel lado verdadero y falso
- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
  Existen 4 tipos: if else, else if, switch y if ternario. Cuando tenemos varios else if anidados nos conviene usar un switch.
- ¿Puedo combinar funciones y condicionales?
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

`if (tipoDeSubscripcion === 'Free') {console.log("Solo puedes tomar los cursos gratis")`

## Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

## Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

`const subs = ['Free']`
