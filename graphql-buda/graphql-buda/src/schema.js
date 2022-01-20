const { gql } = require('apollo-server');
module.exports.typeDefs = gql`

type Product{
    productID: Int
    name: String
    description: String
    userID: Int
    visible: Boolean
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
     visible: Boolean
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
     status: Status
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
     enabled: Boolean
     pictureID: Int
     purchases: [Purchase] 
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
    account: String!
    email: String
}
type StaffLogin{
    account: String 
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
     visible: Boolean
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
     visible: Boolean
}
type Plan{
    planID: Int
    purchases: [Purchase]
    name: String 
    price: Float
    duration: Int
    pictureID: Int
    description: String
    planType: PlanType
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
    userID: Int
}
type FixedCost{
     fixedCostID: Int
     name: String
     description: String 
     moneyAmount: Float
     period: Int
     userID: Int
     visible: Boolean
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
     visible: Boolean
}
type SalaryLog{
     salaryLogID: Int
     staffID: Int
     salary: Float
     creationTime: String
     userID: Int
}
type StaffNote{
     staffNoteID: Int
     userID: Int
     staffID: Int
     noteDate: String
     message: String 
     seen: Boolean
}
type Notification{
    notificationID: Int
    userID: Int
    creationTime: String
    message: String
    seen: Boolean
}
type WarrantyOrder{
     warrantyOrderID: Int
     userID: Int
     product: Product
     sellOrder: SellOrder
     customer: Customer
     customerMessage: String 
     creationTime: String 
     status: Status 
}
type QuantityLog{
    amountLeftChange: Int
    message: String
}
type ProductGroup{
     productGroupID: Int
     name: String
     userID: Int
     products: [Product]
}
type ProductComponent{
     productComponentID: Int
     ingredient: Ingredient 
     product: Product
     requiredQuantity: Int
     userID: Int
     totalCost: Float
}
type IngredientLeftLog{
     ingredientLeftLogID: Int
     ingredient: Ingredient
     amountLeftChange: Int
     creationTime: String
     staffID: Int
     message: String
     userID: Int
}
type MailConfirmationToken{
     id: Int
     token: String
     createdAt: String
     expiredAt: String
     confirmedAt: String
     mailTokenType: MailTokenType 
     targetEmail: String 
     user: User 
}
type PaySlip{
     paySlipID: Int
     supplier: Supplier 
     receiverName: String 
     receiverContact: String
     creationTime: String
     message: String 
     totalCost: Int
     userID: Int
}
type ProductCombo{
     productComboID: Int
     name: String 
     description: String 
     userID: Int
     productComboItems: [ProductComboItem]
}
type ProductComboItem{
     id: Int
     userID: Int
     productCombo: ProductCombo 
     product: Product 
     quantity: Int
     pricePerUnit: Float
}
type Receipt{
     receiptID: Int
     totalCost: Int
     customer: Customer 
     senderName: String 
     senderContact: String 
     creationTime: String
     message: String
     userID: Int
}
type UserLogin{
    email: String 
    password: String 
}
type Role{
     roleID: Int
     name: String
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
    PREPARING,
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
enum PlanType {
     BASIC, 
     PRO, 
     PREMIUM
}
enum MailTokenType{
    REGISTER, 
    UPDATE_INFO, 
    UPDATE_PASSWORD 
}
input UserRegister{
    username: String
    phoneNumber: String
    password: String
    email: String
    firstName: String
    lastName: String
}
input UpdateUserPassword{
    currentPassword: String! 
    newPassword: String!
    confirmNewPassword: String!
}
input UpdateEmail{
     email: String!
}
input ProductInput{
    productID: Int
    name: String!
    description: String
    userID: Int
    visible: Boolean
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
     amountLeftChange: Int!
     creationTime: String
     staffID: Int
     message: String 
     userID: Int
}
input IngredientInput{
     ingredientID: Int
     name: String
     description: String 
     amountLeft: Int = 0
     price: Float = 0
     visible: Boolean 
     userID: Int
     pictureID: Int
     alertAmountLeft: Int = 0
     buyOrderItems: [BuyOrderItemInput]
}
input BuyOrderItemInput{
     buyOrderItemID: Int
     buyOrder: BuyOrderInput 
     ingredient: IngredientInput 
     quantity: Int = 0
     pricePerUnit: Float = 0
     creationTime: String
     userID: Int
     supplierID: Int!
}
input PurchaseInput{
     purchaseID: Int
     user: UserInput
     plan: PlanInput
     creationTime: String
     expiryDate: String!
     message: String
     totalCost: Float = 0
     status: Status
}
input UserInput{
     userID: Int
     userUUID: String !
     userName: String! 
     password: String !
     email: String !
     phoneNumber: String! 
     lastName: String !
     firstName: String !
     enabled: Boolean
     pictureID: Int 
     purchases: [PurchaseInput] 
}
input StaffInput{
    staffID: Int
    name: String !
    phoneNumber: String 
    password: String !
    address: String 
    userID: Int  
    staffPosition: StaffPosition
    staffUUID: String
    salary: Float = 0
    account: String
    email: String
}
input BuyOrderInput {
     buyOrderID: Int
     supplier: SupplierInput
     creationTime: String
     status: Status!
     totalCost: Float = 0
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
     actualDiscountCash: Float = 0
     actualDiscountPercentage: Float = 0
     realCost: Float = 0
     finalCost: Float = 0
     userID: Int
     customerMessage: String
     status: Status
     sellOrderItems: [SellOrderItemInput]
}
input Value{
     value: Int
}
input newSellOrder{
     customer: CustomerInput
     discountID: Int
     customer_message: String 
     address: String 
     status: Status!
     productIDList: [Int]
     numberProductList: [Int]
}
input CustomerInput{
     customerID: Int
     ageGroup: AgeGroup 
     gender: Gender 
     totalSpend: Float = 0
     membershipID: Int
     name: String
     address: String 
     phoneNumber: String! 
     userID: Int
     visible: Boolean
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
     visible: Boolean
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
    planType: PlanType
}
input PictureInput{
    pictureID: Int
    pictureLink: String
    userID: Int
}
input FixedCostInput{
     fixedCostID: Int
     name: String
     description: String 
     moneyAmount: Float
     period: Int
     userID: Int
     visible: Boolean
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
     visible: Boolean
}
input SalaryLogInput{
     salaryLogID: Int
     staffID: Int
     salary: Float
     creationTime: String
     userID: Int
}
input StaffNoteInput{
     staffNoteID: Int
     userID: Int
     staffID: Int
     noteDate: String
     message: String 
     seen: Boolean
}
input WarrantyOrderInput{
    productID: Int!
    sellOrderID: Int!
    customerID: Int!
    customerMessage: String
}
input QuantityLogInput{
     amountLeftChange: Int
     message: String
}
input ProductGroupInput{
     productGroupID: Int
     name: String
     userID: Int
     products: [ProductInput]
}
input ProductComponentInput{
     productComponentID: Int
     ingredient: IngredientInput 
     product: ProductInput
     requiredQuantity: Int
     userID: Int
     totalCost: Float
}
input IngredientLeftLogInput{
     ingredientLeftLogID: Int
     ingredient: IngredientInput
     amountLeftChange: Int
     creationTime: String
     staffID: Int
     message: String
     userID: Int
}
input RoleInput{
     roleID: Int
     name: String
}
type Authenticate {
  accessToken: String!
  refreshToken: String!
}
input JwtSimple{
     token: String
}
type Query{
    ingredient(ingredientID:Int): Ingredient
    ingredientsByUser: [Ingredient]
    hiddenIngredients: [Ingredient]
    alertIngredients: [Ingredient]
    ingredientLeftLog(ingredientLeftLogID: Int): IngredientLeftLog
    ingredientLeftLogsByIngredient(ingredientID: Int): [IngredientLeftLog]
    ingredientLeftLogsByUser: [IngredientLeftLog]
    ingredientLeftLogsByStaff(staffID: Int): [IngredientLeftLog]
    productsByUser: [Product] 
    product(productID: Int): Product
    productLeftLog(productLeftLogID: Int): ProductLeftLog
    productLeftLogsByProduct(productID: Int): [ProductLeftLog]
    productLeftLogsByUser: [ProductLeftLog]
    productLeftLogsByStaff(staffID: Int): [ProductLeftLog]
    productsByGroup(productGroupID: Int): [Product] 
    hiddenProducts: [Product]
    alertProducts: [Product]
    buyOrdersByUser: [BuyOrder]
    buyOrdersBySupplier(supplierID: Int): [BuyOrder]
    buyOrdersLastXDaysByUser(X: Int): [BuyOrder]
    incompletedBuyOrdersByUser: [BuyOrder]
    buyOrdersByStatusAndUser(status: Status): [BuyOrder]
    sellOrdersByUser: [SellOrder]
    sellOrdersByCustomer(customerID: Int): [SellOrder]
    sellOrder(sellOrderID: Int): SellOrder
    incompletedSellOrdersByUser: [SellOrder]
    sellOrdersXDaysByUser(X: Int): [SellOrder]
    sellOrdersByStatusAndUser(status: Status): [SellOrder]
    customersByUser: [Customer]
    membershipType(membershipTypeID: Int): MembershipType
    membershipTypeByUser: [MembershipType]
    discountsByUser: [Discount]
    discount(discountID: Int): Discount
    supplier(supplierID: Int): Supplier
    suppliersByUser: [Supplier]
    plans: [Plan]
    purchaseByUser: [Purchase]
    picture(pictureID: Int): Picture
    fixedCostsByUser: [FixedCost]
    hiddenFixedCosts: [FixedCost]
    otherCostsByUser: [OtherCost]
    incompletedOtherCostsByUser: [OtherCost]
    otherCostsXDaysByUser(X: Int): [OtherCost] 
    hiddenOtherCosts: [OtherCost]
    fixedCostBillsByUser: [FixedCostBill]
    fixedCostBillsByFixedCost(fixedCostID: Int): [FixedCostBill]   
    fixedCostBillsXDaysByUser(X: Int): [FixedCostBill] 
    incompletedFixedCostBillsByUser: [FixedCostBill]
    staffsByUser: [Staff]
#     salaryLog(salaryLogId: Int): SalaryLog
    salaryLogsByUser: [SalaryLog]
    salaryLogsByStaff: [SalaryLog]
    staffNotesByUser: [StaffNote]
    staffNotesByStaff(staffID: Int): [StaffNote]
    unseenStaffNotesByStaff(staffID: Int): [StaffNote]
    staffNote(staffNoteID: Int): StaffNote  
    notiByUser: [Notification]
    pendingNotiByUser: [Notification]
    warrantyOrdersByUser: [WarrantyOrder]
    warrantyOrdersByCustomer(customerID: Int): [WarrantyOrder]
    warrantyOrdersByProduct(productID: Int): [WarrantyOrder]
    buyOrderItemsByBuyOrder(buyOrderID: Int): [BuyOrderItem]
    buyOrderItemsByIngredient(ingredientID: Int): [BuyOrderItem]
    user(userID: Int): User
    currentUser: User
    userByUUID(UUID: Int): User
    componentsByProduct(productID: Int): [ProductComponent]
    productContainIngredient(ingredientID: Int): [Product] 
    productGroupsByUser: [ProductGroup]
    productsByProductGroup(productGroupID: Int): [Product]
    sellOrderItemsBySellOrder(sellOrderID: Int): [SellOrderItem]
    sellOrderItemsByProduct(productID: Int): [SellOrderItem] 
    totalSpendAgeGroupByUser: [AgeGroupStatistics]
    totalSpendAgeGroupThisMonthByUser: [AgeGroupStatistics]
    totalSpendGenderByUser: [GenderStatistics]
    totalSpendGenderThisMonthByUser: [GenderStatistics]
    totalRevenueProductByUser: [ProductStatistics]
    revenueWeekly: [RevenueByTimeStatistics]
    revenueMonthly: [RevenueByTimeStatistics]
    revenueWeekdays: [RevenueByTimeStatistics]
    revenueDaysThisMonth: [RevenueByTimeStatistics]
    otherCostExpenseWeekly: [ExpenseByTimeStatistics]
    otherCostExpenseThisMonth: [ExpenseByTimeStatistics]
    otherCostExpenseMonthly: [ExpenseByTimeStatistics] 
    fixedCostBillExpenseWeekly: [ExpenseByTimeStatistics]
    fixedCostBillExpenseThisMonth: [ExpenseByTimeStatistics]
    fixedCostBillExpenseMonthly: [ExpenseByTimeStatistics]
    salaryLogExpenseThisMonth: [ExpenseByTimeStatistics]
    salaryLogExpenseMonthly: [ExpenseByTimeStatistics]
    buyOrderExpenseWeekly: [ExpenseByTimeStatistics]
    buyOrderExpenseMonthly: [ExpenseByTimeStatistics]
    buyOrderExpenseThisMonth: [ExpenseByTimeStatistics]
}

type Mutation{
    newProduct(productInput: ProductInput): Product
    newIngredient(ingredientInput: IngredientInput): Ingredient
    newStaff(staffInput: StaffInput): Staff
    newUser(userRegister: UserRegister): String
    newBuyOrder(buyOrderInput: BuyOrderInput): BuyOrder
    newSellOrder(sellOrderInput: newSellOrder): SellOrder
    newCustomer(customerInput: CustomerInput): Customer
    newMembershipType(membershipTypeInput: MembershipTypeInput): MembershipType
    newDiscount(discountInput: DiscountInput): Discount
    newSupplier(supplierInput: SupplierInput): Supplier
    newPlan(planInput: PlanInput): Plan
    newPurchase(purchaseInput: PurchaseInput): Purchase
    newPicture(pictureInput: PictureInput): Picture
    newFixedCost(fixedCostInput: FixedCostInput): FixedCost
    newOtherCost(otherCostInput: OtherCostInput): OtherCost
    newFixedCostBill(fixedCostBillInput: FixedCostBillInput): FixedCostBill
    newSalaryLog(salaryLogInput: SalaryLogInput): SalaryLog
    newStaffNote(staffNoteInput: StaffNoteInput): StaffNote
    newSellOrderItem(sellOrderItemInput: SellOrderItemInput): SellOrderItem
    newProductGroup(productGroupInput: ProductGroupInput): ProductGroup
    newWarrantyOrder(warrantyOrderInput: WarrantyOrderInput): WarrantyOrder
    newAccessToken(jwtSimple: JwtSimple): Authenticate
    confirmRegister(token: String): User
    userLogin(email: String!, password: String!): Authenticate
    staffLogin(account: String!, password: String!): Authenticate
    loginGoogle(jwtSimple: JwtSimple): Authenticate
#     deleteProduct(productID: Int): String
    deleteSellOrder(sellOrderID: Int): String
    deletePlan(planID: Int): String
    deletePicture(pictureID: Int): String
    deleteFixedCost(fixedCostID: Int): String
    deleteBuyOrder(buyOrderID: Int): String
    deleteStaff(staffID: Int): String
    deleteSalaryLog(salaryLogID: Int): String
    deleteStaffNote(staffNoteID: Int): String
    deleteBuyOrderItem(buyOrderItemID: Int): String
    deleteUser(userID: Int): String
    deleteSellOrderItem(sellOrderItemID: Int): String
    deleteProductGroup(productGroupID: Int): String
    updatePicture(picture: PictureInput): Picture
    updateSellOrder(sellOrder: SellOrderInput): SellOrder
    updateFixedCost(fixedCost: FixedCostInput): FixedCost
    updateSupplier(supplier: SupplierInput): Supplier
    editIngredientQuantity(ingredientID: Int, quantityLog: QuantityLogInput): Ingredient
    editIngredient(ingredientID: Int, ingredient: IngredientInput): Ingredient
    editProductQuantity(productID: Int, quantityLog: QuantityLogInput): Product
    editProduct(productID: Int, product: ProductInput): Product
    updateStaff(staffID: Int, staff: StaffInput): Staff
    updateStaffNote(staffNoteID: Int, staffNote: StaffNoteInput): StaffNote
    updateProduct(productID: Int, product: ProductInput): Product
    updateCustomer(customer: CustomerInput): Customer
    updateUser(user: UserInput): User
    updateUserPassword(updateUserPassword: UpdateUserPassword): String
    forgotPassword(email: String): String
    updateForgotPassword(token: String, updateUserPassword:UpdateUserPassword): String
    updateUserEmail(updateUserEmail: UpdateEmail): String
    confirmUpdateEmail(token: String): User
    updateSellOrderItem(sellOrderItemID: Int, sellOrderItem: SellOrderItemInput): SellOrderItem
    hideProduct(productID: Int): Product
    hideIngredient(ingredientID: Int): Ingredient 
    hideCustomer(customerID: Int): Customer
    hideFixedCost(fixedCostID: Int): FixedCost
    hideSupplier(supplierID: Int): Supplier
    hideOtherCost(otherCostID: Int): OtherCost
    addIngredientToProduct(productID: Int, ingredientID: Int): ProductComponent
    removeIngredientFromProduct(productID: Int, ingredientID: Int): String
    addProductToProductGroup(productGroupID: Int, productID: Int): ProductGroup
    removeProductFromProductGroup(productGroupID: Int, productID: Int): String
}
`;