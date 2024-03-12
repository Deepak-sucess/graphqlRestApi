const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const resolver = require('./resolver');

const app = express();

// Create a GraphQL middleware
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true, // Enable GraphiQL GUI for testing
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
