
class Persona {
    constructor(nombre, edad){

        this.nombre = nombre;
        this.edad = edad

    }

    saludar(nombre){
        return `${this.nombre} dice: Hola, ¿Como estas ${nombre}?`;
    }


    decirEdad(nombre){
        return `${this.nombre} dice: yo tengo ${this.edad} años, señor ${nombre}`;
    }
}

function saludaryDecirEdad(){
   const nombreInput =  document.getElementById('nombreInput').value;
   const edadInput = document.getElementById('edadInput').value;
   const invitadoInput = document.getElementById('invitadoInput').value;

   if(nombreInput.trim() == '' || edadInput.trim() == '' || invitadoInput.trim() == ''){
    alert('Los campos son obligatorios')
    return
   }

   const persona = new Persona(nombreInput, edadInput)
   const saludo = persona.saludar(invitadoInput)
   const edadMsj = persona.decirEdad(invitadoInput)

   const resultado = document.getElementById('res')
   resultado.innerHTML = `<p>${saludo}</p> <p>${edadMsj}</p>`

}

// const Persona1 = new Persona('Pedro',25)
// const Persona2 = new Persona('Patricia',33)

// Persona1.saludar('Ana')
// Persona2.saludar('Emilio')
// Persona1.decirEdad('Ana')
// Persona2.decirEdad('Emilio')