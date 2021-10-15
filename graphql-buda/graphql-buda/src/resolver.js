const { argsToArgsConfig } = require("graphql/type/definition");
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
module.exports.resolvers = {
    Query: {
        ingredient: async (_, args, { dataSources }) => {
            return dataSources.buda.ingredient(args.ingredientID);
        },
        ingredient_name: async (_, args, { dataSources }) => {
            return dataSources.buda.ingredient_name(args.ingredientName);
        },
   
        product_id: async (_, args, { dataSources }) => {
            return dataSources.buda.product_id(args.productID);
        },
        product_user: async (_, args, { dataSources }) => {
            return dataSources.buda.product_user(args.userID);
        },
        product_group: async (_, args, { dataSources }) => {
            return dataSources.buda.product_group(args.productGroupID);
        }
    },
    Mutation: {
        newproduct: async (_, args, { dataSources }) => {
            return dataSources.buda.newproduct(args.userID, args.productID);
        },
        newingredient: async (_, args, { dataSources }) => {
            return dataSources.buda.newingredient(args.newingredient);
        },
        newstaff: async (_, args, { dataSources }) => {
            return dataSources.buda.newstaff(args.newstaff);
        },
        newuser: async (_, args, { dataSources }) => {
            return dataSources.buda.newuser(args.userRegister); 
        },
        userlogin: async (_, args, { dataSources }) => {
            return dataSources.buda.userlogin(args.email, args.password);
        },
        stafflogin: async (_, args, { dataSources }) => {
            return dataSources.buda.userlogin(args.uuid, args.password);
        }
        // cleanCache: async (_, __, { dataSources }) => {
        //     return dataSources.buda.cleanCache();
        // }
    }
};