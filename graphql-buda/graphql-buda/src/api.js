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
        return this.get(`api/Ingredient/ingredientID/${ingredientID}`);
    }
    async ingredientsByName(ingredientName) {
        return this.get(`api/Ingredient/${ingredientName}`);
    }
    async product(productID) {
        return this.get(`api/product/productID/${productID}`);
    }
    async productsByUserID(userID) {
        return this.get(`api/product/userID/${userID}/all`);
    }
    async productsByGroupID(productGroupID) {
        return this.get(`api/product/product-groupID/${productGroupID}/all`);
    }
    async buyOrdersByUserID(){
        return this.get(`api/buy-order/user/all/`);
    }
    async buyOrdersBySupplierID(supplierID) {
        return this.get(`api/buy-order/supplier/${supplierID}/all`);
    }
    async sellOrdersByUserID() {
        return this.get(`api/sell-order/all`);
    }
    async sellOrdersByCustomerID(customerID) {
        return this.get(`api/sell-order/customer/${customerID}/all`);
    }
    async customersByUser(){
        return this.get(`api/customer/all`);
    }
    async customerByPhone(phoneNumber){
        return this.get(`api/customer/byphone`);
    }
    async discountsByUser(){
        return this.get(`api/discount/all`);
    }
    async discount(discountID){
        return this.get(`api/discount/discountID/${discountID}`);
    }
    async suppliersByUser(){
        return this.get(`api/supplier/all`);
    }
    async supplierByPhone(phoneNumber){
        return this.get(`api/supplier/byphone`);
    }
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
    async newProduct(userID, productInput) {
        const productInputJson = JSON.parse(JSON.stringify(productInput));
        return this.post(`api/product/new/userID/${userID}`, productInputJson);
    }
    async newIngredient(userID, ingredientInput) {
        const ingredientInputJson = JSON.parse(JSON.stringify(ingredientInput));
        return this.post(`api/Ingredient/new/userID/${userID}`, ingredientInputJson);
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
}
module.exports = Budabackend