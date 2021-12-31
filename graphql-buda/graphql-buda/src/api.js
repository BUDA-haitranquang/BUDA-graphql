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
        return this.get(`api/ingredient/ingredientID/${ingredientID}`)
    }
    // async ingredientsByName(ingredientName) {
    //     return this.get(`api/ingredient/${ingredientName}`)
    // }
    async ingredientsByUser(){
        return this.get(`api/ingredient/all`)
    }
    async hiddenIngredients(){
        return this.get(`api/ingredient/hidden/all`)
    }
    async alertIngredients(){
        return this.get(`api/ingredient/alert`)
    }
    async product(productID) {
        return this.get(`api/product/productID/${productID}`)
    }
    async productsByUser() {
        return this.get(`api/product/all`)
    }
    async productsByGroup(productGroupID) {
        return this.get(`api/product/group/${productGroupID}/all`)
    }
    async hiddenProducts(){
        return this.get(`api/product/hidden/all`)
    }
    async alertProducts(){
        return this.get(`api/product/alert`)
    }
    async buyOrdersByUser(){
        return this.get(`api/buy-order/user/all/`)
    }
    async buyOrdersBySupplier(supplierID) {
        return this.get(`api/buy-order/supplier/${supplierID}/all`)
    }
    async buyOrdersLastXDaysByUser(X){
        return this.get(`api/buy-order/all/last-x-days/${X}`)
    }
    async incompletedBuyOrdersByUser(){
        return this.get(`api/buy-order/all/incompleted`)
    }
    async buyOrdersByStatusAndUser(status){
        return this.get(`api/buy-order/all/status/${status}`)
    }
    async buyOrderExpenseWeekly(){
        return this.get(`api/buy-order/expense/weekly`)
    }
    async buyOrderExpenseMonthly(){
        return this.get(`api/buy-order/expense/monthly`)
    }
    async buyOrderExpenseThisMonth(){
        return this.get(`api/buy-order/expense/this-month`)
    }
    async sellOrdersByUser() {
        return this.get(`api/sell-order/all`)
    }
    async sellOrdersByCustomer(customerID) {
        return this.get(`api/sell-order/customer/${customerID}/all`)
    }
    async sellOrder(sellOrderID) {
        return this.get(`api/sell-order/${sellOrderID}`)
    }
    async incompletedSellOrdersByUser(){
        return this.get(`api/sell-order/all/incompleted`)
    }
    async sellOrdersXDaysByUser(X){
        return this.get(`api/sell-order/all/last-x-days/${X}`)
    }
    async sellOrdersByStatusAndUser(status){
        return this.get(`api/sell-order/all/status/${status}`)
    }
    async customersByUser(){
        return this.get(`api/customer/all`)
    }
    // async customerByPhone(phoneNumber){
    //     return this.get(`api/customer/byphone`)
    // }
    async discountsByUser(){
        return this.get(`api/discount/all`)
    }
    async discount(discountID){
        return this.get(`api/discount/discountID/${discountID}`)
    }
    async supplier(supplierID){
        return this.get(`api/supplier/${supplierID}`)
    }
    async suppliersByUser(){
        return this.get(`api/supplier/all`)
    }
    // async supplierByPhone(phoneNumber){
    //     return this.get(`api/supplier/byphone`)
    // }
    async plans(){
        return this.get(`api/plan/all`)
    }
    async picture(pictureID){
        return this.get(`api/picture/${pictureID}`)
    }
    async fixedCostsByUser(){
        return this.get(`api/fixed-cost/all`)
    }
    async hiddenFixedCosts(){
        return this.get(`api/fixed-cost/all/hidden`)
    }
    async otherCostsByUser(){
        return this.get(`api/other-cost/all`)
    }
    async incompletedOtherCostsByUser(){
        return this.get(`api/other-cost/all/incompleted`)
    }   
    async otherCostsXDaysByUser(X){
        return this.get(`api/other-cost/all/last-x-days/${X}`)
    }
    async hiddenOtherCosts(){
        return this.get(`api/other-cost/all/hidden`)
    }
    async otherCostExpenseWeekly(){
        return this.get(`api/other-cost/expense/weekly`)
    }
    async otherCostExpenseThisMonth(){
        return this.get(`api/other-cost/expense/this-month`)
    }
    async otherCostExpenseMonthly(){
        return this.get(`api/other-cost/expense/monthly`)
    }
    async fixedCostBillsByUser(){
        return this.get(`api/fixed-cost-bill/all`)
    }
    async fixedCostBillsByFixedCost(fixedCostID){
        return this.get(`api/fixed-cost-bill/fixedCostID/${fixedCostID}/all`)
    }
    async fixedCostBillsXDaysByUser(X){
        return this.get(`api/fixed-cost-bill/all/last-x-days/${X}`)
    }
    async fixedCostBillExpenseWeekly(){
        return this.get(`api/fixed-cost-bill/expense/weekly`)
    }
    async fixedCostBillExpenseThisMonth(){
        return this.get(`api/fixed-cost-bill/expense/this-month`)
    }
    async fixedCostBillExpenseMonthly(){
        return this.get(`api/fixed-cost-bill/expense/monthly`)
    }
    async incompletedFixedCostBillsByUser(){
        return this.get(`api/fixed-cost-bill/all/incompleted`)
    }
    async staffsByUser(){
        return this.get(`api/staff/userID/all`)
    }
    // async salaryLog(){
    //     return this.get(`api/salary-log`)
    // }
    async salaryLogsByUser(){
        return this.get(`api/salary-log/userID/all`)
    }
    async salaryLogsByStaff(staffID){
        return this.get(`api/salary-log/staffID/${staffID}/all`)
    }
    async salaryLogExpenseThisMonth(){
        return this.get(`api/salary-log/expense/this-month`)
    }
    async salaryLogExpenseMonthly(){
        return this.get(`api/salary-log/expense/monthly`)
    }
    async staffNotesByUser(){
        return this.get(`api/staff-note/userID/all`)
    }
    async staffNotesByStaff(staffID){
        return this.get(`api/staff-note/staffID/${staffID}/all`)
    }
    async unseenStaffNotesByStaff(staffID){
        return this.get(`api/staff-note/staffID/${staffID}/all/unseen`)
    }
    async staffNote(staffNoteID){
        return this.get(`api/staff-note/noteID/${staffNoteID}`)
    }
    async notiByUser(){
        return this.get(`api/notification/all`)
    }
    async pendingNotiByUser(){
        return this.get(`api/notification/all/new`)
    }
    async warrantyOrdersByUser(){
        return this.get(`api/warranty-order/all`)
    }
    async warrantyOrdersByProduct(productID){
        return this.get(`api/warranty-order/product/${productID}/all`)
    }
    async warrantyOrdersByCustomer(customerID){
        return this.get(`api/warranty-order/customer/${customerID}/all`)
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
        return this.get(`api/user/me`)
    }
    async userByUUID(UUID) {
        return this.get(`api/user/uuid/${UUID}`)
    }
    async membershipType(membershipTypeID) {
        return this.get(`api/membership-type/${membershipTypeID}`)
    }
    async membershipTypeByUser(){
        return this.get(`api/membership-type/all`)
    }
    async purchaseByUser(){
        return this.get(`api/purchase/all`)
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
    async productLeftLog(productLeftLogID){
        return this.get(`api/product-left-log/id/${productLeftLogID}`)
    }
    async productLeftLogsByProduct(productID){
        return this.get(`api/product-left-log/product/${productID}/all`)
    }
    async productLeftLogsByUser(){
        return this.get(`api/product-left-log/all`)
    }
    async productLeftLogsByStaff(staffID){
        return this.get(`api/product-left-log/staff/${staffID}/all`)
    }
    async ingredientLeftLog(ingredientLeftLogID){
        return this.get(`api/ingredient-left-log/${ingredientLeftLogID}`)
    }
    async ingredientLeftLogsByIngredient(ingredientID){
        return this.get(`api/ingredient-left-log/ingredient/${ingredientID}/all`)
    }
    async ingredientLeftLogsByUser(){
        return this.get(`api/ingredient-left-log/all`)
    }
    async ingredientLeftLogsByStaff(staffID){
        return this.get(`api/ingredient-left-log/staff/${staffID}/all`)
    }
    async totalSpendAgeGroupByUser(){
        return this.get(`api/statistics/age-group/total`)
    }
    async totalSpendGenderByUser(){
        return this.get(`api/statistics/gender/total`)
    }
    async totalRevenueProductByUser(){
        return this.get(`api/statistics/product/all`)
    }
    async revenueMonthly(){
        return this.get(`api/statistics/revenue/monthly`)
    }
    async revenueWeekly(){
        return this.get(`api/statistics/revenue/weekly`)
    }
    async revenueWeekdays(){
        return this.get(`api/statistics/revenue/weekday`)
    }
    async revenueDaysThisMonth(){
        return this.get(`api/statistics/revenue/this-month/daily`)
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
        return this.post(`api/product/new`, productInputJson)
    }
    async newIngredient(ingredientInput) {
        const ingredientInputJson = JSON.parse(JSON.stringify(ingredientInput))
        return this.post(`api/ingredient/new`, ingredientInputJson)
    }
    async newStaff(staffInput){
        const staffInputJson = JSON.parse(JSON.stringify(staffInput))
        return this.post(`api/staff/register`, staffInputJson)
    }
    async newUser(userRegister){
        const userRegisterJson = JSON.parse(JSON.stringify(userRegister))
        return this.post(`api/user/register`, userRegisterJson)
    }
    async newSalaryLog(salaryLogInput){
        const salaryLogInputJson = JSON.parse(JSON.stringify(salaryLogInput))
        return this.post(`api/salary-log/register`, salaryLogInputJson)
    }
    async newBuyOrder(buyOrderInput) {
        const buyOrderInputJson = JSON.parse(JSON.stringify(buyOrderInput))
        return this.post(`api/buy-order/new`, buyOrderInputJson)
    }
    async newSellOrder(sellOrderInput) {
        const sellOrderInputJson = JSON.parse(JSON.stringify(sellOrderInput))
        return this.post(`api/sell-order/new`, sellOrderInputJson)
    }
    async newCustomer(customerInput){
        const customerInputJson = JSON.parse(JSON.stringify(customerInput))
        return this.post(`api/customer/new`, customerInputJson)
    }
    async newDiscount(discountInput){
        const discountInputJson = JSON.parse(JSON.stringify(discountInput))
        return this.post(`api/discount/new`, discountInputJson)
    }
    async newSupplier(supplierInput){
        const supplierInputJson = JSON.parse(JSON.stringify(supplierInput))
        return this.post(`api/supplier/new`, supplierInputJson)
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
        return this.post(`api/fixed-cost/new`, fixedCostInputJson)
    }
    async newOtherCost(otherCostInput){
        const otherCostInputJson = JSON.parse(JSON.stringify(otherCostInput))
        return this.post(`api/other-cost/new`, otherCostInputJson)
    }
    async newFixedCostBill(fixedCostBillInput){
        const fixedCostBillInputJson = JSON.parse(JSON.stringify(fixedCostBillInput))
        return this.post(`api/fixed-cost-bill/new`, fixedCostBillInputJson)
    }
    async newStaffNote(staffNoteInput){
        const staffNoteJson = JSON.parse(JSON.stringify(staffNoteInput))
        return this.post(`api/staff-note/register`, staffNoteJson)
    }
    async newMembershipType(membershipTypeInput){
        const membershipTypeInputJson = JSON.parse(JSON.stringify(membershipTypeInput))
        return this.post(`api/membership-type/new`, membershipTypeInputJson)
    }
    async newPurchase(purchaseInput){
        const purchaseInputJson = JSON.parse(JSON.stringify(purchaseInput))
        return this.post(`api/purchase/new`, purchaseInputJson)
    }
    async newSellOrderItem(sellOrderItemInput){
        const sellOrderItemInputJson = JSON.parse(JSON.stringify(sellOrderItemInput))
        return this.post(`api/sell-order-item/register`, sellOrderItemInputJson)
    }
    async newProductGroup(productGroupInput){
        const productGroupInputJson= JSON.parse(JSON.stringify(productGroupInput))
        return this.post(`api/product-group/new`, productGroupInputJson)
    }
    async userLogin(email, password) {
        return this.post('api/user/login', {
            email: email,
            password: password,
        })
    }
    async staffLogin(uuid, password) {
        return this.post('api/staff/login', {
            uuid: uuid,
            password: password,
        })
    }
    async newAccessToken(jwtSimple) {
        const jwtSimpleJson = JSON.parse(JSON.stringify(jwtSimple))
        return this.post('api/user/refresh-token', jwtSimpleJson)
    }
    async confirmRegister(token) {
        const tokenJson = JSON.parse(JSON.stringify(token))
        return this.get('api/user/register/confirm', tokenJson)
    }
    async loginGoogle(jwtSimple){
        const jwtSimpleJson = JSON.parse(JSON.stringify(jwtSimple))
        return this.post('api/user/login/google', jwtSimpleJson)
    }
    // async deleteProduct(productID){
    //     return this.delete(`api/product/productID/${productID}`)
    // }
    async deleteSellOrder(sellOrderID){
        return this.delete(`api/sell-order/${sellOrderID}`)
    }
    async deletePlan(planID){
        return this.delete(`api/plan/${planID}`)
    }
    async deletePicture(pictureID){
        return this.delete(`api/picture/${pictureID}`)
    }
    async deleteFixedCost(fixedCostID){
        return this.delete(`api/fixed-cost/${fixedCostID}`)
    }
    async deleteBuyOrder(buyOrderID){
        return this.delete(`api/buy-order/${buyOrderID}`)
    }
    async deleteStaff(staffID){
        return this.delete(`api/staff/id/${staffID}`)
    }
    async deleteSalaryLog(salaryLogID){
        return this.delete(`api/salary-log/salary-logID/${salaryLogID}`)
    }
    async deleteStaffNote(staffNoteID){
        return this.delete(`api/staff-note/noteID/${staffNoteID}`)
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
        return this.put(`api/sell-order/update`, sellOrderJson)   
    }
    async updateFixedCost(fixedCost){
        const fixedCostJson = JSON.parse(JSON.stringify(fixedCost))
        return this.put(`api/fixed-cost/update`, fixedCostJson)
    }
    async updateStaff(staffID, staff) {
        const staffJson = JSON.parse(JSON.stringify(staff))
        return this.put(`api/staff/update/${staffID}`, staffJson)
    }
    async updateStaffNote(staffNoteID, staffNote){
        const staffNoteJson = JSON.parse(JSON.stringify(staffNote))
        return this.put(`api/staff-note/noteID/${staffNoteID}`, staffNoteJson)
    }
    async updateProduct(productID, product){
        const productJson=JSON.parse(JSON.stringify(product))
        return this.put(`api/product/edit/${productID}`, productJson)
    }
    async updateCustomer(customer){
        const customerJson=JSON.parse(JSON.stringify(customer))
        return this.put(`api/customer/update`, customerJson)
    }
    async updateSupplier(supplier){
        const supplierJson=JSON.parse(JSON.stringify(supplier))
        return this.put(`api/supplier/update`, supplierJson)
    }
    async updateUser(user){
        const userJson=JSON.parse(JSON.stringify(user))
        return this.put(`api/user/update`, userJson)
    }
    async updateSellOrderItem(sellOrderItemID, sellOrderItem){
        const sellOrderItemJson=JSON.parse(JSON.stringify(sellOrderItem))
        return this.put(`api/sell-order-item/update/${sellOrderItemID}`, sellOrderItemJson)
    }
    async editIngredientQuantity(ingredientID, quantityLog){
        const quantityLogJson = JSON.parse(JSON.stringify(quantityLog))
        return this.put(`api/ingredient/edit/quantity/${ingredientID}`, quantityLogJson)
    }
    async editIngredient(ingredientID, ingredient){
        const ingredientJson = JSON.parse(JSON.stringify(ingredient))
        return this.put(`api/ingredient/edit/${ingredientID}`, ingredientJson)
    }
    async editProductQuantity(productID, quantityLog){
        const quantityLogJson = JSON.parse(JSON.stringify(quantityLog))
        return this.put(`api/product/edit/quantity/${productID}`, quantityLogJson)
    }
    async editProduct(productID, product){
        const productJson = JSON.parse(JSON.stringify(product))
        return this.put(`api/product/edit/${productID}`, productJson)
    }
    async hideIngredient(ingredientID){
        return this.get(`api/ingredient/hide/${ingredientID}`)
    }
    async hideProduct(productID) {
        return this.get(`api/product/hide/${productID}`)
    }
    async hideCustomer(customerID) {
        return this.get(`api/customer/hide/${customerID}`)
    }
    async hideFixedCost(fixedCostID){
        return this.get(`api/fixed-cost/hide/${fixedCostID}`)
    }
    async hideSupplier(supplierID){
        return this.get(`api/supplier/hide/${supplierID}`)
    }
    async hideOtherCost(otherCostID){
        return this.get(`api/other-cost/hide/${otherCostID}`)
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