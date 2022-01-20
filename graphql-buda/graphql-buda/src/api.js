const { RESTDataSource } = require('apollo-datasource-rest')
class Budabackend extends RESTDataSource {
    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token)
    }
    constructor() {
        super()
        this.baseURL = "http://143.198.194.24:8080/"
        //this.baseURL = 'http://localhost:8080/'
    }
    async ingredient(ingredientID) {
        return this.get(`api/ingredient/crud/ingredientID/${ingredientID}`)
    }
    async ingredientsByUser(){
        return this.get(`api/ingredient/crud/all`)
    }
    async hiddenIngredients(){
        return this.get(`api/ingredient/crud/hidden/all`)
    }
    async alertIngredients(){
        return this.get(`api/ingredient/crud/alert`)
    }
    async ingredientLeftLog(ingredientLeftLogID){
        return this.get(`api/ingredient/quantity-log/${ingredientLeftLogID}`)
    }
    async ingredientLeftLogsByIngredient(ingredientID){
        return this.get(`api/ingredient/quantity-log/${ingredientID}/all`)
    }
    async ingredientLeftLogsByUser(){
        return this.get(`api/ingredient/quantity-log/all`)
    }
    async ingredientLeftLogsByStaff(staffID){
        return this.get(`api/ingredient/quantity-log/staff/${staffID}/all`)
    }
    async product(productID) {
        return this.get(`api/product/crud/productID/${productID}`)
    }
    async productsByUser() {
        return this.get(`api/product/crud/all`)
    }
    async productsByGroup(productGroupID) {
        return this.get(`api/product/crud/group/${productGroupID}/all`)
    }
    async hiddenProducts(){
        return this.get(`api/product/crud/hidden/all`)
    }
    async alertProducts(){
        return this.get(`api/product/crud/alert`)
    }
    async productLeftLog(productLeftLogID){
        return this.get(`api/product/quantity-log/id/${productLeftLogID}`)
    }
    async productLeftLogsByProduct(productID){
        return this.get(`api/product/quantity-log/product/${productID}/all`)
    }
    async productLeftLogsByUser(){
        return this.get(`api/product/quantity-log/all`)
    }
    async productLeftLogsByStaff(staffID){
        return this.get(`api/product/quantity-log/staff/${staffID}/all`)
    }
    async buyOrdersByUser(){
        return this.get(`api/business/buy/new-order/all/`)
    }
    async buyOrdersBySupplier(supplierID) {
        return this.get(`api/business/buy/new-order/supplier/${supplierID}/all`)
    }
    async buyOrdersLastXDaysByUser(X){
        return this.get(`api/business/buy/new-order/all/last-x-days/${X}`)
    }
    async incompletedBuyOrdersByUser(){
        return this.get(`api/business/buy/new-order/all/incompleted`)
    }
    async buyOrdersByStatusAndUser(status){
        return this.get(`api/business/buy/new-order/status/${status}`)
    }
    async sellOrdersByUser() {
        return this.get(`api/business/sell/new-order/all`)
    }
    async sellOrdersByCustomer(customerID) {
        return this.get(`api/business/sell/new-order/customer/${customerID}/all`)
    }
    async sellOrder(sellOrderID) {
        return this.get(`api/business/sell/new-order/${sellOrderID}`)
    }
    async incompletedSellOrdersByUser(){
        return this.get(`api/business/sell/new-order/all/incompleted`)
    }
    async sellOrdersXDaysByUser(X){
        return this.get(`api/business/sell/new-order/all/last-x-days/${X}`)
    }
    async sellOrdersByStatusAndUser(status){
        return this.get(`api/business/sell/new-order/all/status/${status}`)
    }
    async customersByUser(){
        return this.get(`api/customer/crud/all`)
    }
    async membershipType(membershipTypeID) {
        return this.get(`api/customer/membership/membershipTypeID/${membershipTypeID}`)
    }
    async membershipTypeByUser(){
        return this.get(`api/customer/membership/all`)
    }
    async discountsByUser(){
        return this.get(`api/discount/all`)
    }
    async discount(discountID){
        return this.get(`api/discount/discountID/${discountID}`)
    }
    async supplier(supplierID){
        return this.get(`api/supplier/crud/${supplierID}`)
    }
    async suppliersByUser(){
        return this.get(`api/supplier/crud/all`)
    }
    async plans(){
        return this.get(`api/plan/view/all`)
    }
    async purchaseByUser(){
        return this.get(`api/plan/purchase/all`)
    }
    async picture(pictureID){
        return this.get(`api/picture/${pictureID}`)
    }
    async fixedCostsByUser(){
        return this.get(`api/fixed-cost/crud/all`)
    }
    async hiddenFixedCosts(){
        return this.get(`api/fixed-cost/crud/all/hidden`)
    }
    async otherCostsByUser(){
        return this.get(`api/other-cost/crud/all`)
    }
    async incompletedOtherCostsByUser(){
        return this.get(`api/other-cost/crud/all/incompleted`)
    }   
    async otherCostsXDaysByUser(X){
        return this.get(`api/other-cost/crud/all/last-x-days/${X}`)
    }
    async hiddenOtherCosts(){
        return this.get(`api/other-cost/crud/all/hidden`)
    }
    async fixedCostBillsByUser(){
        return this.get(`api/cost/fixed-cost/bill/all`)
    }
    async fixedCostBillsByFixedCost(fixedCostID){
        return this.get(`api/cost/fixed-cost/bill/fixedCostID/${fixedCostID}/all`)
    }
    async fixedCostBillsXDaysByUser(X){
        return this.get(`api/cost/fixed-cost/bill/all/last-x-days/${X}`)
    }
    async incompletedFixedCostBillsByUser(){
        return this.get(`api/cost/fixed-cost/bill/all/incompleted`)
    }
    async staffsByUser(){
        return this.get(`api/staff/crud/all`)
    }
    async staffNotesByUser(){
        return this.get(`api/staff/notification/userID/all`)
    }
    async staffNotesByStaff(staffID){
        return this.get(`api/staff/notification/staffID/${staffID}/all`)
    }
    async unseenStaffNotesByStaff(staffID){
        return this.get(`api/staff/notification/staffID/${staffID}/all/unseen`)
    }
    async staffNote(staffNoteID){
        return this.get(`api/staff/notification/noteID/${staffNoteID}`)
    }
    // async salaryLog(){
    //     return this.get(`api/salary-log`)
    // }
    async salaryLogsByUser(){
        return this.get(`api/staff/salary/userID/all`)
    }
    async salaryLogsByStaff(staffID){
        return this.get(`api/staff/salary/staffID/${staffID}/all`)
    }
    async notiByUser(){
        return this.get(`api/notification/all`)
    }
    async pendingNotiByUser(){
        return this.get(`api/notification/all/new`)
    }
    async warrantyOrdersByUser(){
        return this.get(`api/warranty-order/crud/all`)
    }
    async warrantyOrdersByProduct(productID){
        return this.get(`api/warranty-order/crud/product/${productID}/all`)
    }
    async warrantyOrdersByCustomer(customerID){
        return this.get(`api/warranty-order/crud/customer/${customerID}/all`)
    }
    async buyOrderItemsByBuyOrder(buyOrderID){
        return this.get(`api/buy-order-item/buy-order/${buyOrderID}`)
    }
    async buyOrderItemsByIngredient(ingredientID){
        return this.get(`api/buy-order-item/all/ingredient/${ingredientID}`)
    }
    async user(userID){
        return this.get(`api/user/id/${userID}`)
    }
    async currentUser(){
        return this.get(`api/user/view/me`)
    }
    async userByUUID(UUID) {
        return this.get(`api/user/uuid/${UUID}`)
    }
    async componentsByProduct(productID){
        return this.get(`api/product-component/product/${productID}`)
    }
    async productContainIngredient(ingredientID){
        return this.get(`api/product-component/contains/ingredient/${ingredientID}`)
    }
    async sellOrderItemsBySellOrder(sellOrderID){
        return this.get(`api/sell-order-item/sell-order-id/${sellOrderID}`)
    }
    async sellOrderItemsByProduct(productID){
        return this.get(`api/sell-order-item/product/${productID}`)
    }
    async productGroupsByUser(){
        return this.get(`api/product-group/all`)
    }
    async productsByProductGroupID(productGroupID){
        return this.get(`api/product-group/${productGroupID}/products`)
    }
    async totalSpendAgeGroupByUser(){
        return this.get(`api/statistics/age-group/total`)
    }
    async totalSpendAgeGroupThisMonthByUser(){
        return this.get(`api/statistics/age-group/this-month`)
    }
    async totalSpendGenderByUser(){
        return this.get(`api/statistics/gender/total`)
    }
    async totalSpendGenderThisMonthByUser(){
        return this.get(`api/statistics/gender/this-month`)
    }
    async totalRevenueProductByUser(){
        return this.get(`api/statistics/product/all`)
    }
    async revenueMonthly(){
        return this.get(`api/statistics/revenue/sell-order/monthly`)
    }
    async revenueWeekly(){
        return this.get(`api/statistics/revenue/sell-order/weekly`)
    }
    async revenueWeekdays(){
        return this.get(`api/statistics/revenue/sell-order/weekday`)
    }
    async revenueDaysThisMonth(){
        return this.get(`api/statistics/revenue/sell-order/this-month/daily`)
    }
    async otherCostExpenseWeekly(){
        return this.get(`api/statistics/expense/other-cost/weekly`)
    }
    async otherCostExpenseThisMonth(){
        return this.get(`api/statistics/expense/other-cost/this-month`)
    }
    async otherCostExpenseMonthly(){
        return this.get(`api/statistics/expense/other-cost/monthly`)
    }
    async fixedCostBillExpenseWeekly(){
        return this.get(`api/statistics/expense/fixed-cost/weekly`)
    }
    async fixedCostBillExpenseThisMonth(){
        return this.get(`api/statistics/expense/fixed-cost/this-month`)
    }
    async fixedCostBillExpenseMonthly(){
        return this.get(`api/statistics/expense/fixed-cost/monthly`)
    }
    async salaryLogExpenseThisMonth(){
        return this.get(`api/statistics/expense/salary/this-month`)
    }
    async salaryLogExpenseMonthly(){
        return this.get(`api/statistics/expense/salary/monthly`)
    }
    async buyOrderExpenseWeekly(){
        return this.get(`api/statistics/expense/buy-order/weekly`)
    }
    async buyOrderExpenseMonthly(){
        return this.get(`api/statistics/expense/buy-order/monthly`)
    }
    async buyOrderExpenseThisMonth(){
        return this.get(`api/statistics/expense/buy-order/this-month`)
    }
    async cleanCache() {
        try {
            await this.httpCache.keyValueCache.wrapped.client.flushdb()
            return true
        }
        catch (err) {
            return false
        }
    }
    async newProduct(productInput) {
        const productInputJson = JSON.parse(JSON.stringify(productInput))
        return this.post(`api/product/crud/new`, productInputJson)
    }
    async newIngredient(ingredientInput) {
        const ingredientInputJson = JSON.parse(JSON.stringify(ingredientInput))
        return this.post(`api/ingredient/crud/new`, ingredientInputJson)
    }
    async newStaff(staffInput){
        const staffInputJson = JSON.parse(JSON.stringify(staffInput))
        return this.post(`api/staff/crud/new`, staffInputJson)
    }
    async newUser(userRegister){
        const userRegisterJson = JSON.parse(JSON.stringify(userRegister))
        return this.post(`api/user/register`, userRegisterJson)
    }
    async newSalaryLog(salaryLogInput){
        const salaryLogInputJson = JSON.parse(JSON.stringify(salaryLogInput))
        return this.post(`api/staff/salary/new`, salaryLogInputJson)
    }
    async newBuyOrder(buyOrderInput) {
        const buyOrderInputJson = JSON.parse(JSON.stringify(buyOrderInput))
        return this.post(`api/business/buy/new-order/new`, buyOrderInputJson)
    }
    async newSellOrder(sellOrderInput) {
        const sellOrderInputJson = JSON.parse(JSON.stringify(sellOrderInput))
        return this.post(`api/business/sell/new-order/new`, sellOrderInputJson)
    }
    async newCustomer(customerInput){
        const customerInputJson = JSON.parse(JSON.stringify(customerInput))
        return this.post(`api/customer/crud/new`, customerInputJson)
    }
    async newDiscount(discountInput){
        const discountInputJson = JSON.parse(JSON.stringify(discountInput))
        return this.post(`api/discount/new`, discountInputJson)
    }
    async newSupplier(supplierInput){
        const supplierInputJson = JSON.parse(JSON.stringify(supplierInput))
        return this.post(`api/supplier/crud/new`, supplierInputJson)
    }
    async newPlan(planInput){
        const planInputJson = JSON.parse(JSON.stringify(planInput))
        return this.post(`api/plan`, planInputJson)
    }
    async newPicture(pictureInput){
        const pictureInputJson = JSON.parse(JSON.stringify(pictureInput))
        return this.post(`api/picture`, pictureInputJson)
    }
    async newFixedCost(fixedCostInput){
        const fixedCostInputJson = JSON.parse(JSON.stringify(fixedCostInput))
        return this.post(`api/fixed-cost/crud/new`, fixedCostInputJson)
    }
    async newOtherCost(otherCostInput){
        const otherCostInputJson = JSON.parse(JSON.stringify(otherCostInput))
        return this.post(`api/other-cost/crud/new`, otherCostInputJson)
    }
    async newFixedCostBill(fixedCostBillInput){
        const fixedCostBillInputJson = JSON.parse(JSON.stringify(fixedCostBillInput))
        return this.post(`api/cost/fixed-cost/bill/new`, fixedCostBillInputJson)
    }
    async newStaffNote(staffNoteInput){
        const staffNoteJson = JSON.parse(JSON.stringify(staffNoteInput))
        return this.post(`api/staff/notification/new`, staffNoteJson)
    }
    async newMembershipType(membershipTypeInput){
        const membershipTypeInputJson = JSON.parse(JSON.stringify(membershipTypeInput))
        return this.post(`api/customer/membership/new`, membershipTypeInputJson)
    }
    async newPurchase(purchaseInput){
        const purchaseInputJson = JSON.parse(JSON.stringify(purchaseInput))
        return this.post(`api/plan/purchase/new`, purchaseInputJson)
    }
    async newSellOrderItem(sellOrderItemInput){
        const sellOrderItemInputJson = JSON.parse(JSON.stringify(sellOrderItemInput))
        return this.post(`api/sell-order-item/register`, sellOrderItemInputJson)
    }
    async newProductGroup(productGroupInput){
        const productGroupInputJson= JSON.parse(JSON.stringify(productGroupInput))
        return this.post(`api/product-group/new`, productGroupInputJson)
    }
    async newWarrantyOrder(warrantyOrderInput){
        const warrantyOrderInputJson = JSON.parse(JSON.stringify(warrantyOrderInput))
        return this.post(`api/warranty-order/crud/new`, warrantyOrderInputJson)
    }
    async userLogin(email, password) {
        return this.post(`api/user/login`, {
            email: email,
            password: password,
        })
    }
    async staffLogin(uuid, password) {
        return this.post(`api/staff/login`, {
            uuid: uuid,
            password: password,
        })
    }
    async newAccessToken(jwtSimple) {
        const jwtSimpleJson = JSON.parse(JSON.stringify(jwtSimple))
        return this.post('api/user/refresh-token', jwtSimpleJson)
    }
    async confirmRegister(token) {
        return this.get(`api/user/register/confirm/?token=${token}`)
    }
    async loginGoogle(jwtSimple){
        const jwtSimpleJson = JSON.parse(JSON.stringify(jwtSimple))
        return this.post(`api/user/login/google`, jwtSimpleJson)
    }
    // async deleteProduct(productID){
    //     return this.delete(`api/product/productID/${productID}`)
    // }
    async deleteSellOrder(sellOrderID){
        return this.delete(`api/business/sell/new-order/${sellOrderID}`)
    }
    async deletePlan(planID){
        return this.delete(`api/plan/${planID}`)
    }
    async deletePicture(pictureID){
        return this.delete(`api/picture/${pictureID}`)
    }
    async deleteFixedCost(fixedCostID){
        return this.delete(`api/fixed-cost/crud/${fixedCostID}`)
    }
    async deleteBuyOrder(buyOrderID){
        return this.delete(`api/business/buy/new-order/${buyOrderID}`)
    }
    async deleteStaff(staffID){
        return this.delete(`api/staff/crud/id/${staffID}`)
    }
    async deleteSalaryLog(salaryLogID){
        return this.delete(`api/staff/salary/salary-logID/${salaryLogID}`)
    }
    async deleteStaffNote(staffNoteID){
        return this.delete(`api/staff/notification/noteID/${staffNoteID}`)
    }
    async deleteBuyOrderItem(buyOrderItemID){
        return this.delete(`api/buy-order-item/${buyOrderItemID}`)
    }
    async deleteUser(userID){
        return this.delete(`api/user/${userID}`)
    }
    async deleteSellOrderItem(sellOrderItemID){
        return this.delete(`api/sell-order-item/${sellOrderItemID}`)
    }
    async deleteProductGroup(productGroupID){
        return this.delete(`api/product-group/remove/${productGroupID}`)
    }
    async updatePicture(picture){
        const pictureJson = JSON.parse(JSON.stringify(picture))
        return this.put(`api/picture`,pictureJson)
    }
    async updateSellOrder(sellOrder){
        const sellOrderJson = JSON.parse(JSON.stringify(sellOrder))
        return this.put(`api/business/sell/new-order/update`, sellOrderJson)   
    }
    async updateFixedCost(fixedCost){
        const fixedCostJson = JSON.parse(JSON.stringify(fixedCost))
        return this.put(`api/fixed-cost/crud/update`, fixedCostJson)
    }
    async updateStaff(staffID, staff) {
        const staffJson = JSON.parse(JSON.stringify(staff))
        return this.put(`api/staff/crud/update/${staffID}`, staffJson)
    }
    async updateStaffNote(staffNoteID, staffNote){
        const staffNoteJson = JSON.parse(JSON.stringify(staffNote))
        return this.put(`api/staff/notification/noteID/${staffNoteID}`, staffNoteJson)
    }
    async updateProduct(productID, product){
        const productJson=JSON.parse(JSON.stringify(product))
        return this.put(`api/product/crud/edit/${productID}`, productJson)
    }
    async updateCustomer(customer){
        const customerJson=JSON.parse(JSON.stringify(customer))
        return this.put(`api/customer/crud/update`, customerJson)
    }
    async updateSupplier(supplier){
        const supplierJson=JSON.parse(JSON.stringify(supplier))
        return this.put(`api/supplier/crud/update`, supplierJson)
    }
    async updateUser(user){
        const userJson=JSON.parse(JSON.stringify(user))
        return this.put(`api/user/update-info`, userJson)
    }
    async updateUserPassword(updateUserPassword){
        const updateUserPasswordJson=JSON.parse(JSON.stringify(updateUserPassword))
        return this.put(`api/user/password/update`, updateUserPasswordJson)
    }
    async forgotPassword(email){
        return this.get(`api/user/password/forgot/?email=${email}`)
    }
    async updateForgotPassword(token, updateUserPassword){
        const updateUserPasswordJson=JSON.parse(JSON.stringify(updateUserPassword))
        return this.put(`api/user/password/forgot/confirm/?token=${token}`, updateUserPasswordJson)
    }
    async updateUserEmail(updateUserEmail){
        const updateUserEmailJson=JSON.parse(JSON.stringify(updateUserEmail))
        return this.put(`api/user/update-info/email`, updateUserEmailJson)
    }
    async confirmUpdateEmail(token){
        return this.get(`api/user/update-info/email/confirm/?token=${token}`)
    }
    async updateSellOrderItem(sellOrderItemID, sellOrderItem){
        const sellOrderItemJson=JSON.parse(JSON.stringify(sellOrderItem))
        return this.put(`api/sell-order-item/update/${sellOrderItemID}`, sellOrderItemJson)
    }
    async editIngredientQuantity(ingredientID, quantityLog){
        const quantityLogJson = JSON.parse(JSON.stringify(quantityLog))
        return this.put(`api/ingredient/crud/edit/quantity/${ingredientID}`, quantityLogJson)
    }
    async editIngredient(ingredientID, ingredient){
        const ingredientJson = JSON.parse(JSON.stringify(ingredient))
        return this.put(`api/ingredient/crud/edit/${ingredientID}`, ingredientJson)
    }
    async editProductQuantity(productID, quantityLog){
        const quantityLogJson = JSON.parse(JSON.stringify(quantityLog))
        return this.put(`api/product/crud/edit/quantity/${productID}`, quantityLogJson)
    }
    async editProduct(productID, product){
        const productJson = JSON.parse(JSON.stringify(product))
        return this.put(`api/product/crud/edit/${productID}`, productJson)
    }
    async hideIngredient(ingredientID){
        return this.get(`api/ingredient/crud/hide/${ingredientID}`)
    }
    async hideProduct(productID) {
        return this.get(`api/product/crud/hide/${productID}`)
    }
    async hideCustomer(customerID) {
        return this.get(`api/customer/crud/hide/${customerID}`)
    }
    async hideFixedCost(fixedCostID){
        return this.get(`api/fixed-cost/crud/hide/${fixedCostID}`)
    }
    async hideSupplier(supplierID){
        return this.get(`api/supplier/crud/hide/${supplierID}`)
    }
    async hideOtherCost(otherCostID){
        return this.get(`api/other-cost/crud/hide/${otherCostID}`)
    }
    async addIngredientToProduct(productID, ingredientID){
        return this.post(`api/product-component/${productID}/add/${ingredientID}`)
    }
    async removeIngredientFromProduct(productID, ingredientID){
        return this.post(`api/product-component/${productID}/remove/${ingredientID}`)
    }
    async addProductToProductGroup(productGroupID, productID){
        return this.post(`api/product-group/${productGroupID}/add/${productID}`)
    }
    async removeProductFromProductGroup(productGroupID, productID){
        return this.post(`api/product-group/${productGroupID}/remove/${productID}`)
    }
}
module.exports = Budabackend