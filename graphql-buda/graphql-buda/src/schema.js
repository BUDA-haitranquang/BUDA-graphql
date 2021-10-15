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
type Purchase{
    id: Int
}
type User{
     userID: Int
     userUUID: String 
     userName: String 
     password: String 
     email: String 
     phoneNumber: String 
     lastName: String 
     firstName: String 
     pictureID: Int
     purchases: [Purchase] 
}
type UserLogin{
    email: String 
    password: String 
}
input UserRegister{
    username: String
    phoneNumber: String
    password: String
    email: String
    firstName: String
    lastName: String
}
type Staff{
    staffID: Int
    name: String 
    phoneNumber: String 
    password: String 
    address: String 
    userID: Int  
    staffPosition: StaffPosition
    staffUUID: String
    salary: Float
}
type StaffLogin{
    uuid: String 
    password: String 
}
enum StaffPosition{
    MANAGER, 
    BASIC
}
type Authenticate {
  accessToken: String!
  refreshToken: String!
}
type Query{
    ingredient(ingredientID:Int): Ingredient
    product_user(userID: Int): [Product] 
    product_id(productID: Int): Product
    product_group(productGroupID: Int): [Product] 
    ingredient_name(ingredientName: String): [Ingredient]
    # userlogin(userLogin: UserLogin): User
    # stafflogin(stafflogin: StaffLogin): Staff
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
input StaffInput{
    staffID: Int
    name: String 
    phoneNumber: String 
    password: String 
    address: String 
    userID: Int  
    staffPosition: StaffPosition
    staffUUID: String
    salary: Float
}
type Mutation{
    newproduct(userID: Int, productInput: ProductInput): Product
    newingredient(userID: Int, ingredientInput: IngredientInput): Ingredient
    newstaff(staffInput: StaffInput): Staff
    newuser(userRegister: UserRegister): User
    userlogin(email: String!, password: String!): Authenticate
    stafflogin(uuid: String!, password: String!): Authenticate
}
`;