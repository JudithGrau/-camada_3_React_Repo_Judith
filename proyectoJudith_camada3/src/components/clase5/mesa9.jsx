import React from 'react'

const mascotas = [
    {
        nombre: "Firulais",
        edad: 11,
        sexo: "macho",
        raza: "pastor alemán",
        tamaño: "grande"
    },
    {
        nombre: "Maia",
        edad: 13,
        sexo: "hembra",
        raza: "pug",
        tamaño: "chico" 
    },
    {
        nombre: "Pipo",
        edad: 5,
        sexo: "macho",
        raza: "schnauzer",
        tamaño: "mediano" 
    },
    {
        nombre: "Pacha",
        edad: 2,
        sexo: "hembra",
        raza: "mestizo",
        tamaño: "chico" 
    }
]

const Mesa = () => {

    return (
        <div>
            <h1>Clientes caninos Veterinaria</h1>
            <ul>
                {mascotas.map((item, index) => (
                <li key={index}>
                    <h2>NOMBRE: {item.nombre}</h2>
                    <p>EDAD: {item.edad}</p>
                    <p>SEXO: {item.sexo}</p>
                    <p>RAZA: {item.raza}</p>
                    <p>TAMAÑO: {item.tamaño}</p>
                </li>
                ))}
            </ul>
        </div>
        )
}   

export default Mesa