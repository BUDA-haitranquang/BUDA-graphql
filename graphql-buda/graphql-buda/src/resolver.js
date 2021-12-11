const { argsToArgsConfig } = require("graphql/type/definition");
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
module.exports.resolvers = {
    Query: {
        ingredient: async (_, args, { dataSources }) => {
            return dataSources.buda.ingredient(args.ingredientID);
        },
        // ingredientsByName: async (_, args, { dataSources }) => {
        //     return dataSources.buda.ingredientsByName(args.ingredientName);
        // },
        ingredientsByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.ingredientsByUser(args.userID);
        },
        hiddenIngredients: async (_, args, { dataSources }) => {
            return dataSources.buda.hiddenIngredients(args.userID);
        },
        product: async (_, args, { dataSources }) => {
            return dataSources.buda.product(args.productID);
        },
        productsByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.productsByUser(args.userID);
        },
        productsByGroup: async (_, args, { dataSources }) => {
            return dataSources.buda.productsByGroup(args.productGroupID);
        },
        hiddenProducts: async (_, args, { dataSources }) => {
            return dataSources.buda.hiddenProducts(args.userID);
        },
        buyOrdersByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.buyOrdersByUser(args.userID);
        },
        buyOrdersBySupplier: async (_, args, { dataSources }) => {
            return dataSources.buda.buyOrdersBySupplier(args.supplierID);
        },
        buyOrdersLastXDaysByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.buyOrdersLastXDaysByUser(args.X);
        },
        incompletedBuyOrdersByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.incompletedBuyOrdersByUser(args);
        },
        buyOrdersByStatusAndUser: async (_, args, { dataSources }) => {
            return dataSources.buda.buyOrdersByStatusAndUser(args.status);
        },
        buyOrderExpenseWeekly: async (_, args, { dataSources }) => {
            return dataSources.buda.buyOrderExpenseWeekly(args);
        },
        buyOrderExpenseMonthly: async (_, args, { dataSources }) => {
            return dataSources.buda.buyOrderExpenseMonthly(args);
        },
        buyOrderExpenseThisMonth: async (_, args, { dataSources }) => {
            return dataSources.buda.buyOrderExpenseThisMonth(args);
        },
        sellOrdersByUser: async (_, args, { dataSources }) =>{
            return dataSources.buda.sellOrdersByUser(args.userID);
        },
        sellOrdersByCustomer: async (_, args, { dataSources }) => {
            return dataSources.buda.sellOrdersByCustomer(args.customerID);
        },
        sellOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.sellOrder(args.sellOrderID);
        },
        incompletedSellOrdersByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.incompletedSellOrdesrByUser(args);
        },
        sellOrdersXDaysByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.sellOrdersXDaysByUser(args.X);
        },
        sellOrdersByStatusAndUser: async (_, args, { dataSources }) => {
            return dataSources.buda.sellOrdersByStatusAndUser(args.status);
        },
        customersByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.customersByUser(args.userID);
        },
        // customerByPhone: async (_, args, { dataSources })=> {
        //     return dataSources.buda.customerByPhone(args.phoneNumber);
        // },
        discountsByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.discountsByUser(args.userID);
        },
        discount: async (_, args, { dataSources }) => {
            return dataSources.buda.discount(args.discountID);
        },
        suppliersByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.suppliersByUser(args.userID);
        },
        // supplierByPhone: async (_, args, { dataSources }) => {
        //     return dataSources.buda.supplierByPhone(args.phoneNumber);
        // },
        plans: async (_, args, { dataSources }) => {
            return dataSources.buda.plans(args);
        },
        plan: async (_, args, { dataSources }) => {
            return dataSources.buda.plan(args.planID);
        },
        picture: async (_, args, { dataSources }) => {
            return dataSources.buda.picture(args.pictureID);
        },
        fixedCostsByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.fixedCostsByUser(args.userID);
        },
        otherCostsByUser: async (_, args, { dataSources}) => {
            return dataSources.buda.otherCostsByUser(args.userID);
        },
        incompletedOtherCostsByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.incompletedOtherCostsByUser(args.userID);
        },
        otherCostsXDaysByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.otherCostsXDaysByUser(args.X);
        },
        fixedCostBillsByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.fixedCostBillsByUser(args);
        },
        fixedCostBillsByFixedCost: async (_, args, { dataSources }) => {
            return dataSources.buda.fixedCostBillsByFixedCost(args.fixedCostID);
        },
        fixedCostBillsXDaysByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.fixedCostBillsXDaysByUser(args.X);
        },
        incompletedFixedCostBillsByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.incompletedFixedCostBillsByUser(args);
        },
        staffsByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.staffsByUser(args);
        },
        // salaryLog: async (_, args, { dataSources }) => {
        //     return dataSources.salaryLog(args.salaryLogID);
        // },
        // salaryLogsByUser: async (_, args, { dataSources }) =>{
        //     return dataSources.salaryLogsByUser(args);
        // },
        salaryLogsByStaff: async (_, args, { dataSources }) => {
            return dataSources.salaryLogsByStaff(args.staffID);
        },
        salaryLogExpenseThisMonth: async (_, args, { dataSources }) => {
            return dataSources.buda.salaryLogExpenseThisMonth(args);
        },
        salaryLogExpenseMonthly: async (_, args, { dataSources }) => {
            return dataSources.buda.salaryLogExpenseMonthly(args);
        },
        // staffNotesByUser: async (_, args, { dataSources }) => {
        //     return dataSources.buda.staffNotesByUser(args);
        // },
        staffNotesByStaff: async (_, args, { dataSources }) => {
            return dataSources.buda.staffNotesByStaff(args.staffID);
        },
        unseenStaffNotesByStaff: async (_, args, { dataSources }) => {
            return dataSources.buda.unseenStaffNotesByStaff(args.staffID);
        },
        staffNote: async (_, args, { dataSources }) =>{
            return dataSources.buda.staffNote(args.staffNoteID);
        },
        totalSpendAgeGroupByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.totalSpendAgeGroupByUser(args);
        },
        totalSpendGenderByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.totalSpendGenderByUser(args);
        },
        totalRevenueProductByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.totalRevenueProductByUser(args);
        },
        revenueWeekly: async (_, args, { dataSources }) => {
            return dataSources.buda.revenueWeekly(args);
        },
        revenueMonthly: async (_, args, { dataSources }) => {
            return dataSources.buda.revenueMonthly(args);
        },
        revenueWeekdays: async (_, args, { dataSources }) => {
            return dataSources.buda.revenueWeekdays(args);
        },
        revenueDaysThisMonth: async (_, args, { dataSources }) => {
            return dataSources.buda.revenueDaysThisMonth(args);
        }
    },
    Mutation: {
        newProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.newProduct(args.productInput);
        },
        newIngredient: async (_, args, { dataSources }) => {
            return dataSources.buda.newIngredient(args.ingredientInput);
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
        },
        newPlan: async (_, args, { dataSources }) => {
            return dataSources.buda.newPlan(args.planInput);
        },
        newPicture: async (_, args, { dataSources }) => {
            return dataSources.buda.newPicture(args.pictureInput);
        },
        newFixedCost: async (_, args, { dataSources }) => {
            return dataSources.buda.newFixedCost(args.fixedCostInput);
        },
        newOtherCost: async (_, args, { dataSources }) => {
            return dataSources.buda.newOtherCost(args.otherCostInput);
        },
        newFixedCostBill: async (_, args, { dataSources }) => {
            return dataSources.buda.newFixedCostBill(args.fixedCostBillInput);
        },
        // newSalaryLog: async (_, args, { dataSources }) => {
        //     return dataSources.buda.newSalaryLog(args.salaryLogInput);
        // },
        newStaffNote: async (_, args, { dataSources }) => {
            return dataSources.buda.newStaffNote(args.staffNoteInput);
        },
        userLogin: async (_, args, { dataSources }) => {
            return dataSources.buda.userLogin(args.email, args.password);
        },
        staffLogin: async (_, args, { dataSources }) => {
            return dataSources.buda.staffLogin(args.uuid, args.password);
        },
        // deleteProduct: async (_, args, { dataSources }) => {
        //     return dataSources.buda.deleteProduct(args.productID);
        // },
        deleteSellOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteSellOrder(args.sellOrderID);
        },
        deletePlan: async (_, args, { dataSources }) => {
            return dataSources.buda.deletePlan(args.planID);
        },
        deletePicture: async (_, args, { dataSources }) => {
            return dataSources.buda.deletePicture(args.pictureID);
        },
        deleteFixedCost: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteFixedCost(args.fixedCostID);
        },
        deleteBuyOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteBuyOrder(args.buyOrderID);
        },
        deleteStaff: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteStaff(args.staffID);
        },
        deleteSalaryLog: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteSalaryLog(args.salaryLogID);
        },
        deleteStaffNote: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteStaffNote(args.staffNoteID);
        },
        updatePicture: async (_, args, { dataSources }) => {
            return dataSources.buda.updatePicture(args.picture);
        },
        updateSellOrder: async (_,args, { dataSources }) => {
            return dataSources.buda.updateSellOrder(args.sellOrder);
        },
        updateFixedCost: async (_, args, { dataSources }) => {
            return dataSources.buda.updateFixedCost(args.fixedCost);
        },
        // updateStaff: async (_, args, { dataSources }) => {
        //     return dataSources.buda.updateStaff(args.staffID, args.name, args.address, args.phoneNumber, args.staffPosition, args.staffUUID, args.password, args.salary, args.account);
        // },
        updateStaffNote: async (_, args, { dataSources }) => {
            return dataSources.buda.updateStaffNote(args.staffNote);
        },
        hideProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.hideProduct(args.productID);
        },
        hideIngredient: async (_, args, { dataSources }) => {
            return dataSources.buda.hideIngredient(args.ingredientID);
        },
        editProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.editProduct(args.productID, args.product);
        }
        // cleanCache: async (_, __, { dataSources }) => {
        //     return dataSources.buda.cleanCache();
        // }
    }
};