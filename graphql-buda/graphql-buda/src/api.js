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
    async hideIngredient(ingredientID){
        return this.get(`api/ingredient/hide/${ingredientID}`);
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
    async hideProduct(productID) {
        return this.get(`api/product/hide/${productID}`);
    }
    async buyOrdersByUser(){
        return this.get(`api/buy-order/user/all/`);
    }
    async buyOrdersBySupplier(supplierID) {
        return this.get(`api/buy-order/supplier/${supplierID}/all`);
    }
    async sellOrdersByUser() {
        return this.get(`api/sell-order/all`);
    }
    async sellOrdersByCustomer(customerID) {
        return this.get(`api/sell-order/customer/${customerID}/all`);
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
    async updatePicture(picture){
        const pictureJson = JSON.parse(JSON.stringify(picture));
        return this.put(`api/picture`,pictureJson);
    }
    async updateSellOrder(sellOrder){
        const sellOrderJson = JSON.parse(JSON.stringify(sellOrder));
        return this.put(`api/sell-order/update`, sellOrderJson);   
    }
}
module.exports = Budabackend