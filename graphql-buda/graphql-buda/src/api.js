const { RESTDataSource } = require('apollo-datasource-rest');
class Budabackend extends RESTDataSource {
    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token);
    }
    constructor() {
        super();
        this.baseURL = "http://localhost:8080"
        //this.baseURL = 'http://192.168.1.10:8080/'
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

}
module.exports = Budabackend