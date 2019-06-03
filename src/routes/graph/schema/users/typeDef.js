import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from 'graphql';

export default new GraphQLObjectType({
    name: 'users',
    description: 'users',
    fields: function () {
        return {
            userId: {
                type: GraphQLString
            }
        }
    }
});