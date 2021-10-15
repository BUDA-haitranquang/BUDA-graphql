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
    async ingredient_name(ingredientName) {
        return this.get(`api/Ingredient/${ingredientName}`);
    }
    async product_id(productID) {
        return this.get(`api/product/productID/${productID}`);
    }
    async product_user(userID) {
        return this.get(`api/product/userID/${userID}/all`);
    }
    async product_group(productGroupID) {
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
    async newproduct(userID, productInput) {
        const productInputJson = JSON.parse(JSON.stringify(productInput));
        return this.post(`api/product/new/userID/${userID}`, productInputJson);
    }
    async newingredient(userID, ingredientInput) {
        const ingredientInputJson = JSON.parse(JSON.stringify(ingredientInput));
        return this.post(`api/Ingredient/new/userID/${userID}`, ingredientInputJson);
    }
    async newstaff(){
        const staffInputJson = JSON.parse(JSON.stringify(staffInput));
        return this.post(`api/staff/register`, staffInputJson);
    }
    async newuser(){
        const userRegisterJson = JSON.parse(JSON.stringify(userRegister));
        return this.post(`api/user/register`, userRegisterJson);
    }
    async userlogin(email, password) {
        return this.post('api/user/login', {
            email: email,
            password: password,
        })
    }
    async stafflogin(uuid, password) {
        return this.post('api/staff/login', {
            uuid: uuid,
            password: password,
        })
    }

}
module.exports = Budabackend