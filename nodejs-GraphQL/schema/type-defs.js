//gql is allow to write like pure graphql code
const { gql } = require("apollo-server");

const typeDefs = gql`
    type Product {
        id: ID!
        name: String!
        category: CategoryType!
        price: Int!
        store_name: String!
        product_count: Int!
        description: String
        store: [Store]
    }
    type Store {
        store_name: String!
        product_count: Int!
    }
    type Query {
        products: [Product!]!
        store(id: ID!): Product
    }
    
    input CreateProductInput {
        name: String!
        category: CategoryType! = ELECTRONIC
        price: Int!
    }
    
    input UpdateProductNameInput {
        id: ID!
        newName: String!
    }
    
    type Mutation {
        createProduct(input: CreateProductInput!): Product
        updateProductName(input: UpdateProductNameInput!): Product
        deletedProduct(id: ID!): Product
    }
    enum CategoryType {
        ELECTRONIC
        DANGEROUSGOODS
    }
`;

module.exports = { typeDefs };
