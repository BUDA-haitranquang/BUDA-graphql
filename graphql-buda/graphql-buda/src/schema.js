const { gql } = require('apollo-server');
module.exports.typeDefs = gql`

type Product{
    productID: Int
    productSKU: String
    name: String
    description: String
    userID: Int
    visible: Boolean
    picture: Picture
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
type ProductLogInfo{
     userID: Int
     productID: Int
     productSKU: String
     name: String
     amountLeft: Int
}
type Ingredient{
     ingredientID: Int
     ingredientSKU: String
     name: String 
     description: String 
     amountLeft: Int
     price: Float
     visible: Boolean
     userID: Int
     picture: Picture
     alertAmountLeft: Int
     buyOrderItems: [BuyOrderItem]
}
type IngredientInfo{
     userID: Int
     ingredientID: Int
     ingredientSKU: String
     name: String
     price: Float
     amountLeft: Int
     alertAmountLeft: Int
     description: String
}
type ProductInfo{
     userID: Int
     productID: Int
     productSKU: String
     name: String
     sellingPrice: Float
     amountLeft: Int
     alertAmount: Int
     costPerUnit: Float
     description: String
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
type BuyOrder{
     buyOrderID: Int
     supplier: Supplier
     creationTime: String
     finishTime: String
     status: Status
     totalCost: Float
     userID: Int
     staff: Staff
     buyOrderItems: [BuyOrderItem]
     textID: String
}
type SellOrder{
     sellOrderID: Int
     customer: Customer
     discount: Discount
     creationTime: String
     finishTime: String
     ageGroup: AgeGroup
     gender: Gender
     actualDiscountCash: Float
     actualDiscountPercentage: Float
     realCost: Float
     finalCost: Float
     userID: Int
     staff: Staff
     customerMessage: String
     status: Status
     sellOrderItems: [SellOrderItem]
     textID: String
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
     discountCode: String
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
type IngredientLogInfo{
     userID: Int
     ingredientID: Int
     ingredientSKU: String
     name: String
     amountLeft: Int
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
type ViewBuyOrder{
     count: Int
     buyOrders: [BuyOrder]
}
type ViewSellOrder{
     count: Int
     sellOrders: [SellOrder]
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
type ExpenseByTimePeriodStatistics{
     timeFrom: String 
     timeTo: String 
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
type ProductRanking{
     productID: Int
     name: String 
     revenue: Float
     profit: Float
     sellNumber: Int
     returnNumber: Int
     returnPrice: Float
}
type RevenueByTimeStatistics{
     timePeriod: String 
     revenue: Float
}
type RevenueByTimePeriodStatistics{
     timeFrom: String 
     timeTo: String 
     revenue: Float
}
type ActiveHoursStatistics{
     hour: String
     totalCount: Int
}
type BusinessReportByTimeStatistics{
    timePeriod: String 
    revenue: Float
    expense: Float
    profit: Float
}
type BusinessByTimePeriodStatistics {
   timeFrom: String 
   timeTo: String
   revenue: Float
   expense: Float
   profit: Float
}
type Issue{
     issueID: Int
     description: String
     userID: Int
     creationTime: String
}
type Store{
     storeID: Int
     userID: Int
     name: String
     address: String
}
type Notifier{
     notifcationID: Int
     creationTime: String
     expireTime: String
     title: String 
     body: String
}
type PrintBuyOrder{
     buyOrder: BuyOrder
     store: Store
}
type PrintSellOrder{
     sellOrder: SellOrder
     store: Store
}
type UserPlanStatus{
     userID: Int
     planType: PlanType
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
    CANCELLED,
    RETURNED
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
enum IssueType{
     TECHNICAL,
     OTHER
}
enum PaymentMethod{
     ZALOPAY
}
input PeriodDTO{
     from: String
     to: String
}
input ViewBuyOrderFilter{
     supplierName: String 
     from: String
     to: String
     status: Status
     textID: String
}
input UpdateBuyOrderStatus{
     buyOrderID: Int
     status: Status
}
input PrintBuyOrderInput{
     buyOrderID: Int
     storeID: Int
}
input UpdateSellOrderStatus{
     sellOrderID: Int
     status: Status
}
input ViewSellOrderFilter{
     customerName: String
     from: String
     to: String
     status: Status
     textID: String
}
input PrintSellOrderInput{
     sellOrderID: Int
     storeID: Int
}
input ProductInput{
    productID: Int
    productSKU: String
    name: String
    description: String
    userID: Int
    visible: Boolean
    picture: PictureInput
    sellingPrice: Float 
    alertAmount: Int 
    amountLeft: Int 
    costPerUnit: Float 
    groupID: Int
    sellOrderItems: [SellOrderItemInput] 
    productLeftLogs: [ProductLeftLogInput]
}
input UpdateProduct{
    productID: Int
    productSKU: String
    name: String
    description: String
    userID: Int
    visible: Boolean
    picture: PictureInput
    sellingPrice: Float
    alertAmount: Int 
    amountLeft: Int 
    costPerUnit: Float 
    groupID: Int
    sellOrderItems: [SellOrderItemInput] 
    productLeftLogs: [ProductLeftLogInput]
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
input ProductGroupInput{
     productGroupID: Int
     name: String
     userID: Int
     products: [ProductInput]
}
input AddProductComponentDTO{
    productID: Int!
    ingredientID: Int!
    requiredQuantity: Int!
}
input RemoveProductComponentDTO{
    productID: Int!
    ingredientID: Int!
}
input AddProductToGroupDTO{
     productID: Int!
     productGroupID: Int!
}
input RemoveProductFromGroupDTO{
     productID: Int!
     productGroupID: Int!
}
input IngredientInput{
     ingredientID: Int
     ingredientSKU: String
     name: String
     description: String 
     amountLeft: Int 
     price: Float 
     visible: Boolean 
     userID: Int
     picture: PictureInput
     alertAmountLeft: Int 
     buyOrderItems: [BuyOrderItemInput]
}
input NewIngredient{
     ingredientID: Int
     ingredientSKU: String
     name: String
     description: String 
     amountLeft: Int = 0
     price: Float = 0
     visible: Boolean 
     userID: Int
     picture: PictureInput
     alertAmountLeft: Int = 0
     buyOrderItems: [BuyOrderItemInput]
}
input UpdateIngredient{
     ingredientID: Int
     ingredientSKU: String
     name: String
     description: String 
     amountLeft: Int 
     price: Float 
     visible: Boolean 
     userID: Int
     picture: PictureInput
     alertAmountLeft: Int 
     buyOrderItems: [BuyOrderItemInput]
}
input RetailCreateDTO{
     productSKU: String 
     ingredientSKU: String 
     name: String
     description: String 
     amountLeft: Int
     alertAmountLeft: Int
     price: Float
     sellingPrice: Float
     pictureID: Int
}
input RetailCreateFromIngredientDTO{
     ingredientID: Int
     productSKU: String
     price: Float
}
input RetailCreateFromProductDTO{
     productID: Int
     ingredientSKU: String
}
input QuantityLogInput{
     amountLeftChange: Int!
     message: String
}
input BuyOrderInput {
     buyOrderID: Int
     supplier: SupplierInput
     creationTime: String
     finishTime: String
     status: Status
     totalCost: Float = 0
     userID: Int
     buyOrderItems: [BuyOrderItemInput]
}
input BuyOrderDTO{
     supplier: SupplierInput
     address: String 
     status: Status!
     textID: String
     description: String
     buyOrderItemDTOs: [BuyOrderItemDTO]!
}
input BuyOrderItemDTO{
     ingredient: IngredientInput!
     quantity: Int!
     pricePerUnit: Float!
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
input PaySlipInput{
     paySlipID: Int
     supplier: SupplierInput 
     receiverName: String 
     receiverContact: String
     creationTime: String
     message: String 
     totalCost: Int
     userID: Int
}
input ReceiptInput{
     receiptID: Int
     totalCost: Int
     customer: CustomerInput 
     senderName: String 
     senderContact: String 
     creationTime: String
     message: String
     userID: Int
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
input PurchaseInput{
     purchaseID: Int
     user: UserInput
     plan: PlanInput
     creationTime: String
     expiryDate: String
     message: String
     totalCost: Float
     status: Status
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
     enabled: Boolean
     pictureID: Int 
     purchases: [PurchaseInput] 
}
input UserRegister{
    username: String!
    phoneNumber: String!
    password: String!
    email: String!
    firstName: String!
    lastName: String!
}
input UpdateUserPassword{
    currentPassword: String! 
    newPassword: String!
    confirmNewPassword: String!
}
input UpdateEmail{
     email: String!
}
type Authenticate {
     accessToken: String!
     refreshToken: String!
}
input JwtSimple{
     token: String
}
input SellOrderInput{
     sellOrderID: Int
     customer: CustomerInput
     discount: DiscountInput
     creationTime: String
     finishTime: String
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
input NewSellOrder{
     customer:  CustomerInput
     discountID: Int
     customerMessage: String 
     address: String 
     status: Status!
     sellOrderItemDTOs: [SellOrderItemDTO]!
}
input SellOrderItemDTO{
     productID: Int
     quantity: Int
     pricePerUnit: Float
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
input WarrantyOrderInput{
    productID: Int!
    sellOrderID: Int!
    customerID: Int!
    customerMessage: String
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
     visible: Boolean
     sellOrders: [SellOrderInput]
}
input MembershipTypeInput{
     membershipTypeID: Int
     membershipName: String 
     description: String 
     userID: Int
     discount: DiscountInput
     minimumSpend: Float = 0
}
input DiscountInput{
     discountID: Int
     discountCode: String
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
     fixedCostBillID: Int
     fixedCost: FixedCostInput 
     userID: Int
     totalSpend: Float
     message: String 
     creationTime: String
     dueTime: String
     status: Status
}
input UpdateFixedCostBillStatus{
     fixedCostBillID: Int
     status: Status
}
input OtherCostInput{
     otherCostID: Int
     userID: Int
     totalCost: Float
     creationTime: String
     name: String
     description: String 
     status: Status
     visible: Boolean
}
input UpdateOtherCostStatus{
     otherCostID: Int
     status: Status
}
input NewStaff{
    staffID: Int
    name: String 
    phoneNumber: String 
    password: String !
    address: String 
    userID: Int  
    staffPosition: StaffPosition
    staffUUID: String
    salary: Float = 0
    account: String
    email: String !
}
input UpdateStaff{
    name: String 
    phoneNumber: String 
    address: String 
    userID: Int  
    staffPosition: StaffPosition
    staffUUID: String
    salary: Float = 0
    account: String
    email: String
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
input StaffLogin{
     account: String!
     password: String!
}
input IssueInput{
     issueID: Int
     type: IssueType
     description: String
     userID: Int
     creationTime: String
}
input StoreInput{
     storeID: Int
     userID: Int
     name: String
     address: String
}
input ZaloCallback{
     jsonStr: String
}
input PurchaseDTO{
     purchaseID: Int
     userID: Int
     userName: String 
     userPhoneNumber: String 
     userMail: String         
     planType: PlanType 
     curPlanType: PlanType 
     price: Float
     duration: Int  
     creationTime: String
     message: String
     callBackData: String
     status: Status
     payMethod: PaymentMethod
}
input UpdateUserPlan{
     userID: Int
     planType: PlanType
}
type Query{
    ingredient(ingredientID:Int): Ingredient
    ingredientsByUser: [Ingredient]
    hiddenIngredients: [Ingredient]
    alertIngredients: [Ingredient]
    filterIngredients: [IngredientInfo]
    ingredientLeftLog(ingredientLeftLogID: Int): IngredientLeftLog
    ingredientLeftLogsByIngredient(ingredientID: Int): [IngredientLeftLog]
    ingredientLeftLogsByUser: [IngredientLeftLog]
    ingredientLeftLogsByStaff(staffID: Int): [IngredientLeftLog]
    filterIngredientLeftLog: [IngredientLogInfo]
    productsByUser: [Product] 
    product(productID: Int): Product
    filterProducts: [ProductInfo]
    productLeftLog(productLeftLogID: Int): ProductLeftLog
    productLeftLogsByProduct(productID: Int): [ProductLeftLog]
    productLeftLogsByUser: [ProductLeftLog]
    productLeftLogsByStaff(staffID: Int): [ProductLeftLog]
    filterProductLeftLog: [ProductLogInfo]
    productsByGroup(productGroupID: Int): [Product] 
    hiddenProducts: [Product]
    alertProducts: [Product]
    productComboByUser: [ProductCombo]
    productComboIncludeProduct(productID: Int): [ProductCombo]
    componentsByProduct(productID: Int): [ProductComponent]
    productContainIngredient(ingredientID: Int): [Product] 
    productGroupsByUser: [ProductGroup]
    productGroup(productGroupID: Int): ProductGroup
    productGroupByProduct(productID: Int): [ProductGroup]
    productsByProductGroup(productGroupID: Int): [Product]
    buyOrder(buyOrderID: Int): BuyOrder
    buyOrdersByUser(page: Int=0, size: Int=50, sort: String="buyOrderID,desc"): ViewBuyOrder
    buyOrdersBySupplier(supplierID: Int): [BuyOrder]
    buyOrdersLastXDaysByUser(X: Int): [BuyOrder]
    incompletedBuyOrdersByUser: [BuyOrder]
    completedBuyOrdersByUser(page: Int=0, size: Int=50, sort: String="buyOrderID,desc"): [BuyOrder]
    buyOrdersByStatusAndUser(status: Status, page: Int=0, size: Int=50, sort: String="buyOrderID,desc"): ViewBuyOrder
    buyOrdersByTextID(textID: String, page: Int=0, size: Int=50, sort: String="buyOrderID,desc"): ViewBuyOrder
    buyOrdersBySupplierName(supplierName: String, page: Int=0, size: Int=50, sort: String="buyOrderID,desc"): ViewBuyOrder
    buyOrdersInPeriod(period: PeriodDTO, page: Int=0, size: Int=50, sort: String="buyOrderID,desc"): ViewBuyOrder
    buyOrdersByFilter(page: Int=0, size: Int=50, sort: String="buyOrderID,desc", filter: ViewBuyOrderFilter): ViewBuyOrder
    printBuyOrder(printInput: PrintBuyOrderInput): PrintBuyOrder
    buyOrderItemsByBuyOrder(buyOrderID: Int): [BuyOrderItem]
    buyOrderItemsByIngredient(ingredientID: Int): [BuyOrderItem]
    paySlipByUser: [PaySlip]
    paySlip(paySlipID: Int): PaySlip
    receiptByUser: [Receipt]
    receipt(receiptID: Int): Receipt
    sellOrdersByUser(page: Int=0, size: Int=50, sort: String="sellOrderID,desc"): ViewSellOrder
    sellOrdersByCustomer(customerID: Int): [SellOrder]
    sellOrder(sellOrderID: Int): SellOrder
    incompletedSellOrdersByUser: [SellOrder]
    completedSellOrdersByUser(page: Int=0, size: Int=50, sort: String="sellOrderID,desc"): [SellOrder]
    sellOrdersXDaysByUser(X: Int): [SellOrder]
    sellOrdersByStatusAndUser(status: Status, page: Int=0, size: Int=50, sort: String="sellOrderID,desc"): ViewSellOrder
    sellOrdersByTextID(textID: String, page: Int=0, size: Int=50, sort: String="sellOrderID,desc"): ViewSellOrder
    sellOrdersByCustomerName(customerName: String, page: Int=0, size: Int=50, sort: String="sellOrderID,desc"): ViewSellOrder
    sellOrdersInPeriod(period: PeriodDTO, page: Int=0, size: Int=50, sort: String="sellOrderID,desc"): ViewSellOrder
    sellOrdersByFilter(page: Int=0, size: Int=50, sort: String="sellOrderID,desc", filter: ViewSellOrderFilter): ViewSellOrder
    printSellOrder(printInput: PrintSellOrderInput): PrintSellOrder
    sellOrderItemsBySellOrder(sellOrderID: Int): [SellOrderItem]
    sellOrderItemsByProduct(productID: Int): [SellOrderItem] 
    warrantyOrdersByUser: [WarrantyOrder]
    warrantyOrdersByCustomer(customerID: Int): [WarrantyOrder]
    warrantyOrdersByProduct(productID: Int): [WarrantyOrder]
    customersByUser: [Customer]
    membershipType(membershipTypeID: Int): MembershipType
    membershipTypeByUser: [MembershipType]
    discountsByUser: [Discount]
    discount(discountID: Int): Discount
    supplier(supplierID: Int): Supplier
    suppliersByUser: [Supplier]
    plans: [Plan]
    userPlanStatus(userID: Int): UserPlanStatus
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
    staff(staffID: Int): Staff
#     salaryLog(salaryLogId: Int): SalaryLog
    salaryLogsByUser: [SalaryLog]
    salaryLogsByStaff(staffID: Int): [SalaryLog]
    staffNotesByUser: [StaffNote]
    staffNotesByStaff(staffID: Int): [StaffNote]
    unseenStaffNotesByStaff(staffID: Int): [StaffNote]
    staffNote(staffNoteID: Int): StaffNote  
    notiByUser: [Notification]
    pendingNotiByUser: [Notification]
    currentUser: User
    storesByUser: [Store]
    allNotifier: [Notifier]
    totalCountByHours: [ActiveHoursStatistics]
    totalCountCurrenMonthByHours: [ActiveHoursStatistics]
    totalSpendAgeGroupByUser: [AgeGroupStatistics]
    totalSpendAgeGroupThisMonthByUser: [AgeGroupStatistics]
    totalSpendGenderByUser: [GenderStatistics]
    totalSpendGenderThisMonthByUser: [GenderStatistics]
    totalRevenueProductByUser: [ProductStatistics]
    productsTopSellNumber: [ProductRanking]
    productsTopProfit: [ProductRanking]
    productsTopRevenue: [ProductRanking]
    productsMostReturnNumber: [ProductRanking]
    productsMostReturnPrice: [ProductRanking]
    productsLeastProfit: [ProductRanking]
    productsLeastRevenue: [ProductRanking]
    productsLeastSellNumber: [ProductRanking]
    totalRevenueByDiscount(discountID: Int): Float
    receiptRevenueWeekly: [RevenueByTimeStatistics]
    receiptRevenueMonthly: [RevenueByTimeStatistics]
    receiptRevenueThisMonth: [RevenueByTimeStatistics]
    revenueWeekly: [RevenueByTimeStatistics]
    revenueMonthly: [RevenueByTimeStatistics]
    revenueWeekdays: [RevenueByTimeStatistics]
    revenueDaysThisMonth: [RevenueByTimeStatistics]
    revenuePeriod(from: String, to: String): [RevenueByTimePeriodStatistics]
    totalRevenueDay: [RevenueByTimeStatistics]
    totalRevenueWeek: [RevenueByTimeStatistics]
    totalRevenueMonth: [RevenueByTimeStatistics]
    totalRevenueYear: [RevenueByTimeStatistics]
    totalRevenueXDays(X: Int): [RevenueByTimeStatistics]
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
    paySlipExpenseMonthly: [ExpenseByTimeStatistics]
    paySlipExpenseWeekly: [ExpenseByTimeStatistics]
    paySlipExpenseThisMonth: [ExpenseByTimeStatistics]
    totalExpenseDay: [ExpenseByTimeStatistics]
    totalExpenseWeek: [ExpenseByTimeStatistics]
    totalExpenseMonth: [ExpenseByTimeStatistics]
    totalExpenseYear: [ExpenseByTimeStatistics]
    totalExpenseXDays(X: Int): [ExpenseByTimeStatistics]
    expensePeriod(period: PeriodDTO): [ExpenseByTimePeriodStatistics]
    retentionRateWeekly: Float
    retentionRateMonthly: Float
    businessOverallEveryDay: [BusinessReportByTimeStatistics]
    businessOverallEveryWeek: [BusinessReportByTimeStatistics]
    businessOverallEveryMonth: [BusinessReportByTimeStatistics]
    businessOverallEveryYear: [BusinessReportByTimeStatistics]
    businessOverallXDays(X: Int): [BusinessReportByTimeStatistics]
    businessOverallPeriod(period: PeriodDTO): [BusinessByTimePeriodStatistics]
    zaloCallback(callback: ZaloCallback): String 
    zaloGetOrderStatus(apptransid: String): String 
    vnPayCallback: String
    vnPayReturnURL: String
}

type Mutation{
    newProduct(productInput: ProductInput): Product
    hideProduct(productID: Int): Product
    editProductQuantity(productID: Int, quantityLog: QuantityLogInput): Product
    editProduct(productID: Int, product: UpdateProduct): Product
    newProductGroup(productGroupInput: ProductGroupInput): ProductGroup
    deleteProductGroup(productGroupID: Int): String
    addProductToGroup(addProductToGroup: AddProductToGroupDTO): ProductGroup
    removeProductFromGroup(removeProductFromGroup: RemoveProductFromGroupDTO): String
    newProductComponent(newProductComponent: AddProductComponentDTO): ProductComponent
    deleteProductComponent(deleteProductComponent: RemoveProductComponentDTO): String
    removeIngredientFromProduct(productID: Int, ingredientID: Int): String
    newIngredient(ingredientInput: NewIngredient): Ingredient
    hideIngredient(ingredientID: Int): Ingredient 
    editIngredientQuantity(ingredientID: Int, quantityLog: QuantityLogInput): Ingredient
    editIngredient(ingredientID: Int, ingredient: UpdateIngredient): Ingredient
    newRetail(newRetail: RetailCreateDTO): Product
    newRetailFromProduct(newRetail: RetailCreateFromProductDTO): Ingredient
    newRetailFromIngredient(newRetail: RetailCreateFromIngredientDTO): Product
    newStaff(staffInput: NewStaff): Staff
    staffLogin(account: String!, password: String!): Authenticate
    updateStaff(staffID: Int, staff: UpdateStaff): Staff
    deleteStaff(staffID: Int): String
    newSalaryLog(salaryLogInput: SalaryLogInput): SalaryLog
    deleteSalaryLog(salaryLogID: Int): String
    newStaffNote(staffNoteInput: StaffNoteInput): StaffNote
    updateStaffNote(staffNoteID: Int, staffNote: StaffNoteInput): StaffNote
    deleteStaffNote(staffNoteID: Int): String
    newUser(userRegister: UserRegister): String
    confirmRegister(token: String): User
    deleteUser(userID: Int): String
    userLogin(email: String!, password: String!): Authenticate
    loginGoogle(jwtSimple: JwtSimple): Authenticate
    newAccessToken(jwtSimple: JwtSimple): Authenticate
    updateUser(user: UserInput): User
    updateUserPassword(updateUserPassword: UpdateUserPassword): String
    forgotPassword(email: String): String
    updateForgotPassword(token: String, updateUserPassword:UpdateUserPassword): String
    updateUserEmail(updateUserEmail: UpdateEmail): String
    confirmUpdateEmail(token: String): User
    newBuyOrder(newBuyOrder: BuyOrderDTO): BuyOrder
    newBuyOrderStaff(newBuyOrder: BuyOrderDTO): BuyOrder
    deleteBuyOrder(buyOrderID: Int): String
    deleteBuyOrderStaff(buyOrderID: Int): String
    returnBuyOrder(buyOrderID: Int): BuyOrder
    delayPayBuyOrder(buyOrderID: Int): BuyOrder
    payDelayBuyOrder(buyOrderID: Int): BuyOrder
    updateBuyOrderStatus(updateStatus: UpdateBuyOrderStatus): BuyOrder
    deleteBuyOrderItem(buyOrderItemID: Int): String
    newSellOrder(sellOrderInput: NewSellOrder): SellOrder
    newPosSellOrder(sellOrderInput: NewSellOrder): SellOrder
    updateSellOrder(sellOrder: SellOrderInput): SellOrder
    deleteSellOrder(sellOrderID: Int): String
    updateSellOrderStatus(updateStatus: UpdateSellOrderStatus): SellOrder
    updateSellOrderItem(sellOrderItemID: Int, sellOrderItem: SellOrderItemInput): SellOrderItem
    deleteSellOrderItem(sellOrderItemID: Int): String
    newWarrantyOrder(warrantyOrderInput: WarrantyOrderInput): WarrantyOrder
    cancelSellOrder(sellOrderID: Int): SellOrder
    returnSellOrder(sellOrderID: Int): SellOrder
    finishSellOrder(sellOrderID: Int): SellOrder
    newPaySlip(paySlipInput: PaySlipInput): PaySlip
    deletePaySlip(paySlipID: Int): String
    newReceipt(receiptInput: ReceiptInput): Receipt
    deleteReceipt(receiptID: Int): String
    newCustomer(customerInput: CustomerInput): Customer
    updateCustomer(customer: CustomerInput): Customer
    hideCustomer(customerID: Int): Customer
    newMembershipType(membershipTypeInput: MembershipTypeInput): MembershipType
    newDiscount(discountInput: DiscountInput): Discount
    deleteDiscount(discountID: Int): String
    newSupplier(supplierInput: SupplierInput): Supplier
    updateSupplier(supplier: SupplierInput): Supplier
    hideSupplier(supplierID: Int): Supplier
    newPlan(planInput: PlanInput): Plan
    deletePlan(planID: Int): String
    newPurchase(purchaseInput: PurchaseInput): Purchase
    newPicture(pictureInput: PictureInput): Picture
    deletePicture(pictureID: Int): String
    newFixedCost(fixedCostInput: FixedCostInput): FixedCost
    updateFixedCost(fixedCost: FixedCostInput): FixedCost
    hideFixedCost(fixedCostID: Int): FixedCost
    newOtherCost(otherCostInput: OtherCostInput): OtherCost
    hideOtherCost(otherCostID: Int): OtherCost
    updateOtherCostStatus(updateStatus: UpdateOtherCostStatus): OtherCost
    newFixedCostBill(fixedCostBillInput: FixedCostBillInput): FixedCostBill
    delayFixedCostBill(fixedCostBillID: Int): FixedCostBill
    payFixedCostBill(fixedCostBillID: Int): FixedCostBill
    updateFixedCostBillStatus(updateStatus: UpdateFixedCostBillStatus): FixedCostBill
    newIssue(issue: IssueInput): Issue
    newStore(store: StoreInput): Store
    updateStore(store: StoreInput): Store
    zaloCreateOrder(purchase: PurchaseDTO): String
    vnPayCreateOrder(purchase: PurchaseDTO): String
    updateBatchUserPlan(updatePlan: [UpdateUserPlan]): String
    updateUserPlan(updatePlan: UpdateUserPlan): User 
}
`;