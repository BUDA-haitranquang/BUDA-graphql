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
            return dataSources.buda.productLeftLog(args.productLeftLogID)
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
        productComboByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.productComboByUser(args)
        },
        productComboIncludeProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.productComboIncludeProduct(args.productID)
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
        buyOrdersByTextID: async (_, args, { dataSources }) => {
            return dataSources.buda.buyOrdersByTextID(args.textID)
        },
        buyOrderItemsByBuyOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.buyOrderItemsByBuyOrder(args.buyOrderID)
        },
        buyOrderItemsByIngredient: async (_, args, { dataSources }) => {
            return dataSources.buda.buyOrderItemsByIngredient(args.ingredientID)
        },
        paySlipByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.paySlipByUser(args)
        },
        paySlip: async (_, args, { dataSources }) => {
            return dataSources.buda.paySlip(args.paySlipID)
        },
        receiptByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.receiptByUser(args)
        },
        receipt: async (_, args, { dataSources }) => {
            return dataSources.buda.receipt(args.receiptID)
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
        sellOrdersByTextID: async (_, args, { dataSources }) => {
            return dataSources.buda.sellOrdersByTextID(args.textID)
        },
        sellOrderItemsBySellOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.sellOrderItemsBySellOrder(args.sellOrderID)
        },
        sellOrderItemsByProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.sellOrderItemsByProduct(args.productID)
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
        staff: async (_, args, { dataSources }) => {
            return dataSources.buda.staff(args.staffID)
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
        productGroupsByUser: async (_, args, { dataSources }) => {
            return dataSources.buda.productGroupsByUser(args)
        },
        productsByProductGroup: async (_, args, { dataSources }) => {
            return dataSources.buda.productsByProductGroup(args.productGroupID)
        },
        totalCountByHours: async (_, args, { dataSources }) => {
            return dataSources.buda.totalCountByHours(args)
        },
        totalCountCurrenMonthByHours: async (_, args, { dataSources }) => {
            return dataSources.buda.totalCountCurrenMonthByHours(args)
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
        productsTopSellNumber: async (_, args, { dataSources }) => {
            return dataSources.buda.productsTopSellNumber(args)
        },
        productsTopProfit: async (_, args, { dataSources }) => {
            return dataSources.buda.productsTopProfit(args)
        },
        productsTopRevenue: async (_, args, { dataSources }) => {
            return dataSources.buda.productsTopRevenue(args)
        },
        productsMostReturnNumber: async (_, args, { dataSources }) => {
            return dataSources.buda.productsMostReturnNumber(args)
        },
        productsMostReturnPrice: async (_, args, { dataSources }) => {
            return dataSources.buda.productsMostReturnPrice(args)
        },
        productsLeastSellNumber: async (_, args, { dataSources }) => {
            return dataSources.buda.productsLeastSellNumber(args)
        },
        productsLeastProfit: async (_, args, { dataSources }) => {
            return dataSources.buda.productsLeastProfit(args)
        },
        productsLeastRevenue: async (_, args, { dataSources }) => {
            return dataSources.buda.productsLeastRevenue(args)
        },
        totalRevenueByDiscount: async (_, args, { dataSources }) => {
            return dataSources.buda.totalRevenueByDiscount(args.discountID)
        },
        receiptRevenueWeekly: async (_, args, { dataSources }) => {
            return dataSources.buda.receiptRevenueWeekly(args)
        },
        receiptRevenueMonthly: async (_, args, { dataSources }) => {
            return dataSources.buda.receiptRevenueMonthly(args)
        },
        receiptRevenueThisMonth: async (_, args, { dataSources }) => {
            return dataSources.buda.receiptRevenueThisMonth(args)
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
        },
        paySlipExpenseWeekly: async (_, args, { dataSources }) => {
            return dataSources.buda.paySlipExpenseWeekly(args)
        },
        paySlipExpenseMonthly: async (_, args, { dataSources}) => {
            return dataSources.buda.paySlipExpenseMonthly(args)
        },
        paySlipExpenseThisMonth: async (_, args, { dataSources }) => {
            return dataSources.buda.paySlipExpenseThisMonth(args)
        },
        retentionRateWeekly: async (_, args, { dataSources }) => {
            return dataSources.buda.retentionRateWeekly(args)
        },
        retentionRateMonthly: async (_, args, { dataSources }) => {
            return dataSources.buda.retentionRateMonthly(args)
        }
    },
    Mutation: {
        newProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.newProduct(args.productInput)
        },
        hideProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.hideProduct(args.productID)
        },
        deleteProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteProduct(args.productID)
        },
        editProductQuantity: async (_, args, { dataSources }) => {
            return dataSources.buda.editProductQuantity(args.productID, args.quantityLog)
        },
        editProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.editProduct(args.productID, args.product)
        },
        newProductGroup: async (_, args, { dataSources }) => {
            return dataSources.buda.newProductGroup(args.productGroupInput)
        },
        deleteProductGroup: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteProductGroup(args.productGroupID)
        },
        addProductToGroup: async (_, args, { dataSources }) => {
            return dataSources.buda.addProductToGroup(args.addProductToGroup)
        },
        removeProductFromGroup: async (_, args, { dataSources }) => {
            return dataSources.buda.removeProductFromGroup(args.removeProductFromGroup)
        },
        newProductComponent: async (_, args, { dataSources }) => {
            return dataSources.buda.newProductComponent(args.newProductComponent)
        },
        deleteProductComponent: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteProductComponent(args.deleteProductComponent)
        },
        // addIngredientToProduct: async (_, args, { dataSources }) => {
        //     return dataSources.buda.addIngredientToProduct(args.productID, args.ingredientID)
        // },
        removeIngredientFromProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.removeIngredientFromProduct(args.productID, args.ingredientID)
        },
        newIngredient: async (_, args, { dataSources }) => {
            return dataSources.buda.newIngredient(args.ingredientInput)
        },
        hideIngredient: async (_, args, { dataSources }) => {
            return dataSources.buda.hideIngredient(args.ingredientID)
        },
        deleteIngredient: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteIngredient(args.ingredientID)
        },
        editIngredientQuantity: async (_, args, { dataSources }) => {
            return dataSources.buda.editIngredientQuantity(args.ingredientID, args.quantityLog)
        },
        editIngredient: async (_, args, { dataSources }) => {
            return dataSources.buda.editIngredient(args.ingredientID, args.ingredient)
        },
        newRetail: async (_, args, { dataSources }) => {
            return dataSources.buda.newRetail(args.newRetail)
        },
        newRetailFromProduct: async (_, args, { dataSources }) => {
            return dataSources.buda.newRetailFromProduct(args.newRetail)
        },
        newRetailFromIngredient: async (_, args, { dataSources }) => {
            return dataSources.buda.newRetailFromIngredient(args.newRetail)
        },
        newStaff: async (_, args, { dataSources }) => {
            return dataSources.buda.newStaff(args.staffInput)
        },
        staffLogin: async (_, args, { dataSources }) => {
            return dataSources.buda.staffLogin(args.uuid, args.password)
        },
        updateStaff: async (_, args, { dataSources }) => {
            return dataSources.buda.updateStaff(args.staffID, args.staff)
        },
        deleteStaff: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteStaff(args.staffID)
        },
        newSalaryLog: async (_, args, { dataSources }) => {
            return dataSources.buda.newSalaryLog(args.salaryLogInput)
        },
        deleteSalaryLog: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteSalaryLog(args.salaryLogID)
        },
        newStaffNote: async (_, args, { dataSources }) => {
            return dataSources.buda.newStaffNote(args.staffNoteInput)
        },
        updateStaffNote: async (_, args, { dataSources }) => {
            return dataSources.buda.updateStaffNote(args.staffNoteID, args.staffNote)
        },
        deleteStaffNote: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteStaffNote(args.staffNoteID)
        },
        newUser: async (_, args, { dataSources }) => {
            return dataSources.buda.newUser(args.userRegister) 
        },
        confirmRegister: async (_, args, { dataSources }) => {
            return dataSources.buda.confirmRegister(args.token)
        },
        userLogin: async (_, args, { dataSources }) => {
            return dataSources.buda.userLogin(args.email, args.password)
        },
        deleteUser: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteUser(args.userID)
        },
        loginGoogle: async (_, args, { dataSources }) => {
            return dataSources.buda.loginGoogle(args.jwtSimple)
        },
        newAccessToken: async (_, args, { dataSources }) => {
            return dataSources.buda.newAccessToken(args.jwtSimple)
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
        newBuyOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.newBuyOrder(args.newBuyOrder)
        },
        deleteBuyOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteBuyOrder(args.buyOrderID)
        },
        deleteBuyOrderItem: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteBuyOrderItem(args.buyOrderItemID)
        },
        newSellOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.newSellOrder(args.sellOrderInput)
        },
        newPosSellOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.newPosSellOrder(args.sellOrderInput)
        },
        updateSellOrder: async (_,args, { dataSources }) => {
            return dataSources.buda.updateSellOrder(args.sellOrder)
        },
        deleteSellOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteSellOrder(args.sellOrderID)
        },
        updateSellOrderItem: async (_, args, { dataSources }) => {
            return dataSources.buda.updateSellOrderItem(args.sellOrderItemID, args.sellOrderItem)
        },
        deleteSellOrderItem: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteSellOrderItem(args.sellOrderItemID)
        },
        newWarrantyOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.newWarrantyOrder(args.warrantyOrderInput)
        },
        cancelSellOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.cancelSellOrder(args.sellOrderID)
        },
        returnSellOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.returnSellOrder(args.sellOrderID)
        },
        finishSellOrder: async (_, args, { dataSources }) => {
            return dataSources.buda.finishSellOrder(args.sellOrderID)
        },
        newPaySlip: async (_, args, { dataSources }) => {
            return dataSources.buda.newPaySlip(args.paySlipInput)
        },
        deletePaySlip: async (_, args, { dataSources }) => {
            return dataSources.buda.deletePaySlip(args.paySlipID)
        },
        newReceipt: async (_, args, { dataSources }) => {
            return dataSources.buda.newReceipt(args.receiptInput)
        },
        deleteReceipt: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteReceipt(args.receiptID)
        },
        newCustomer: async (_, args, { dataSources }) => {
            return dataSources.buda.newCustomer(args.customerInput)
        },
        updateCustomer: async (_, args, { dataSources }) => {
            return dataSources.buda.updateCustomer(args.customer)
        },
        hideCustomer: async (_, args, { dataSources }) => {
            return dataSources.buda.hideCustomer(args.customerID)
        },
        newMembershipType: async (_, args, { dataSources }) => {
            return dataSources.buda.newMembershipType(args.membershipTypeInput)
        },
        newDiscount: async (_, args, { dataSources }) => {
            return dataSources.buda.newDiscount(args.discountInput)
        },
        deleteDiscount: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteDiscount(args.discountID)
        },
        newSupplier: async (_, args, { dataSources }) => {
            return dataSources.buda.newSupplier(args.supplierInput)
        },
        updateSupplier: async (_, args, { dataSources }) => {
            return dataSources.buda.updateSupplier(args.supplier)
        },
        hideSupplier: async (_, args, { dataSources }) => {
            return dataSources.buda.hideSupplier(args.supplierID)
        },
        newPlan: async (_, args, { dataSources }) => {
            return dataSources.buda.newPlan(args.planInput)
        },
        deletePlan: async (_, args, { dataSources }) => {
            return dataSources.buda.deletePlan(args.planID)
        },
        newPurchase: async (_, args, { dataSources }) => {
            return dataSources.buda.newPurchase(args.purchaseInput)
        },
        newPicture: async (_, args, { dataSources }) => {
            return dataSources.buda.newPicture(args.pictureInput)
        },
        deletePicture: async (_, args, { dataSources }) => {
            return dataSources.buda.deletePicture(args.pictureID)
        },
        newFixedCost: async (_, args, { dataSources }) => {
            return dataSources.buda.newFixedCost(args.fixedCostInput)
        },
        updateFixedCost: async (_, args, { dataSources }) => {
            return dataSources.buda.updateFixedCost(args.fixedCost)
        },
        hideFixedCost: async (_, args, { dataSources }) => {
            return dataSources.buda.hideFixedCost(args.fixedCostID)
        },
        deleteFixedCost: async (_, args, { dataSources }) => {
            return dataSources.buda.deleteFixedCost(args.fixedCostID)
        },
        newOtherCost: async (_, args, { dataSources }) => {
            return dataSources.buda.newOtherCost(args.otherCostInput)
        },
        hideOtherCost: async (_, args, { dataSources }) => {
            return dataSources.buda.hideOtherCost(args.otherCostID)
        },
        newFixedCostBill: async (_, args, { dataSources }) => {
            return dataSources.buda.newFixedCostBill(args.fixedCostBillInput)
        },
        delayFixedCostBill: async (_, args, { dataSources }) => {
            return dataSources.buda.delayFixedCostBill(args.fixedCostBillID)
        },
        payFixedCostBill: async (_, args, { dataSources }) => {
            return dataSources.buda.payFixedCostBill(args.fixedCostBillID)
        },
        // cleanCache: async (_, __, { dataSources }) => {
        //     return dataSources.buda.cleanCache()
        // }
    }
}