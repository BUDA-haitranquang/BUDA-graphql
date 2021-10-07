const { argsToArgsConfig } = require("graphql/type/definition");

module.exports.resolvers = {
    Query: {
        findIngredientByIngredientID: async (_, args, { dataSources }) => {
            return dataSources.buda.findIngredientByIngredientID(args.ingredientID);
        },
        findIngredientByName: async (_, args, { dataSources }) => {
            return dataSources.buda.findIngredientByName(args.ingredientName);
        },
   
        findProductByProductID: async (_, args, { dataSources }) => {
            return dataSources.buda.findProductByProductID(args.productID);
        },
        findAllProductByUserID: async (_, args, { dataSources }) => {
            return dataSources.buda.findAllProductByUserID(args.userID);
        },
        findAllProductByProductGroupID: async (_, args, { dataSources }) => {
            return dataSources.buda.findAllProductByProductGroupID(args.productGroupID);
        }
    },
    Mutation: {
        registerNewProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.registerNewProduct(args.userID, args.productID);
        },
        createNewIngredient: async (_, args, { dataSources }) => {
            return dataSources.buda.createNewIngredient(args.newingredient);
        },
        // cleanCache: async (_, __, { dataSources }) => {
        //     return dataSources.buda.cleanCache();
        // }
    }
};