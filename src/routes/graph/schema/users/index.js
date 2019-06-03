import {
    GraphQLList,
    GraphQLInt,
    GraphQLString
} from 'graphql';
import UserType from './typeDef';
import { fetchUsers, createUser } from './resolvers';

const queries = {},
    mutations = {};

queries.users = {
    type: GraphQLList(UserType),
    resolve: fetchUsers
}

export {
    queries,
    mutations
}