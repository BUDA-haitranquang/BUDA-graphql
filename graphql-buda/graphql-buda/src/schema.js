const { gql } = require('apollo-server');
module.exports.typeDefs = gql`

type Product{
    productID: Int
    name: String
    description: String
    userID: Int
    pictureID: Int
    sellingPrice: Float
    alertAmount: Int
    amountLeft: Int
    costPerUnit: Float
    groupID: Int
    sellOrderItems: [SellOrderItem] 
    productLeftLogs: [ProductLeftLog]
}
type SellOrderItem{
    id: Int
}
type ProductLeftLog{
    id: Int
}
type Ingredient{
     ingredientID: Int
     name: String 
     description: String 
     amountLeft: Int
     price: Float
     userID: Int
     pictureID: Int
     alertAmountLeft: Int
     buyOrderItems: [BuyOrderItem]
}
type BuyOrderItem{
    ID: Int
}
type Query{
    findIngredientByIngredientID(ingredientID:Int): Ingredient
    findAllProductByUserID(userID: Int): [Product] 
    findProductByProductID(productID: Int): Product
    findAllProductByProductGroupID(productGroupID: Int): [Product] 
    findIngredientByName(ingredientName: String): [Ingredient]
}
input ProductInput {
    productID: Int
    name: String
    userID: Int
    pictureID: Int
    sellingPrice: Float
    amountLeft: Int
    costPerUnit: Float
    groupID: Int
}
input IngredientInput{
     ingredientID: Int
     name: String 
     amountLeft: Int
     price: Float
     userID: Int
     pictureID: Int
}
type Mutation{
    registerNewProduct(userID: Int, productInput: ProductInput): Product
    createNewIngredient(userID: Int, ingredientInput: IngredientInput): Ingredient
}
`;