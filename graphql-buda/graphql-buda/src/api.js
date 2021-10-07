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
    async findIngredientByIngredientID(ingredientID) {
        return this.get(`api/Ingredient/${ingredientID}`);
    }
    async findIngredientByName(ingredientName) {
        return this.get(`api/Ingredient/${ingredientName}`);
    }
    async findProductByProductID(productID) {
        return this.get(`api/product/productID/${productID}`);
    }
    async findAllProductByUserID(userID) {
        return this.get(`api/product/userID/${userID}/all`);
    }
    async findAllProductByProductGroupID(productGroupID) {
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
    async registerNewProduct(userID, productInput) {
        const productInputJson = JSON.parse(JSON.stringify(productInput));
        return this.post(`api/product/new/userID/${userID}`, productInputJson);
    }
    async createNewIngredient(userID, ingredientInput) {
        const ingredientInputJson = JSON.parse(JSON.stringify(ingredientInput));
        return this.post(`api/Ingredient/new/userID/${userID}`, ingredientInputJson);
    }
}
module.exports = Budabackend