const { argsToArgsConfig } = require("graphql/type/definition")
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
module.exports.resolvers = {
    Query: {
        ingredient: async (_, args, { dataSources }) => {
            return dataSources.buda.ingredient(args.ingredientID)
        },
        ingredientsByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.ingredientsByUser(args)
        },
        hiddenIngredients: async (_, args, { dataSources }) => {
            return dataSources.buda.hiddenIngredients(args)
        },
        alertIngredients: async (_, args, { dataSources }) => {
            return dataSources.buda.alertIngredients(args)
        },
        ingredientLeftLog: async (_, args, { dataSources }) => {
            return dataSources.buda.ingredientLeftLog(args.ingredientLeftLogID)
        },
        ingredientLeftLogsByIngredient: async (_, args, { dataSources }) => {
            return dataSources.buda.ingredientLeftLogsByIngredient(args.ingredientID)
        },
        ingredientLeftLogsByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.ingredientLeftLogsByUser(args)
        },
        ingredientLeftLogsByStaff: async (_, args, { dataSources }) => {
            return dataSources.buda.ingredientLeftLogsByStaff(args.staffID)
        },
        product: async (_, args, { dataSources }) => {
            return dataSources.buda.product(args.productID)
        },
        productsByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.productsByUser(args)
        },
        productsByGroup: async (_, args, { dataSources }) => {
            return dataSources.buda.productsByGroup(args.productGroupID)
        },
        hiddenProducts: async (_, args, { dataSources }) => {
            return dataSources.buda.hiddenProducts(args)
        },
        alertProducts: async (_, args, { dataSources }) => {
            return dataSources.buda.alertProducts(args)
        },
        productLeftLog: async (_, args, { dataSources }) => {
            return dataSources.buda.productsLeftLog(args.productLeftLogID)
        },
        productLeftLogsByProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.productLeftLogsByProduct(args.productID)
        },
        productLeftLogsByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.productLeftLogsByUser(args)
        },
        productLeftLogsByStaff: async (_, args, { dataSources }) => {
            return dataSources.buda.productLeftLogsByStaff(args.staffID)
        },
        buyOrdersByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.buyOrdersByUser(args)
        },
        buyOrdersBySupplier: async (_, args, { dataSources }) => {
            return dataSources.buda.buyOrdersBySupplier(args.supplierID)
        },
        buyOrdersLastXDaysByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.buyOrdersLastXDaysByUser(args.X)
        },
        incompletedBuyOrdersByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.incompletedBuyOrdersByUser(args)
        },
        buyOrdersByStatusAndUser: async (_, args, { dataSources }) => {
            return dataSources.buda.buyOrdersByStatusAndUser(args.status)
        },
        sellOrdersByUser: async (_, args, { dataSources }) =>{
            return dataSources.buda.sellOrdersByUser(args)
        },
        sellOrdersByCustomer: async (_, args, { dataSources }) => {
            return dataSources.buda.sellOrdersByCustomer(args.customerID)
        },
        sellOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.sellOrder(args.sellOrderID)
        },
        incompletedSellOrdersByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.incompletedSellOrdesrByUser(args)
        },
        sellOrdersXDaysByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.sellOrdersXDaysByUser(args.X)
        },
        sellOrdersByStatusAndUser: async (_, args, { dataSources }) => {
            return dataSources.buda.sellOrdersByStatusAndUser(args.status)
        },
        customersByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.customersByUser(args)
        },
        membershipType: async (_, args, { dataSources }) => {
            return dataSources.buda.membershipType(args.membershipTypeID)
        },
        membershipTypeByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.membershipTypeByUser(args)
        },
        discountsByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.discountsByUser(args)
        },
        discount: async (_, args, { dataSources }) => {
            return dataSources.buda.discount(args.discountID)
        },
        suppliersByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.suppliersByUser(args)
        },
        supplier: async (_, args, { dataSources }) => {
            return dataSources.buda.supplier(args.supplierID)
        },
        plans: async (_, args, { dataSources }) => {
            return dataSources.buda.plans(args)
        },
        purchaseByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.purchaseByUser(args)
        },
        picture: async (_, args, { dataSources }) => {
            return dataSources.buda.picture(args.pictureID)
        },
        fixedCostsByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.fixedCostsByUser(args)
        },
        hiddenFixedCosts: async (_, args, { dataSources }) => {
            return dataSources.buda.hiddenFixedCosts(args)
        },
        otherCostsByUser: async (_, args, { dataSources}) => {
            return dataSources.buda.otherCostsByUser(args)
        },
        incompletedOtherCostsByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.incompletedOtherCostsByUser(args)
        },
        otherCostsXDaysByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.otherCostsXDaysByUser(args.X)
        },
        hiddenOtherCosts: async (_, args, { dataSources }) => {
            return dataSources.buda.hiddenOtherCosts(args)
        },
        fixedCostBillsByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.fixedCostBillsByUser(args)
        },
        fixedCostBillsByFixedCost: async (_, args, { dataSources }) => {
            return dataSources.buda.fixedCostBillsByFixedCost(args.fixedCostID)
        },
        fixedCostBillsXDaysByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.fixedCostBillsXDaysByUser(args.X)
        },
        incompletedFixedCostBillsByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.incompletedFixedCostBillsByUser(args)
        },
        staffsByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.staffsByUser(args)
        },
        // salaryLog: async (_, args, { dataSources }) => {
        //     return dataSources.salaryLog(args.salaryLogID)
        // },
        salaryLogsByUser: async (_, args, { dataSources }) =>{
            return dataSources.salaryLogsByUser(args)
        },
        salaryLogsByStaff: async (_, args, { dataSources }) => {
            return dataSources.salaryLogsByStaff(args.staffID)
        },
        staffNotesByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.staffNotesByUser(args)
        },
        staffNotesByStaff: async (_, args, { dataSources }) => {
            return dataSources.buda.staffNotesByStaff(args.staffID)
        },
        unseenStaffNotesByStaff: async (_, args, { dataSources }) => {
            return dataSources.buda.unseenStaffNotesByStaff(args.staffID)
        },
        staffNote: async (_, args, { dataSources }) =>{
            return dataSources.buda.staffNote(args.staffNoteID)
        },
        notiByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.notiByUser(args)
        },
        pendingNotiByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.pendingNotiByUser(args)
        },
        warrantyOrdersByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.warrantyOrdersByUser(args)
        },
        warrantyOrdersByCustomer: async (_, args, { dataSources }) => {
            return dataSources.buda.warrantyOrdersByCustomer(args.customerID)
        },
        warrantyOrdersByProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.warrantyOrdersByProduct(args.productID)
        },
        buyOrderItemsByBuyOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.buyOrderItemsByBuyOrder(args.buyOrderID)
        },
        buyOrderItemsByIngredient: async (_, args, { dataSources }) => {
            return dataSources.buda.buyOrderItemsByIngredient(args.ingredientID)
        },
        user: async (_, args, { dataSources }) => {
            return dataSources.buda.user(args.userID)
        },
        currentUser: async (_, args, { dataSources }) => {
            return dataSources.buda.currentUser(args)
        },
        userByUUID: async (_, args, { dataSources }) => {
            return dataSources.buda.userByUUID(args.UUID)
        },
        componentsByProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.componentsByProduct(args.productID)
        },
        productContainIngredient: async (_, args, { dataSources }) => {
            return dataSources.buda.productContainIngredient(args.ingredientID)
        },
        sellOrderItemsBySellOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.sellOrderItemsBySellOrder(args.sellOrderID)
        },
        sellOrderItemsByProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.sellOrderItemsByProduct(args.productID)
        },
        productGroupsByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.productGroupsByUser(args)
        },
        productsByProductGroup: async (_, args, { dataSources }) => {
            return dataSources.buda.productsByProductGroup(args.productGroupID)
        },
        totalSpendAgeGroupByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.totalSpendAgeGroupByUser(args)
        },
        totalSpendAgeGroupThisMonthByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.totalSpendAgeGroupThisMonthByUser(args)
        },
        totalSpendGenderByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.totalSpendGenderByUser(args)
        },
        totalSpendGenderThisMonthByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.totalSpendGenderThisMonthByUser(args)
        },
        totalRevenueProductByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.totalRevenueProductByUser(args)
        },
        revenueWeekly: async (_, args, { dataSources }) => {
            return dataSources.buda.revenueWeekly(args)
        },
        revenueMonthly: async (_, args, { dataSources }) => {
            return dataSources.buda.revenueMonthly(args)
        },
        revenueWeekdays: async (_, args, { dataSources }) => {
            return dataSources.buda.revenueWeekdays(args)
        },
        revenueDaysThisMonth: async (_, args, { dataSources }) => {
            return dataSources.buda.revenueDaysThisMonth(args)
        },
        otherCostExpenseWeekly: async (_, args, { dataSources }) => {
            return dataSources.buda.otherCostExpenseWeekly(args)
        },
        otherCostExpenseThisMonth: async (_, args, { dataSources }) => {
            return dataSources.buda.otherCostExpenseThisMonth(args)
        },
        otherCostExpenseMonthly: async (_, args, { dataSources }) => {
            return dataSources.buda.otherCostExpenseMonthly(args)
        },
        fixedCostBillExpenseWeekly: async (_, args, { dataSources }) => {
            return dataSources.buda.fixedCostBillExpenseWeekly(args)
        },
        fixedCostBillExpenseThisMonth: async (_, args, { dataSources }) => {
            return dataSources.buda.fixedCostBillExpenseThisMonth(args)
        },
        fixedCostBillExpenseMonthly: async (_, args, { dataSources }) =>{
            return dataSources.buda.fixedCostBillExpenseMonthly(args)
        },
        salaryLogExpenseThisMonth: async (_, args, { dataSources }) => {
            return dataSources.buda.salaryLogExpenseThisMonth(args)
        },
        salaryLogExpenseMonthly: async (_, args, { dataSources }) => {
            return dataSources.buda.salaryLogExpenseMonthly(args)
        },
        buyOrderExpenseWeekly: async (_, args, { dataSources }) => {
            return dataSources.buda.buyOrderExpenseWeekly(args)
        },
        buyOrderExpenseMonthly: async (_, args, { dataSources }) => {
            return dataSources.buda.buyOrderExpenseMonthly(args)
        },
        buyOrderExpenseThisMonth: async (_, args, { dataSources }) => {
            return dataSources.buda.buyOrderExpenseThisMonth(args)
        }
    },
    Mutation: {
        newProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.newProduct(args.productInput)
        },
        newIngredient: async (_, args, { dataSources }) => {
            return dataSources.buda.newIngredient(args.ingredientInput)
        },
        newStaff: async (_, args, { dataSources }) => {
            return dataSources.buda.newStaff(args.staffInput)
        },
        newUser: async (_, args, { dataSources }) => {
            return dataSources.buda.newUser(args.userRegister) 
        },
        newBuyOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.newBuyOrder(args.buyOrderInput)
        },
        newSellOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.newSellOrder(args.sellOrderInput)
        },
        newCustomer: async (_, args, { dataSources }) => {
            return dataSources.buda.newCustomer(args.customerInput)
        },
        newMembershipType: async (_, args, { dataSources }) => {
            return dataSources.buda.newMembershipType(args.membershipTypeInput)
        },
        newDiscount: async (_, args, { dataSources }) => {
            return dataSources.buda.newDiscount(args.discountInput)
        },
        newSupplier: async (_, args, { dataSources }) => {
            return dataSources.buda.newSupplier(args.supplierInput)
        },
        newPlan: async (_, args, { dataSources }) => {
            return dataSources.buda.newPlan(args.planInput)
        },
        newPurchase: async (_, args, { dataSources }) => {
            return dataSources.buda.newPurchase(args.purchaseInput)
        },
        newPicture: async (_, args, { dataSources }) => {
            return dataSources.buda.newPicture(args.pictureInput)
        },
        newFixedCost: async (_, args, { dataSources }) => {
            return dataSources.buda.newFixedCost(args.fixedCostInput)
        },
        newOtherCost: async (_, args, { dataSources }) => {
            return dataSources.buda.newOtherCost(args.otherCostInput)
        },
        newFixedCostBill: async (_, args, { dataSources }) => {
            return dataSources.buda.newFixedCostBill(args.fixedCostBillInput)
        },
        newSalaryLog: async (_, args, { dataSources }) => {
            return dataSources.buda.newSalaryLog(args.salaryLogInput)
        },
        newStaffNote: async (_, args, { dataSources }) => {
            return dataSources.buda.newStaffNote(args.staffNoteInput)
        },
        newSellOrderItem: async (_, args, { dataSources }) => {
            return dataSources.buda.newSellOrderItem(args.sellOrderItemInput)
        },
        newProductGroup: async (_, args, { dataSources }) => {
            return dataSources.buda.newProductGroup(args.productGroupInput)
        },
        newWarrantyOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.newWarrantyOrder(args.warrantyOrderInput)
        },
        newAccessToken: async (_, args, { dataSources }) => {
            return dataSources.buda.newAccessToken(args.jwtSimple)
        },
        confirmRegister: async (_, args, { dataSources }) => {
            return dataSources.buda.confirmRegister(args.token)
        },
        userLogin: async (_, args, { dataSources }) => {
            return dataSources.buda.userLogin(args.email, args.password)
        },
        staffLogin: async (_, args, { dataSources }) => {
            return dataSources.buda.staffLogin(args.uuid, args.password)
        },
        loginGoogle: async (_, args, { dataSources }) => {
            return dataSources.buda.loginGoogle(args.jwtSimple)
        },
        // deleteProduct: async (_, args, { dataSources }) => {
        //     return dataSources.buda.deleteProduct(args.productID)
        // },
        deleteSellOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteSellOrder(args.sellOrderID)
        },
        deletePlan: async (_, args, { dataSources }) => {
            return dataSources.buda.deletePlan(args.planID)
        },
        deletePicture: async (_, args, { dataSources }) => {
            return dataSources.buda.deletePicture(args.pictureID)
        },
        deleteFixedCost: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteFixedCost(args.fixedCostID)
        },
        deleteBuyOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteBuyOrder(args.buyOrderID)
        },
        deleteStaff: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteStaff(args.staffID)
        },
        deleteSalaryLog: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteSalaryLog(args.salaryLogID)
        },
        deleteStaffNote: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteStaffNote(args.staffNoteID)
        },
        deleteBuyOrderItem: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteBuyOrderItem(args.buyOrderItemID)
        },
        deleteUser: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteUser(args.userID)
        },
        deleteSellOrderItem: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteSellOrderItem(args.sellOrderItemID)
        },
        deleteProductGroup: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteProductGroup(args.productGroupID)
        },
        updatePicture: async (_, args, { dataSources }) => {
            return dataSources.buda.updatePicture(args.picture)
        },
        updateSellOrder: async (_,args, { dataSources }) => {
            return dataSources.buda.updateSellOrder(args.sellOrder)
        },
        updateFixedCost: async (_, args, { dataSources }) => {
            return dataSources.buda.updateFixedCost(args.fixedCost)
        },
        updateStaff: async (_, args, { dataSources }) => {
            return dataSources.buda.updateStaff(args.staffID, args.staff)
        },
        updateStaffNote: async (_, args, { dataSources }) => {
            return dataSources.buda.updateStaffNote(args.staffNoteID, args.staffNote)
        },
        updateCustomer: async (_, args, { dataSources }) => {
            return dataSources.buda.updateCustomer(args.customer)
        },
        updateProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.updateProduct(args.productID, args.product)
        },
        updateUser: async (_, args, { dataSources }) => {
            return dataSources.buda.updateUser(args.user)
        },
        updateUserPassword: async (_, args, { dataSources }) => {
            return dataSources.buda.updateUserPassword(args.updateUserPassword)
        },
        forgotPassword: async (_, args, { dataSources }) => {
            return dataSources.buda.forgotPassword(args.email)
        },
        updateForgotPassword: async (_, args, { dataSources }) => {
            return dataSources.buda.forgotPassword(args.token, args.updateUserPassword)
        },
        updateUserEmail: async (_, args, { dataSources }) => {
            return dataSources.buda.updateUserEmail(args.updateUserEmail)
        },
        confirmUpdateEmail: async (_, args, { dataSources }) => {
            return dataSources.buda.confirmUpdateEmail(args.token)
        },
        editIngredientQuantity: async (_, args, { dataSources }) => {
            return dataSources.buda.editIngredientQuantity(args.ingredientID, args.quantityLog)
        },
        editIngredient: async (_, args, { dataSources }) => {
            return dataSources.buda.editIngredient(args.ingredientID, args.ingredient)
        },
        editProductQuantity: async (_, args, { dataSources }) => {
            return dataSources.buda.editProductQuantity(args.productID, args.quantityLog)
        },
        editProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.editProduct(args.productID, args.product)
        },
        updateSupplier: async (_, args, { dataSources }) => {
            return dataSources.buda.updateSupplier(args.supplier)
        },
        updateSellOrderItem: async (_, args, { dataSources }) => {
            return dataSources.buda.updateSellOrderItem(args.sellOrderItemID, args.sellOrderItem)
        },
        hideProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.hideProduct(args.productID)
        },
        hideIngredient: async (_, args, { dataSources }) => {
            return dataSources.buda.hideIngredient(args.ingredientID)
        },
        hideCustomer: async (_, args, { dataSources }) => {
            return dataSources.buda.hideCustomer(args.customerID)
        },
        hideFixedCost: async (_, args, { dataSources }) => {
            return dataSources.buda.hideFixedCost(args.fixedCostID)
        },
        hideSupplier: async (_, args, { dataSources }) => {
            return dataSources.buda.hideSupplier(args.supplierID)
        },
        hideOtherCost: async (_, args, { dataSources }) => {
            return dataSources.buda.hideOtherCost(args.otherCostID)
        },
        addIngredientToProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.addIngredientToProduct(args.productID, args.ingredientID)
        },
        removeIngredientFromProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.removeIngredientFromProduct(args.productID, args.ingredientID)
        },
        addProductToProductGroup: async (_, args, { dataSources }) => {
            return dataSources.buda.addProductToProductGroup(args.productGroupID, args.productID)
        },
        removeProductFromProductGroup: async (_, args, { dataSources }) => {
            return dataSources.buda.removeProductFromProductGroup(args.productGroupID, args.productID)
        }
        // cleanCache: async (_, __, { dataSources }) => {
        //     return dataSources.buda.cleanCache()
        // }
    }
}