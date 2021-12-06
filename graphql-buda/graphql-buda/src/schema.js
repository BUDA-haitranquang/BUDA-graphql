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
type FixedCost{
     fixedCostID: Int
     name: String
     description: String 
     moneyAmount: Float
     period: Int
     userID: Int
     fixedCostBills: [FixedCostBill] 
}
type FixedCostBill{
     fixedCostBillID: Int
     fixedCost: FixedCost 
     userID: Int
     totalSpend: Float
     message: String 
     creationTime: String
     dueTime: String
     status: Status
}
type OtherCost{
     otherCostID: Int
     userID: Int
     totalCost: Float
     creationTime: String
     name: String 
     description: String 
     status: Status 
}
type ExpenseByTimeStatistics{
     timePeriod: String 
     expense: Float
}
type AgeGroupStatistics{
     ageGroup: AgeGroup 
     totalSpend: Float
}
type GenderStatistics{
     gender: Gender 
     totalSpend: Float
}
type ProductStatistics{
     productID: Int
     name: String 
     totalRevenue: Float
}
type RevenueByTimeStatistics{
     timePeriod: String 
     revenue: Float
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
    productID: Int!
    name: String!
    description: String
    userID: Int
    pictureID: Int
    sellingPrice: Float = 0
    alertAmount: Int = 0
    amountLeft: Int = 0
    costPerUnit: Float = 0
    groupID: Int
    sellOrderItems: [SellOrderItemInput] 
    productLeftLogs: [ProductLeftLogInput]
}
input SellOrderItemInput{
     sellOrderItemID: Int!
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
     productLeftLogID: Int!
     product: ProductInput 
     amountLeftChange: Int!
     creationTime: String
     staffID: Int
     message: String 
     userID: Int
}
input IngredientInput{
     ingredientID: Int!
     name: String! 
     description: String 
     amountLeft: Int = 0
     price: Float = 0
     userID: Int
     pictureID: Int
     alertAmountLeft: Int = 0
     buyOrderItems: [BuyOrderItemInput]
}
input BuyOrderItemInput{
     buyOrderItemID: Int!
     buyOrder: BuyOrderInput 
     ingredient: IngredientInput 
     quantity: Int = 0
     pricePerUnit: Float = 0
     creationTime: String
     userID: Int
     supplierID: Int!
}
input PurchaseInput{
     purchaseID: Int!
     user: UserInput
     plan: PlanInput
     creationTime: String
     expiryDate: String!
     message: String
     totalCost: Float = 0
}
input UserInput{
     userID: Int!
     userUUID: String !
     userName: String! 
     password: String !
     email: String !
     phoneNumber: String! 
     lastName: String !
     firstName: String !
     pictureID: Int 
     purchases: [PurchaseInput] 
}
input StaffInput{
    staffID: Int!
    name: String !
    phoneNumber: String 
    password: String !
    address: String 
    userID: Int  
    staffPosition: StaffPosition
    staffUUID: String!
    salary: Float = 0
}
input BuyOrderInput {
     buyOrderID: Int!
     supplier: SupplierInput
     creationTime: String
     status: Status!
     totalCost: Float = 0
     userID: Int
     buyOrderItems: [BuyOrderItemInput]
}
input SellOrderInput{
     sellOrderID: Int!
     customer: CustomerInput
     discount: DiscountInput
     creationTime: String
     ageGroup: AgeGroup
     gender: Gender
     actualDiscountCash: Float = 0
     actualDiscountPercentage: Float = 0
     realCost: Float = 0
     finalCost: Float = 0
     userID: Int
     customerMessage: String
     status: Status
     sellOrderItems: [SellOrderItemInput]
}
input CustomerInput{
     customerID: Int
     ageGroup: AgeGroup 
     gender: Gender 
     totalSpend: Float = 0
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
     cash: Float = 0
     percentage: Float = 0
     cashLimit: Float = 0
     orderCount: Int = 0
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
     minimumSpend: Float = 0
}
input PlanInput{
    planID: Int
    purchases: [PurchaseInput]
    name: String 
    price: Float = 0
    duration: Int = 0
    pictureID: Int
    description: String
}
input PictureInput{
    pictureID: Int
    pictureLink: String
}
input FixedCostInput{
     fixedCostID: Int
     name: String
     description: String 
     moneyAmount: Float
     period: Int
     userID: Int
     fixedCostBills: [FixedCostBillInput] 
}
input FixedCostBillInput{
     fixedCostBillID: Int!
     fixedCost: FixedCostInput 
     userID: Int
     totalSpend: Float!
     message: String 
     creationTime: String
     dueTime: String!
     status: Status!
}
input OtherCostInput{
     otherCostID: Int!
     userID: Int
     totalCost: Float!
     creationTime: String
     name: String! 
     description: String 
     status: Status! 
}
type Authenticate {
  accessToken: String!
  refreshToken: String!
}
type Query{
    ingredient(ingredientID:Int): Ingredient
#     ingredientsByName(ingredientName: String): [Ingredient]
    ingredientsByUser: [Ingredient]
    hiddenIngredients: [Ingredient]
    productsByUser: [Product] 
    product(productID: Int): Product
    productsByGroup(productGroupID: Int): [Product] 
    hiddenProducts: [Product]
    buyOrdersByUser: [BuyOrder]
    buyOrdersBySupplier(supplierID: Int): [BuyOrder]
    buyOrdersLastXDaysByUser(X: Int): [BuyOrder]
    incompletedBuyOrdersByUser: [BuyOrder]
    buyOrdersByStatusAndUser(status: Status): [BuyOrder]
    buyOrderExpenseWeekly: [ExpenseByTimeStatistics]
    buyOrderExpenseMonthly: [ExpenseByTimeStatistics]
    buyOrderExpenseThisMonth: [ExpenseByTimeStatistics]
    sellOrdersByUser: [SellOrder]
    sellOrdersByCustomer(customerID: Int): [SellOrder]
    sellOrder(sellOrderID: Int): SellOrder
    incompletedSellOrdersByUser: [SellOrder]
    sellOrdersXDaysByUser(X: Int): [SellOrder]
    sellOrdersByStatusAndUser(status: Status): [SellOrder]
    customersByUser: [Customer]
#     customerByPhone(phoneNumber: String): Customer 
    discountsByUser: [Discount]
    discount(discountID: Int): Discount
    suppliersByUser: [Supplier]
#     supplierByPhone(phoneNumber: String): Supplier
    plan(planID: Int): Plan 
    plans: [Plan]
    picture(pictureID: Int): Picture
    fixedCostsByUser: [FixedCost]
    otherCostsByUser: [OtherCost]
    incompletedOtherCostsByUser: [OtherCost]
    otherCostsXDaysByUser(X: Int): [OtherCost]  
    fixedCostBillsByUser: [FixedCostBill]
    fixedCostBillsByFixedCost(fixedCostID: Int): [FixedCostBill]   
    fixedCostBillsXDaysByUser(X: Int): [FixedCostBill] 
    incompletedFixedCostBillsByUser: [FixedCostBill]
    totalSpendAgeGroupByUser: [AgeGroupStatistics]
    totalSpendGenderByUser: [GenderStatistics]
    totalRevenueProductByUser: [ProductStatistics]
    revenueWeekly: [RevenueByTimeStatistics]
    revenueMonthly: [RevenueByTimeStatistics]
    revenueWeekdays: [RevenueByTimeStatistics]
    revenueDaysThisMonth: [RevenueByTimeStatistics]
}

type Mutation{
    newProduct(productInput: ProductInput): Product
    newIngredient(ingredientInput: IngredientInput): Ingredient
    newStaff(staffInput: StaffInput): Staff
    newUser(userRegister: UserRegister): Authenticate
    newBuyOrder(buyOrderInput: BuyOrderInput): BuyOrder
    newSellOrder(sellOrderInput: SellOrderInput): SellOrder
    newCustomer(customerInput: CustomerInput): Customer
    newDiscount(discountInput: DiscountInput): Discount
    newSupplier(supplierInput: SupplierInput): Supplier
    newPlan(planInput: PlanInput): Plan
    newPicture(pictureInput: PictureInput): Picture
    newFixedCost(fixedCostInput: FixedCostInput): FixedCost
    newOtherCost(otherCostInput: OtherCostInput): OtherCost
    newFixedCostBill(fixedCostBillInput: FixedCostBillInput): FixedCostBill
    userLogin(email: String!, password: String!): Authenticate
    staffLogin(uuid: String!, password: String!): Authenticate
#     deleteProduct(productID: Int): String
    deleteSellOrder(sellOrderID: Int): String
    deletePlan(planID: Int): String
    deletePicture(pictureID: Int): String
    deleteFixedCost(fixedCostID: Int): String
    deleteBuyOrder(buyOrderID: Int): String
    updatePicture(picture: PictureInput): Picture
    updateSellOrder(sellOrder: SellOrderInput): SellOrder
    updateFixedCost(fixedCost: FixedCostInput): FixedCost
    hideProduct(productID: Int): Product
    hideIngredient(ingredientID: Int): Ingredient 
}
`;