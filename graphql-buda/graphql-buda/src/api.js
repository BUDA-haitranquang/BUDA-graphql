const { RESTDataSource } = require('apollo-datasource-rest');
class Budabackend extends RESTDataSource {
    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token);
    }
    constructor() {
        super();
        this.baseURL = "http://143.198.194.24:8080/"
        //this.baseURL = 'http://localhost:8080/'
    }
    async ingredient(ingredientID) {
        return this.get(`api/ingredient/ingredientID/${ingredientID}`);
    }
    // async ingredientsByName(ingredientName) {
    //     return this.get(`api/ingredient/${ingredientName}`);
    // }
    async ingredientsByUser(){
        return this.get(`api/ingredient/all`);
    }
    async hiddenIngredients(){
        return this.get(`api/ingredient/hidden/all`);
    }
    async product(productID) {
        return this.get(`api/product/productID/${productID}`);
    }
    async productsByUser() {
        return this.get(`api/product/all`);
    }
    async productsByGroup(productGroupID) {
        return this.get(`api/product/group/${productGroupID}/all`);
    }
    async hiddenProducts(){
        return this.get(`api/product/hidden/all`);
    }
    async buyOrdersByUser(){
        return this.get(`api/buy-order/user/all/`);
    }
    async buyOrdersBySupplier(supplierID) {
        return this.get(`api/buy-order/supplier/${supplierID}/all`);
    }
    async buyOrdersLastXDaysByUser(X){
        return this.get(`api/buy-order/all/last-x-days/${X}`);
    }
    async incompletedBuyOrdersByUser(){
        return this.get(`api/buy-order/all/incompleted`);
    }
    async buyOrdersByStatusAndUser(status){
        return this.get(`api/buy-order/all/status/${status}`);
    }
    async buyOrderExpenseWeekly(){
        return this.get(`api/buy-order/expense/weekly`);
    }
    async buyOrderExpenseMonthly(){
        return this.get(`api/buy-order/expense/monthly`);
    }
    async buyOrderExpenseThisMonth(){
        return this.get(`api/buy-order/expense/this-month`);
    }
    async sellOrdersByUser() {
        return this.get(`api/sell-order/all`);
    }
    async sellOrdersByCustomer(customerID) {
        return this.get(`api/sell-order/customer/${customerID}/all`);
    }
    async sellOrder(sellOrderID) {
        return this.get(`api/sell-order/${sellOrderID}`);
    }
    async incompletedSellOrdersByUser(){
        return this.get(`api/sell-order/all/incompleted`);
    }
    async sellOrdersXDaysByUser(X){
        return this.get(`api/sell-order/all/last-x-days/${X}`);
    }
    async sellOrdersByStatusAndUser(status){
        return this.get(`api/sell-order/all/status/${status}`);
    }
    async customersByUser(){
        return this.get(`api/customer/all`);
    }
    // async customerByPhone(phoneNumber){
    //     return this.get(`api/customer/byphone`);
    // }
    async discountsByUser(){
        return this.get(`api/discount/all`);
    }
    async discount(discountID){
        return this.get(`api/discount/discountID/${discountID}`);
    }
    async suppliersByUser(){
        return this.get(`api/supplier/all`);
    }
    // async supplierByPhone(phoneNumber){
    //     return this.get(`api/supplier/byphone`);
    // }
    async plans(){
        return this.get(`api/plan/all`);
    }
    async picture(pictureID){
        return this.get(`api/picture/${pictureID}`);
    }
    async fixedCostsByUser(){
        return this.get(`api/fixed-cost/all`);
    }
    async otherCostsByUser(){
        return this.get(`api/other-cost/all`);
    }
    async incompletedOtherCostsByUser(){
        return this.get(`api/other-cost/all/incompleted`);
    }   
    async otherCostsXDaysByUser(X){
        return this.get(`api/other-cost/all/last-x-days/${X}`);
    }
    async fixedCostBillsByUser(){
        return this.get(`api/fixed-cost-bill/all`);
    }
    async fixedCostBillsByFixedCost(fixedCostID){
        return this.get(`api/fixed-cost-bill/fixedCostID/${fixedCostID}/all`);
    }
    async fixedCostBillsXDaysByUser(X){
        return this.get(`api/fixed-cost-bill/all/last-x-days/${X}`);
    }
    async incompletedFixedCostBillsByUser(){
        return this.get(`api/fixed-cost-bill/all/incompleted`);
    }
    async staffsByUser(){
        return this.get(`api/staff/userID/all`);
    }
    // async salaryLog(){
    //     return this.get(`api/salary-log`);
    // }
    // async salaryLogsByUser(){
    //     return this.get(`api/salary-log/`);
    // }
    async salaryLogsByStaff(staffID){
        return this.get(`api/salary-log/staffID/${staffID}/all`);
    }
    async salaryLogExpenseThisMonth(){
        return this.get(`api/salary-log/expense/this-month`);
    }
    async salaryLogExpenseMonthly(){
        return this.get(`api/salary-log/expense/monthly`);
    }
    // async staffNotesByUser(){
    //     return this.get(`api/staff-note/userID/{userID}/all`);
    // }
    async staffNotesByStaff(staffID){
        return this.get(`api/staff-note/staffID/${staffID}/all`);
    }
    async unseenStaffNotesByStaff(staffID){
        return this.get(`api/staff-note/staffID/${staffID}/all/unseen`);
    }
    async staffNote(staffNoteID){
        return this.get(`api/staff-note/noteID/${staffNoteID}`);
    }
    async totalSpendAgeGroupByUser(){
        return this.get(`api/statistics/age-group/total`);
    }
    async totalSpendGenderByUser(){
        return this.get(`api/statistics/gender/total`);
    }
    async totalRevenueProductByUser(){
        return this.get(`api/statistics/product/all`);
    }
    async revenueMonthly(){
        return this.get(`api/statistics/revenue/monthly`);
    }
    async revenueWeekly(){
        return this.get(`api/statistics/revenue/weekly`);
    }
    async revenueWeekdays(){
        return this.get(`api/statistics/revenue/weekday`);
    }
    async revenueDaysThisMonth(){
        return this.get(`api/statistics/revenue/this-month/daily`);
    }
    async cleanCache() {
        try {
            await this.httpCache.keyValueCache.wrapped.client.flushdb();
            return true;
        }
        catch (err) {
            return false;
        }
    }
    async newProduct(productInput) {
        const productInputJson = JSON.parse(JSON.stringify(productInput));
        return this.post(`api/product/new`, productInputJson);
    }
    async newIngredient(ingredientInput) {
        const ingredientInputJson = JSON.parse(JSON.stringify(ingredientInput));
        return this.post(`api/ingredient/new`, ingredientInputJson);
    }
    async newStaff(staffInput){
        const staffInputJson = JSON.parse(JSON.stringify(staffInput));
        return this.post(`api/staff/register`, staffInputJson);
    }
    async newUser(userRegister){
        const userRegisterJson = JSON.parse(JSON.stringify(userRegister));
        return this.post(`api/user/register`, userRegisterJson);
    }
    // async newSalaryLog(salaryLogInput){
    //     const salaryLogInputJson = JSON.parse(JSON.stringify(salaryLogInput));
    //     return this.post(`api/salary-log`, salaryLogInputJson);
    // }
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
    async newBuyOrder(buyOrderInput) {
        const buyOrderInputJson = JSON.parse(JSON.stringify(buyOrderInput));
        return this.post(`api/buy-order/new`, buyOrderInputJson);
    }
    async newSellOrder(sellOrderInput) {
        const sellOrderInputJson = JSON.parse(JSON.stringify(sellOrderInput));
        return this.post(`api/sell-order/new`, sellOrderInputJson);
    }
    async newCustomer(customerInput){
        const customerInputJson = JSON.parse(JSON.stringify(customerInput));
        return this.post(`api/customer/new`, customerInputJson);
    }
    async newDiscount(discountInput){
        const discountInputJson = JSON.parse(JSON.stringify(discountInput));
        return this.post(`api/discount/new`, discountInputJson);
    }
    async newSupplier(supplierInput){
        const supplierInputJson = JSON.parse(JSON.stringify(supplierInput));
        return this.post(`api/supplier/new`, supplierInputJson);
    }
    async newPlan(planInput){
        const planInputJson = JSON.parse(JSON.stringify(planInput));
        return this.post(`api/plan`, planInputJson);
    }
    async newPicture(pictureInput){
        const pictureInputJson = JSON.parse(JSON.stringify(pictureInput));
        return this.post(`api/picture`, pictureInputJson);
    }
    async newFixedCost(fixedCostInput){
        const fixedCostInputJson = JSON.parse(JSON.stringify(fixedCostInput));
        return this.post(`api/fixed-cost/new`, fixedCostInputJson);
    }
    async newOtherCost(otherCostInput){
        const otherCostInputJson = JSON.parse(JSON.stringify(otherCostInput));
        return this.post(`api/other-cost/new`, otherCostInputJson);
    }
    async newFixedCostBill(fixedCostBillInput){
        const fixedCostBillInputJson = JSON.parse(JSON.stringify(fixedCostBillInput));
        return this.post(`api/fixed-cost-bill/new`, fixedCostBillInputJson);
    }
    async newStaffNote(staffNoteInput){
        const staffNoteJson = JSON.parse(JSON.stringify(staffNoteInput));
        return this.post(`api/staff-note/register`, staffNoteJson);
    }
    // async deleteProduct(productID){
    //     return this.delete(`api/product/productID/${productID}`);
    // }
    async deleteSellOrder(sellOrderID){
        return this.delete(`api/sell-order/${sellOrderID}`);
    }
    async deletePlan(planID){
        return this.delete(`api/plan/${planID}`);
    }
    async deletePicture(pictureID){
        return this.delete(`api/picture/${pictureID}`);
    }
    async deleteFixedCost(fixedCostID){
        return this.delete(`api/fixed-cost/${fixedCostID}`);
    }
    async deleteBuyOrder(buyOrderID){
        return this.delete(`api/buy-order/${buyOrderID}`);
    }
    async deleteStaff(staffID){
        return this.delete(`api/staff/id/${staffID}`);
    }
    async deleteSalaryLog(salaryLogID){
        return this.delete(`api/salary-log/salary-logID/${salaryLogID}`);
    }
    async deleteStaffNote(staffNoteID){
        return this.delete(`api/staff-note/noteID/${staffNoteID}`);
    }
    async updatePicture(picture){
        const pictureJson = JSON.parse(JSON.stringify(picture));
        return this.put(`api/picture`,pictureJson);
    }
    async updateSellOrder(sellOrder){
        const sellOrderJson = JSON.parse(JSON.stringify(sellOrder));
        return this.put(`api/sell-order/update`, sellOrderJson);   
    }
    async updateFixedCost(fixedCost){
        const fixedCostJson = JSON.parse(JSON.stringify(fixedCost));
        return this.put(`api/fixed-cost/update`, fixedCostJson);
    }
    // async updateStaff(staffID, name, address, phoneNumber, staffPosition, staffUUID, password, salary, account) {
    //     return this.put(`api/staff/id/${staffID}`);
    // }
    async updateStaffNote(staffNote){
        const staffNoteJson = JSON.parse(JSON.stringify(staffNote));
        return this.put(`api/staff-note/noteID/${staffNoteID}`, staffNoteJson);
    }
    async editProduct(productID, product){
        const productJson=JSON.parse(JSON.stringify(product));
        return this.post(`api/product//edit/${productID}`, productJson);
    }
    async hideIngredient(ingredientID){
        return this.get(`api/ingredient/hide/${ingredientID}`);
    }
    async hideProduct(productID) {
        return this.get(`api/product/hide/${productID}`);
    }
}
module.exports = Budabackend