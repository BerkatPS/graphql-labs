
const UserList = [
    {
        id: 1,
        name: "Phone",
        category: "ELECTRONIC",
        price: 15,
        store_name: "Netdroid",
        product_count: 24,
        description: "This is a Legit Phone",
        store: [
            {
                store_name: "Netdroid",
                product_count: 24,
            }
        ]
    },
    {
        id: 2,
        name: "Laptop",
        category: "ELECTRONIC",
        price: 2000,
        store_name: "Netdroid",
        product_count: 14,
        description: "This is a Legit Laptop",
        store: [
            {
                store_name: "Netdroid",
                product_count: 14,
            }
        ]
    },
    {
        id: 3,
        name: "Charger Phone",
        category: "ELECTRONIC",
        price: 7,
        store_name: "Netdroid",
        product_count: 54,
        description: "This is a Legit Charger",
        store: [
            {
                id: 1,
                store_name: "Netdroid",
                product_count: 54,
            }
        ]

    },
    {
        id: 4,
        name: "lighter",
        category: "DANGEROUSGOODS",
        price: 1000,
        store_name: "Netflify",
        product_count: 30,
        description: "This is a High Quality Lighter",
        store: [
            {
                store_name: "Netlify",
                product_count: 30,
            }
        ]
    },
    {
        id: 5,
        name: "Cigarette",
        category: "DANGEROUSGOODS",
        price: 15,
        store_name: "Netflify",
        product_count: 23,
        description: "This is a High Quality Cigarette",
        store: [
            {
                store_name: "Netlify",
                product_count: 23,
            }
        ]
    },
]


module.exports = { UserList }