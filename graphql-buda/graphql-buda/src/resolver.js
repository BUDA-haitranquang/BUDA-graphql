const { argsToArgsConfig } = require("graphql/type/definition");
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
module.exports.resolvers = {
    Query: {
        ingredient: async (_, args, { dataSources }) => {
            return dataSources.buda.ingredient(args.ingredientID);
        },
        ingredientsByName: async (_, args, { dataSources }) => {
            return dataSources.buda.ingredientsByName(args.ingredientName);
        },
        product: async (_, args, { dataSources }) => {
            return dataSources.buda.product(args.productID);
        },
        productsByUserID: async (_, args, { dataSources }) => {
            return dataSources.buda.productsByUserID(args.userID);
        },
        productsByGroupID: async (_, args, { dataSources }) => {
            return dataSources.buda.productsByGroupID(args.productGroupID);
        },
        buyordersByUserID: async (_, args, { dataSources }) => {
            return dataSources.buda.buyordersByUserID(args.userID);
        },
        buyordersBySupplierID: async (_, args, { dataSources }) => {
            return dataSources.buda.buyordersBySupplierID(args.supplierID);
        },
        sellordersByUserID: async (_, args, { dataSources }) =>{
            return dataSources.buda.sellordersByUserID(args.userID);
        },
        sellordersByCustomerID: async (_, args, { dataSources }) => {
            return dataSources.buda.sellordersByCustomerID(args.customerID);
        },
        customersByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.customersByUser(args.userID);
        },
        customerByPhone: async (_, args, { dataSources })=> {
            return dataSources.buda.customerByPhone(args.phoneNumber);
        },
        discountsByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.discountsByUser(args.userID);
        },
        discount: async (_, args, { dataSources }) => {
            return dataSources.buda.discount(args.discountID);
        },
        suppliersByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.suppliersByUser(args.userID);
        },
        supplierByPhone: async (_, args, { dataSources }) => {
            return dataSources.buda.supplierByPhone(args.phoneNumber);
        },
        userLogin: async (_, args, { dataSources }) => {
            return dataSources.buda.userLogin(args.email, args.password);
        },
        staffLogin: async (_, args, { dataSources }) => {
            return dataSources.buda.staffLogin(args.uuid, args.password);
        }
    },
    Mutation: {
        newProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.newProduct(args.userID, args.productInput);
        },
        newIngredient: async (_, args, { dataSources }) => {
            return dataSources.buda.newIngredient(args.userID, args.ingredientInput);
        },
        newStaff: async (_, args, { dataSources }) => {
            return dataSources.buda.newStaff(args.staffInput);
        },
        newUser: async (_, args, { dataSources }) => {
            return dataSources.buda.newUser(args.userRegister); 
        },
        newBuyOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.newBuyOrder(args.buyOrderInput);
        },
        newSellOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.newSellOrder(args.sellOrderInput);
        },
        newCustomer: async (_, args, { dataSources }) => {
            return dataSources.buda.newCustomer(args.customerInput);
        },
        newDiscount: async (_, args, { dataSources }) => {
            return dataSources.buda.newDiscount(args.discountInput);
        },
        newSupplier: async (_, args, { dataSources }) => {
            return dataSources.buda.newSupplier(args.supplierInput);
        }
        // cleanCache: async (_, __, { dataSources }) => {
        //     return dataSources.buda.cleanCache();
        // }
    }
};