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
     sellOrderItemID: Int
     sellOrder: SellOrder 
     product: Product
     quantity: Int
     pricePerUnit: Float
     userID: Int
     creationTime: String
     gender: Gender 
     ageGroup: AgeGroup 
     actualTotalSale: Float
     costPerUnit: Float
}
type ProductLeftLog{
     productLeftLogID: Int
     product: Product 
     amountLeftChange: Int 
     creationTime: String
     staffID: Int
     message: String 
     userID: Int
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
     buyOrderItemID: Int
     buyOrder: BuyOrder 
     ingredient: Ingredient 
     quantity: Int
     pricePerUnit: Float
     creationTime: String
     userID: Int
     supplierID: Int
}
type Purchase{
     purchaseID: Int
     user: User
     plan: Plan
     creationTime: String
     expiryDate: String
     message: String
     totalCost: Float
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
type BuyOrder{
     buyOrderID: Int
     supplier: Supplier
     creationTime: String
     status: Status
     totalCost: Float
     userID: Int
     buyOrderItems: [BuyOrderItem]
}
type SellOrder{
     sellOrderID: Int
     customer: Customer
     discount: Discount
     creationTime: String
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
type Customer{
     customerID: Int
     ageGroup: AgeGroup 
     gender: Gender 
     totalSpend: Float
     membershipID: Int
     name: String
     address: String 
     phoneNumber: String 
     userID: Int
     sellOrders: [SellOrder]
}
type Discount{
     discountID: Int
     name: String 
     description: String 
     cash: Float
     percentage: Float
     cashLimit: Float
     orderCount: Int
     expiryTime: String
     createdTime: String
     userID: Int
     sellOrders: [SellOrder]
     membershipTypes: [MembershipType]
     discountType: DiscountType 
}
type Supplier{
     supplierID: Int
     email: String 
     pictureID: Int
     name: String
     address: String 
     phoneNumber: String 
     userID: Int
}
type Plan{
    planID: Int
    purchases: [Purchase]
    name: String 
    price: Float
    duration: Int
    pictureID: Int
    description: String
}
type MembershipType{
     membershipTypeID: Int
     membershipName: String 
     description: String 
     userID: Int
     discount: Discount
     minimumSpend: Float
}
type Picture{
    pictureID: Int
    pictureLink: String
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
enum DiscountType {
    CASH_ONLY, 
    PERCENTAGE_ONLY, 
    BOTH
}
input ProductInput{
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
    sellOrderItems: [SellOrderItemInput] 
    productLeftLogs: [ProductLeftLogInput]
}
input SellOrderItemInput{
     sellOrderItemID: Int
     sellOrder: SellOrderInput
     product: ProductInput
     quantity: Int
     pricePerUnit: Float
     userID: Int
     creationTime: String
     gender: Gender 
     ageGroup: AgeGroup 
     actualTotalSale: Float
     costPerUnit: Float
}
input ProductLeftLogInput{
     productLeftLogID: Int
     product: ProductInput 
     amountLeftChange: Int 
     creationTime: String
     staffID: Int
     message: String 
     userID: Int
}
input IngredientInput{
     ingredientID: Int
     name: String 
     description: String 
     amountLeft: Int
     price: Float
     userID: Int
     pictureID: Int
     alertAmountLeft: Int
     buyOrderItems: [BuyOrderItemInput]
}
input BuyOrderItemInput{
     buyOrderItemID: Int
     buyOrder: BuyOrderInput 
     ingredient: IngredientInput 
     quantity: Int
     pricePerUnit: Float
     creationTime: String
     userID: Int
     supplierID: Int
}
input PurchaseInput{
    purchaseID: Int
     user: UserInput
     plan: PlanInput
     creationTime: String
     expiryDate: String
     message: String
     totalCost: Float
}
input UserInput{
     userID: Int
     userUUID: String 
     userName: String 
     password: String 
     email: String 
     phoneNumber: String 
     lastName: String 
     firstName: String 
     pictureID: Int
     purchases: [PurchaseInput] 
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
input BuyOrderInput {
     buyOrderID: Int
     supplier: SupplierInput
     creationTime: String
     status: Status
     totalCost: Float
     userID: Int
     buyOrderItems: [BuyOrderItemInput]
}
input SellOrderInput{
     sellOrderID: Int
     customer: CustomerInput
     discount: DiscountInput
     creationTime: String
     ageGroup: AgeGroup
     gender: Gender
     actualDiscountCash: Float
     actualDiscountPercentage: Float
     realCost: Float
     finalCost: Float
     userID: Int
     customerMessage: String
     status: Status
     sellOrderItems: [SellOrderItemInput]
}
input CustomerInput{
     customerID: Int
     ageGroup: AgeGroup 
     gender: Gender 
     totalSpend: Float
     membershipID: Int
     name: String
     address: String 
     phoneNumber: String 
     userID: Int
     sellOrders: [SellOrderInput]
}
input DiscountInput{
     discountID: Int
     name: String 
     description: String 
     cash: Float
     percentage: Float
     cashLimit: Float
     orderCount: Int
     expiryTime: String
     createdTime: String
     userID: Int
     sellOrders: [SellOrderInput]
     membershipTypes: [MembershipTypeInput]
     discountType: DiscountType
}
input SupplierInput{
     supplierID: Int
     email: String 
     pictureID: Int
     name: String
     address: String 
     phoneNumber: String 
     userID: Int
}
input MembershipTypeInput{
     membershipTypeID: Int
     membershipName: String 
     description: String 
     userID: Int
     discount: DiscountInput
     minimumSpend: Float
}
input PlanInput{
    planID: Int
    purchases: [PurchaseInput]
    name: String 
    price: Float
    duration: Int
    pictureID: Int
    description: String
}
input PictureInput{
    pictureID: Int
    pictureLink: String
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
    buyOrdersByUserID: [BuyOrder]
    buyOrdersBySupplierID(supplierID: Int): [BuyOrder]
    sellOrdersByUserID: [SellOrder]
    sellOrdersByCustomerID(customerID: Int): [SellOrder]
    customersByUser: [Customer]
    customerByPhone(phoneNumber: String): Customer 
    discountsByUser: [Discount]
    discount(discountID: Int): Discount
    suppliersByUser: [Supplier]
    supplierByPhone(phoneNumber: String): Supplier
    userLogin(email: String!, password: String!): Authenticate
    staffLogin(uuid: String!, password: String!): Authenticate
    plan(planID: Int): Plan 
    plans: [Plan]
    picture(pictureID: Int): Picture
}

type Mutation{
    newProduct(userID: Int, productInput: ProductInput): Product
    newIngredient(userID: Int, ingredientInput: IngredientInput): Ingredient
    newStaff(staffInput: StaffInput): Staff
    newUser(userRegister: UserRegister): User
    newBuyOrder(buyOrderInput: BuyOrderInput): BuyOrder
    newSellOrder(sellOrderInput: SellOrderInput): SellOrder
    newCustomer(customerInput: CustomerInput): Customer
    newDiscount(discountInput: DiscountInput): Discount
    newSupplier(supplierInput: SupplierInput): Supplier
    newPlan(planInput: PlanInput): Plan
    newPicture(pictureInput: PictureInput): Picture
    deleteSellOrder(sellOrderID: Int): String
    deletePlan(planID: Int): String
    deletePicture(pictureID: Int): String
    updatePicture(picture: PictureInput): Picture
}
`;