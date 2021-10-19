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
type Supplier{
    id: Int
}
type Customer{
    id: Int
}
type Discount{
    id: Int
}
type BuyOrder{
     buyOrderID: Int
     supplier: Supplier
     #creationTime: ZonedDateTime
     status: Status
     totalCost: Float
     userID: Int
     buyOrderItems: [BuyOrderItem]
}
type SellOrder{
     sellOrderID: Int
     customer: Customer
     discount: Discount
    # creationTime: ZonedDateTime
     ageGroup: AgeGroup
     gender: Gender
     actualDiscountCash: Float
     actualDiscountPercentage: Float
     realCost: Float
     finalCost: Float
     userID: Int
     customerMessage: String
     status: Status
     sellOrderItems: [SellOrderItem]
}
enum StaffPosition{
    MANAGER, 
    BASIC
}
enum Gender{
    MALE,
    FEMALE,
    UNKNOWN
}
enum AgeGroup{
    FROM_0_TO_12, 
    FROM_12_TO_18, 
    FROM_18_TO_24, 
    FROM_24_TO_30,
    FROM_30_TO_40,
    FROM_40_TO_50,
    FROM_50_TO_65,
    FROM_65_AND_ABOVE,
    UNKNOWN
}
enum Status{
    FINISHED, 
    DELIVERING, 
    PACKAGING, 
    RECEIVING, 
    DELAYING, 
    CANCELLED
}
type Authenticate {
  accessToken: String!
  refreshToken: String!
}
type Query{
    ingredient(ingredientID:Int): Ingredient
    productsByUserID(userID: Int): [Product] 
    product(productID: Int): Product
    productsByGroupID(productGroupID: Int): [Product] 
    ingredientsByName(ingredientName: String): [Ingredient]
    buyordersByUserID(userID: Int): [BuyOrder]
    buyordersBySupplierID(supplierID: Int): [BuyOrder]
    sellordersByUserID(userID: Int): [SellOrder]
    sellordersByCustomerID(customerID: Int): [SellOrder]
    userLogin(email: String!, password: String!): Authenticate
    staffLogin(uuid: String!, password: String!): Authenticate
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
    newProduct(userID: Int, productInput: ProductInput): Product
    newIngredient(userID: Int, ingredientInput: IngredientInput): Ingredient
    newStaff(staffInput: StaffInput): Staff
    newUser(userRegister: UserRegister): User
}
`;