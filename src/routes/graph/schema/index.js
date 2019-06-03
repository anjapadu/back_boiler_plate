import {
    GraphQLSchema,
    GraphQLObjectType
} from 'graphql';

import {
    queries as usersQueries,
    mutations as userMutations
} from './users';

// console.log(customerQueries)
const query = new GraphQLObjectType({
    name: 'query',
    description: '...',
    fields: () => ({
        ...usersQueries,
    })
})

const mutation = new GraphQLObjectType({
    name: 'mutations',
    description: '...',
    fields: () => ({
        ...userMutations,
    })
})

const schema = new GraphQLSchema({
    query,
    mutation
})

export default schema;