const { buildSchema } = require('graphql');

// Define your GraphQL schema
const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

module.exports = schema;
