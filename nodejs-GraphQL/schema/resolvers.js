const { UserList } = require("../fake-data")
const { _ } = require("lodash")


const resolvers = {
    Query: {
        products: () => {
            return UserList;
        },
        store: (_, { id }) => {
            const store = UserList.find(product => product.id === id);
            if (!store) {
                throw new Error(`Store with ID ${id} not found`);
            }
            return store;
        }
    },
    Mutation: {
        createProduct: (_, { input }) => {
            const newProduct = {
                id: String(UserList.length + 1),
                ...input
            };
            UserList.push(newProduct);
            console.log(newProduct)
            return newProduct;
        },
        updateProductName: (_, { input }) => {
            const {id, newName} = input;
            const product = UserList.find(product => product.id === Number(id));
            if (!product) {
                throw new Error(`Product with ID ${id} not found`);
            }
            product.name = newName;
            return product;
        },

        deletedProduct: (_, { id }) => {
            const index = UserList.findIndex(product => product.id === Number(id))
            if (index === -1){
                throw new Error(`Product With ID ${id} not Found`)
            }
            const deleteProduct = UserList.splice(index, 1)[0];
            console.log(deleteProduct)

            return deleteProduct;
        }
    }
};


module.exports = { resolvers }