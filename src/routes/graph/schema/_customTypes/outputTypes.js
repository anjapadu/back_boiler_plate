import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
    GraphQLBoolean
} from 'graphql';

/**
 * Response object that adds total count of rows
 */
export const findCountType = (type) => new GraphQLObjectType({
    name: `findCount_${type}`,
    fields: () => ({
        data: {
            type: GraphQLList(type)
        },
        count: {
            type: GraphQLInt
        }
    })
})


export const updateResponseType = new GraphQLObjectType({
    name: 'updateResponse',
    description: 'updateResponse',
    fields: function () {
        return {
            updated: {
                type: GraphQLBoolean
            },
            message: {
                type: GraphQLString
            }
        }
    }
})