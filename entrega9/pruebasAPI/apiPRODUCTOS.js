http://localhost:8080/api/productos/mostrarCincoAleatorios

RESPONSE
[
    {
        "id": 0,
        "title": "Lucious",
        "price": "847.89",
        "thumbnail": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1042.jpg"
    },
    {
        "id": 1,
        "title": "Wilfredo",
        "price": "879.05",
        "thumbnail": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1149.jpg"
    },
    {
        "id": 2,
        "title": "Jane",
        "price": "155.07",
        "thumbnail": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1129.jpg"
    },
    {
        "id": 3,
        "title": "Hulda",
        "price": "877.82",
        "thumbnail": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/861.jpg"
    },
    {
        "id": 4,
        "title": "Daphney",
        "price": "586.10",
        "thumbnail": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/519.jpg"
    }
]



http://localhost:8080/api/productos/agregarCincoAleatorios
no devuelve nada , solo agrega ( lo que agrega se puede observar con la siguiente api, como estaba vacia la base, solo hay 5)

http://localhost:8080/api/productos/mostrarTodos
[
    {
        "_id": "627332705c0a5aca59a230df",
        "id": 0,
        "title": "Gabriel",
        "price": "370.76",
        "thumbnail": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1126.jpg"
    },
    {
        "_id": "627332705c0a5aca59a230e0",
        "id": 1,
        "title": "Philip",
        "price": "374.29",
        "thumbnail": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/75.jpg"
    },
    {
        "_id": "627332705c0a5aca59a230e1",
        "id": 2,
        "title": "Omer",
        "price": "281.42",
        "thumbnail": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/729.jpg"
    },
    {
        "_id": "627332705c0a5aca59a230e2",
        "id": 3,
        "title": "Victoria",
        "price": "977.41",
        "thumbnail": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1168.jpg"
    },
    {
        "_id": "627332705c0a5aca59a230e3",
        "id": 4,
        "title": "Terence",
        "price": "782.88",
        "thumbnail": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1077.jpg"
    }
]