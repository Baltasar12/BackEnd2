http://localhost:8080/api/mensajes/agregarMensaje
{
    "id": 1003,
    "email": "AgustinBarbaglia@gmail.com",
    "fecha": "4/5/2022 21:18:18",
    "mensaje": "yo tambien 2"
}

RESPONSE
vacio, solo agrega, se puede observar q lo agrego con la siguiente api

http://localhost:8080/api/mensajes/mostrarTodos
[
    {
        "_id": "627321168b64534bc193f533",
        "email": "Bautistabarea@gmail.com",
        "fecha": "4/5/2022 21:54:05",
        "mensaje": "hola",
        "id": 1000
    },
    {
        "_id": "62732a5a7b2d867ef8bf85bd",
        "email": "AgustinBarbaglia@gmail.com",
        "fecha": "4/5/2022 21:18:18",
        "mensaje": "yo tambien",
        "id": 1001
    },
    {
        "_id": "62733072e3678d32f2b09c1b",
        "id": 1003,
        "email": "AgustinBarbaglia@gmail.com",
        "fecha": "4/5/2022 21:18:18",
        "mensaje": "yo tambien 2"
    }
]


http://localhost:8080/api/mensajes/normalizado

{
    "entities": {
        "autor": {
            "1": {
                "_id": "62732efd915cc3c3a88093ce",
                "id": 1,
                "email": "Bautistabarea@gmail.com",
                "nombre": "Bautista",
                "apellido": "Barea"
            },
            "2": {
                "_id": "62732f2d915cc3c3a88093cf",
                "id": 2,
                "email": "AgustinBarbaglia@gmail.com",
                "nombre": "Agustin",
                "apellido": "Barbaglia"
            },
            "3": {
                "_id": "62732f5e915cc3c3a88093d0",
                "id": 3,
                "email": "Fabriciomurcia@uol.com.ar",
                "nombre": "Fabricio",
                "apellido": "Murcia"
            }
        },
        "mensajes": {
            "1000": {
                "_id": "627321168b64534bc193f533",
                "email": "Bautistabarea@gmail.com",
                "fecha": "4/5/2022 21:54:05",
                "mensaje": "hola",
                "id": 1000
            },
            "1001": {
                "_id": "62732a5a7b2d867ef8bf85bd",
                "email": "AgustinBarbaglia@gmail.com",
                "fecha": "4/5/2022 21:18:18",
                "mensaje": "yo tambien",
                "id": 1001
            },
            "1003": {
                "_id": "62733072e3678d32f2b09c1b",
                "id": 1003,
                "email": "AgustinBarbaglia@gmail.com",
                "fecha": "4/5/2022 21:18:18",
                "mensaje": "yo tambien 2"
            }
        },
        "chat": {
            "1": {
                "id": 1,
                "autor": [
                    1,
                    2,
                    3
                ],
                "mensajes": [
                    1000,
                    1001,
                    1003
                ]
            }
        }
    },
    "result": 1
}