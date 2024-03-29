const { RESTDataSource } = require('apollo-datasource-rest')
class Budabackend extends RESTDataSource {
    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token)
    }
    constructor() {
        super()
        this.baseURL = "http://103.173.228.124:8080/"
        // this.baseURL="http://localhost:8080/"
    }
    async ingredient(ingredientID) {
        return this.get(`api/ingredient/view/ingredientID/${ingredientID}`)
    }
    async ingredientsByUser(){
        return this.get(`api/ingredient/view/all`)
    }
    async hiddenIngredients(){
        return this.get(`api/ingredient/view/hidden/all`)
    }
    async alertIngredients(){
        return this.get(`api/ingredient/view/alert`)
    }
    async filterIngredients(page, size, sort, filter){
        const filterJson = JSON.parse(JSON.stringify(filter))
        return this.get(`api/ingredient/view/filter-all/?page=${page}&size=${size}&sort=${sort}`, filterJson)
    }
    async ingredientLeftLog(ingredientLeftLogID){
        return this.get(`api/ingredient/quantity-log/id/${ingredientLeftLogID}`)
    }
    async ingredientLeftLogsByIngredient(ingredientID){
        return this.get(`api/ingredient/quantity-log/${ingredientID}/all`)
    }
    async ingredientLeftLogsByUser(){
        return this.get(`api/ingredient/quantity-log/all`)
    }
    async ingredientLeftLogsByStaff(staffID){
        return this.get(`api/ingredient/quantity-log/staff/${staffID}/all`)
    }
    async filterIngredientLeftLog(page, size, sort, filter){
        const filterJson = JSON.parse(JSON.stringify(filter))
        return this.get(`api/ingredient/quantity-log/filter-all/?page=${page}&size=${size}&sort=${sort}`, filterJson)
    }
    async product(productID) {
        return this.get(`api/product/view/productID/${productID}`)
    }
    async productsByUser() {
        return this.get(`api/product/view/all`)
    }
    async filterProducts(page, size, sort, filter){
        const filterJson = JSON.parse(JSON.stringify(filter))
        return this.get(`api/product/view/filter-all/?page=${page}&size=${size}&sort=${sort}`, filterJson)
    }
    async productsByGroup(productGroupID) {
        return this.get(`api/product/view/group/${productGroupID}/all`)
    }
    async hiddenProducts(){
        return this.get(`api/product/view/hidden/all`)
    }
    async alertProducts(){
        return this.get(`api/product/view/alert`)
    }
    async productLeftLog(productLeftLogID){
        return this.get(`api/product/quantity-log/id/${productLeftLogID}`)
    }
    async productLeftLogsByProduct(productID){
        return this.get(`api/product/quantity-log/product/${productID}/all`)
    }
    async productLeftLogsByUser(){
        return this.get(`api/product/quantity-log/all`)
    }
    async productLeftLogsByStaff(staffID){
        return this.get(`api/product/quantity-log/staff/${staffID}/all`)
    }
    async filterProductLeftLog(page, size, sort, filter){
        const filterJson = JSON.parse(JSON.stringify(filter))
        return this.get(`api/product/quantity-log/filter-all/?page=${page}&size=${size}&sort=${sort}`, filterJson)
    }
    async productGroupsByUser(){
        return this.get(`api/product/group/view/all`)
    }
    async productGroup(productGroupID) {
        return this.get(`api/product/group/view/productGroupID/${productGroupID}`)
    }
    async productGroupByProduct(productID){
        return this.get(`api/product/group/view/by-product/${productID}`)
    }
    async productsByProductGroupID(productGroupID){
        return this.get(`api/product/group/view/${productGroupID}/products`)
    }
    async productComboByUser(){
        return this.get(`api/product/packaging/combo/all`)
    }
    async productComboIncludeProduct(productID){
        return this.get(`api/product/packaging/combo/include/product/${productID}`)
    }
    async componentsByProduct(productID){
        return this.get(`api/product/packaging/component/view/productID/${productID}`)
    }
    async productContainIngredient(ingredientID){
        return this.get(`api/product/packaging/component/contains/ingredient/${ingredientID}`)
    }
    async buyOrder(buyOrderID) {
        return this.get(`api/business/buy/view/id/${buyOrderID}`)
    }
    async buyOrdersByUser(page, size, sort){
        return this.get(`api/business/buy/view/all`,{
            page: page,
            size: size,
            sort: sort
        })
    }
    async buyOrdersBySupplier(supplierID) {
        return this.get(`api/business/buy/view/supplier/${supplierID}/all`)
    }
    async buyOrdersLastXDaysByUser(X){
        return this.get(`api/business/buy/view/all/last-x-days/${X}`)
    }
    async incompletedBuyOrdersByUser(){
        return this.get(`api/business/buy/view/all/incompleted`)
    }
    async completedBuyOrdersByUser(page, size, sort){
        return this.get(`api/business/buy/view/all/completed`,{
            page: page,
            size: size,
            sort: sort
        })
    }
    async buyOrdersByStatusAndUser(status, page, size, sort){
        return this.get(`api/business/buy/view/all/status/${status}`,{
            page: page,
            size: size,
            sort: sort
        })
    }
    async buyOrdersByTextID(textID, page, size, sort) {
        return this.get(`api/business/buy/view/textID/${textID}`,{
            page: page,
            size: size,
            sort: sort
        })
    }
    async buyOrdersBySupplierName(supplierName, page, size, sort) {
        return this.get(`api/business/buy/view/supplier/${supplierName}`,{
            page: page,
            size: size,
            sort: sort
        })
    }
    async buyOrdersInPeriod(period, page, size, sort) {
        const periodJson = JSON.parse(JSON.stringify(period))
        return this.get(`api/business/buy/view/period`, periodJson,{
            page: page,
            size: size,
            sort: sort
        })
    }
    async buyOrdersByFilter(page, size, sort, filter) {
        const filterJson = JSON.parse(JSON.stringify(filter))
        return this.post(`api/business/buy/view/filter/?page=${page}&size=${size}&sort=${sort}`, filterJson)
    }
    async printBuyOrder(printInput){
        const printInputJson = JSON.parse(JSON.stringify(printInput))
        return this.post(`api/business/buy/print`, printInputJson)
    }
    async buyOrderItemsByBuyOrder(buyOrderID){
        return this.get(`api/business/buy/item/buy-order/${buyOrderID}`)
    }
    async buyOrderItemsByIngredient(ingredientID){
        return this.get(`api/business/buy/item/ingredient/${ingredientID}`)
    }
    async paySlipByUser(){
        return this.get(`api/business/pay-slip/view/all`)
    }
    async paySlip(paySlipID){
        return this.get(`api/business/pay-slip/view/id/${paySlipID}`)
    }
    async receiptByUser(){
        return this.get(`api/business/receipt/view/all`)
    }
    async receipt(receiptID) {
        return this.get(`api/business/receipt/view/id/${receiptID}`)
    }
    async sellOrdersByUser(page, size, sort) {
        return this.get(`api/business/sell/view/all`,{
            page: page,
            size: size,
            sort: sort
        })
    }
    async sellOrdersByCustomer(customerID) {
        return this.get(`api/business/sell/view/customer/${customerID}/all`)
    }
    async sellOrder(sellOrderID) {
        return this.get(`api/business/sell/view/id/${sellOrderID}`)
    }
    async incompletedSellOrdersByUser(){
        return this.get(`api/business/sell/view/all/incompleted`)
    }
    async completedSellOrdersByUser(page, size, sort){
        return this.get(`api/business/sell/view/all/completed`,{
            page: page,
            size: size,
            sort: sort
        })
    }
    async sellOrdersXDaysByUser(X){
        return this.get(`api/business/sell/view/all/last-x-days/${X}`)
    }
    async sellOrdersByStatusAndUser(status, page, size, sort){
        return this.get(`api/business/sell/view/all/status/${status}`,{
            page: page,
            size: size,
            sort: sort
        })
    }
    async sellOrdersByTextID(textID, page, size, sort) {
        return this.get(`api/business/sell/view/textID/${textID}`,{
            page: page,
            size: size,
            sort: sort
        })
    }
    async sellOrdersByCustomerName(customerName, page, size, sort) {
        return this.get(`api/business/sell/view/customer/${customerName}`,{
            page: page,
            size: size,
            sort: sort
        })
    }
    async sellOrdersInPeriod(period, page, size, sort) {
        const periodJson = JSON.parse(JSON.stringify(period))
        return this.post(`api/business/sell/view/period`, periodJson,{
            page: page,
            size: size,
            sort: sort
        })
    }
    async sellOrdersByFilter(page, size, sort, filter) {
        const filterJson = JSON.parse(JSON.stringify(filter))
        return this.post(`api/business/sell/view/filter/?page=${page}&size=${size}&sort=${sort}`, filterJson)
    }
    async printSellOrder(printInput){
        const printInputJson = JSON.parse(JSON.stringify(printInput))
        return this.post(`api/business/sell/print`, printInputJson)
    }
    async sellOrderItemsBySellOrder(sellOrderID){
        return this.get(`api/business/sell/item/sell-order-id/${sellOrderID}`)
    }
    async sellOrderItemsByProduct(productID){
        return this.get(`api/business/sell/item/product/${productID}`)
    }
    async warrantyOrdersByUser(){
        return this.get(`api/business/sell/warranty/view/all`)
    }
    async warrantyOrdersByProduct(productID){
        return this.get(`api/business/sell/warranty/view/product/${productID}/all`)
    }
    async warrantyOrdersByCustomer(customerID){
        return this.get(`api/business/sell/warranty/view/customer/${customerID}/all`)
    }
    async customersByUser(){
        return this.get(`api/customer/view/all`)
    }
    async membershipType(membershipTypeID) {
        return this.get(`api/customer/membership/membershipTypeID/${membershipTypeID}`)
    }
    async membershipTypeByUser(){
        return this.get(`api/customer/membership/all`)
    }
    async discountsByUser(){
        return this.get(`api/discount/view/all`)
    }
    async discount(discountID){
        return this.get(`api/discount/view/id/${discountID}`)
    }
    async supplier(supplierID){
        return this.get(`api/supplier/view/id/${supplierID}`)
    }
    async suppliersByUser(){
        return this.get(`api/supplier/view/all`)
    }
    async plans(){
        return this.get(`api/plan/view/all`)
    }
    async purchaseByUser(){
        return this.get(`api/plan/purchase/all`)
    }
    async picture(pictureID){
        return this.get(`api/picture/view/id/${pictureID}`)
    }
    async fixedCostsByUser(){
        return this.get(`api/fixed-cost/crud/all`)
    }
    async hiddenFixedCosts(){
        return this.get(`api/fixed-cost/crud/all/hidden`)
    }
    async otherCostsByUser(){
        return this.get(`api/other-cost/crud/all`)
    }
    async incompletedOtherCostsByUser(){
        return this.get(`api/other-cost/crud/all/incompleted`)
    }   
    async otherCostsXDaysByUser(X){
        return this.get(`api/other-cost/crud/all/last-x-days/${X}`)
    }
    async hiddenOtherCosts(){
        return this.get(`api/other-cost/crud/all/hidden`)
    }
    async fixedCostBillsByUser(){
        return this.get(`api/cost/fixed-cost/bill/all`)
    }
    async fixedCostBillsByFixedCost(fixedCostID){
        return this.get(`api/cost/fixed-cost/bill/fixedCostID/${fixedCostID}/all`)
    }
    async fixedCostBillsXDaysByUser(X){
        return this.get(`api/cost/fixed-cost/bill/all/last-x-days/${X}`)
    }
    async incompletedFixedCostBillsByUser(){
        return this.get(`api/cost/fixed-cost/bill/all/incompleted`)
    }
    async staffsByUser(){
        return this.get(`api/staff/view/all`)
    }
    async staff(staffID){
        return this.get(`api/staff/view/id/${staffID}`)
    }
    async staffNotesByUser(){
        return this.get(`api/staff/notification/all`)
    }
    async staffNotesByStaff(staffID){
        return this.get(`api/staff/notification/staffID/${staffID}/all`)
    }
    async unseenStaffNotesByStaff(staffID){
        return this.get(`api/staff/notification/staffID/${staffID}/all/unseen`)
    }
    async staffNote(staffNoteID){
        return this.get(`api/staff/notification/noteID/${staffNoteID}`)
    }
    // async salaryLog(){
    //     return this.get(`api/salary-log`)
    // }
    async salaryLogsByUser(){
        return this.get(`api/staff/salary/userID/all`)
    }
    async salaryLogsByStaff(staffID){
        return this.get(`api/staff/salary/staffID/${staffID}/all`)
    }
    async notiByUser(){
        return this.get(`api/notification/all`)
    }
    async pendingNotiByUser(){
        return this.get(`api/notification/all/new`)
    }
    async currentUser(){
        return this.get(`api/user/view/me`)
    }
    async storesByUser(){
        return this.get(`api/store/view/all`)
    }
    async totalCountByHours(){
        return this.get(`api/statistics/active-hours/total`)
    }
    async totalCountCurrenMonthByHours(){
        return this.get(`api/statistics/active-hours/this-month`)
    }
    async totalSpendAgeGroupByUser(){
        return this.get(`api/statistics/customer/age-group/total`)
    }
    async totalSpendAgeGroupThisMonthByUser(){
        return this.get(`api/statistics/customer/age-group/this-month`)
    }
    async totalSpendGenderByUser(){
        return this.get(`api/statistics/customer/gender/total`)
    }
    async totalSpendGenderThisMonthByUser(){
        return this.get(`api/statistics/customer/gender/this-month`)
    }
    async totalRevenueProductByUser(){
        return this.get(`api/statistics/product/overall/all`)
    }
    async productsTopSellNumber(){
        return this.get(`api/statistics/product/best/selling/sell-number`)
    }
    async productsTopProfit(){
        return this.get(`api/statistics/product/best/selling/profit`)
    }
    async productsTopRevenue(){
        return this.get(`api/statistics/product/best/selling/revenue`)
    }
    async productsMostReturnNumber(){
        return this.get(`api/statistics/product/worst/returning/return-number`)
    }
    async productsMostReturnPrice(){
        return this.get(`api/statistics/product/worst/returning/return-price`)
    }
    async productsLeastSellNumber(){
        return this.get(`api/statistics/product/worst/selling/sell-number`)
    }
    async productsLeastProfit(){
        return this.get(`api/statistics/product/worst/selling/profit`)
    }
    async productsLeastRevenue(){
        return this.get(`api/statistics/product/worst/selling/revenue`)
    }
    async totalRevenueByDiscount(discountID){
        return this.get(`api/statistics/discount/total-revenue/id/${discountID}`)
    }
    async receiptRevenueWeekly(){
        return this.get(`api/statistics/revenue/receipt/weekly`)
    }
    async receiptRevenueMonthly(){
        return this.get(`api/statistics/revenue/receipt/monthly`)
    }
    async receiptRevenueThisMonth(){
        return this.get(`api/statistics/revenue/receipt/this-month`)
    }
    async revenueMonthly(){
        return this.get(`api/statistics/revenue/sell-order/monthly`)
    }
    async revenueWeekly(){
        return this.get(`api/statistics/revenue/sell-order/weekly`)
    }
    async revenueWeekdays(){
        return this.get(`api/statistics/revenue/sell-order/weekday`)
    }
    async revenueDaysThisMonth(){
        return this.get(`api/statistics/revenue/sell-order/this-month/daily`)
    }
    async revenuePeriod(period) {
        const periodJson = JSON.parse(JSON.stringify(period))
        return this.get(`api/statistics/revenue/total/all/period`,periodJson) 
    }
    async totalRevenueDay(){
        return this.get(`api/statistics/revenue/total/all/day`)
    }
    async totalRevenueWeek(){
        return this.get(`api/statistics/revenue/total/all/week`)
    }
    async totalRevenueMonth(){
        return this.get(`api/statistics/revenue/total/all/month`)
    }
    async totalRevenueYear(){
        return this.get(`api/statistics/revenue/total/all/year`)
    }
    async totalRevenueXDays(X){
        return this.get(`api/statistics/revenue/total/last-x-days/${X}`)
    }
    async otherCostExpenseWeekly(){
        return this.get(`api/statistics/expense/other-cost/weekly`)
    }
    async otherCostExpenseThisMonth(){
        return this.get(`api/statistics/expense/other-cost/this-month`)
    }
    async otherCostExpenseMonthly(){
        return this.get(`api/statistics/expense/other-cost/monthly`)
    }
    async fixedCostBillExpenseWeekly(){
        return this.get(`api/statistics/expense/fixed-cost/weekly`)
    }
    async fixedCostBillExpenseThisMonth(){
        return this.get(`api/statistics/expense/fixed-cost/this-month`)
    }
    async fixedCostBillExpenseMonthly(){
        return this.get(`api/statistics/expense/fixed-cost/monthly`)
    }
    async salaryLogExpenseThisMonth(){
        return this.get(`api/statistics/expense/salary/this-month`)
    }
    async salaryLogExpenseMonthly(){
        return this.get(`api/statistics/expense/salary/monthly`)
    }
    async buyOrderExpenseWeekly(){
        return this.get(`api/statistics/expense/buy-order/weekly`)
    }
    async buyOrderExpenseMonthly(){
        return this.get(`api/statistics/expense/buy-order/monthly`)
    }
    async buyOrderExpenseThisMonth(){
        return this.get(`api/statistics/expense/buy-order/this-month`)
    }
    async paySlipExpenseWeekly(){
        return this.get(`api/statistics/expense/pay-slip/weekly`)
    }
    async paySlipExpenseMonthly(){
        return this.get(`api/statistics/expense/pay-slip/monthly`)
    }
    async paySlipExpenseThisMonth(){
        return this.get(`api/statistics/expense/pay-slip/this-month`)
    }
    async totalExpenseDay(){
        return this.get(`api/statistics/expense/total/all/day`)
    }
    async totalExpenseWeek(){
        return this.get(`api/statistics/expense/total/all/week`)
    }
    async totalExpenseMonth(){
        return this.get(`api/statistics/expense/total/all/month`)
    }
    async totalExpenseYear(){
        return this.get(`api/statistics/expense/total/all/year`)
    }
    async totalExpenseXDays(X){
        return this.get(`api/statistics/expense/total/last-x-days/${X}`)
    }
    async expensePeriod(period) {
        const periodJson=JSON.parse(JSON.stringify(period))
        return this.get(`api/statistics/expense/total/all/period`, periodJson)
    }
    async retentionRateWeekly(){
        return this.get(`api/statistics/customer/retention/weekly`)
    }
    async retentionRateMonthly(){
        return this.get(`api/statistics/customer/retention/monthly`)
    }
    async businessOverallEveryDay(){
        return this.get(`api/statistics/overall/total/all/day`)
    }
    async businessOverallEveryWeek(){
        return this.get(`api/statistics/overall/total/all/week`)
    }
    async businessOverallEveryMonth(){
        return this.get(`api/statistics/overall/total/all/month`)
    }
    async businessOverallEveryYear(){
        return this.get(`api/statistics/overall/total/all/year`)
    }
    async businessOverallXDays(X){
        return this.get(`api/statistics/overall/total/last-x-days/${X}`)
    }
    async businessOverallPeriod(period) {
        const periodJson = JSON.parse(JSON.stringify(period))
        return this.get(`api/statistics/overall/total/all/period`, periodJson)
    }
    async cleanCache() {
        try {
            await this.httpCache.keyValueCache.wrapped.client.flushdb()
            return true
        }
        catch (err) {
            return false
        }
    }
    async newProduct(productInput) {
        const productInputJson = JSON.parse(JSON.stringify(productInput))
        return this.post(`api/product/create`, productInputJson)
    }
    async hideProduct(productID) {
        return this.get(`api/product/view/hide/${productID}`)
    }
    async editProductQuantity(productID, quantityLog){
        const quantityLogJson = JSON.parse(JSON.stringify(quantityLog))
        return this.put(`api/product/update/quantity/${productID}`, quantityLogJson)
    }
    async editProduct(productID, product){
        const productJson = JSON.parse(JSON.stringify(product))
        return this.put(`api/product/update/${productID}`, productJson)
    }
    async newProductGroup(productGroupInput){
        const productGroupInputJson= JSON.parse(JSON.stringify(productGroupInput))
        return this.post(`api/product/group/create`, productGroupInputJson)
    }
    async deleteProductGroup(productGroupID){
        return this.delete(`api/product/group/delete/id/${productGroupID}`)
    }
    async addProductToGroup(addProductToGroup){
        const addProductToGroupJson=JSON.parse(JSON.stringify(addProductToGroup))
        return this.post(`api/product/group/add-product`, addProductToGroupJson)
    }
    async removeProductFromGroup(removeProductFromGroup){
        const removeProductFromGroupJson=JSON.parse(JSON.stringify(removeProductFromGroup))
        return this.delete(`api/product/group/remove-product`, removeProductFromGroupJson)
    }
    async newProductComponent(newProductComponent){
        const newProductComponentJson = JSON.parse(JSON.stringify(newProductComponent))
        return this.post(`api/product/packaging/component/add`, newProductComponentJson)
    }
    async deleteProductComponent(deleteProductComponent){
        const deleteProductComponentJson = JSON.parse(JSON.stringify(deleteProductComponent))
        return this.delete(`api/product/packaging/component/remove`,deleteProductComponentJson)
    }
    async newIngredient(ingredientInput) {
        const ingredientInputJson = JSON.parse(JSON.stringify(ingredientInput))
        return this.post(`api/ingredient/create`, ingredientInputJson)
    }
    async hideIngredient(ingredientID){
        return this.get(`api/ingredient/view/hide/${ingredientID}`)
    }
    async editIngredientQuantity(ingredientID, quantityLog){
        const quantityLogJson = JSON.parse(JSON.stringify(quantityLog))
        return this.put(`api/ingredient/update/quantity/${ingredientID}`, quantityLogJson)
    }
    async editIngredient(ingredientID, ingredient){
        const ingredientJson = JSON.parse(JSON.stringify(ingredient))
        return this.put(`api/ingredient/update/${ingredientID}`, ingredientJson)
    }
    async newRetail(newRetail){
        const newRetailJson = JSON.parse(JSON.stringify(newRetail))
        return this.post(`api/retail/create`, newRetailJson)
    }
    async newRetailFromProduct(newRetail){
        const newRetailJson = JSON.parse(JSON.stringify(newRetail))
        return this.post(`api/retail/create/product`, newRetailJson)
    }
    async newRetailFromIngredient(newRetail){
        const newRetailJson = JSON.parse(JSON.stringify(newRetail))
        return this.post(`api/retail/create/ingredient`, newRetailJson)
    }
    async newStaff(staffInput){
        const staffInputJson = JSON.parse(JSON.stringify(staffInput))
        return this.post(`api/staff/create`, staffInputJson)
    }
    async updateStaff(staffID, staff) {
        const staffJson = JSON.parse(JSON.stringify(staff))
        return this.put(`api/staff/crud/update/${staffID}`, staffJson)
    }
    async deleteStaff(staffID){
        return this.delete(`api/staff/crud/id/${staffID}`)
    }
    async newSalaryLog(salaryLogInput){
        const salaryLogInputJson = JSON.parse(JSON.stringify(salaryLogInput))
        return this.post(`api/staff/salary/new`, salaryLogInputJson)
    }
    async deleteSalaryLog(salaryLogID){
        return this.delete(`api/staff/salary/salary-logID/${salaryLogID}`)
    }
    async newStaffNote(staffNoteInput){
        const staffNoteJson = JSON.parse(JSON.stringify(staffNoteInput))
        return this.post(`api/staff/notification/new`, staffNoteJson)
    }
    async updateStaffNote(staffNoteID, staffNote){
        const staffNoteJson = JSON.parse(JSON.stringify(staffNote))
        return this.put(`api/staff/notification/update/${staffNoteID}`, staffNoteJson)
    }
    async deleteStaffNote(staffNoteID){
        return this.delete(`api/staff/notification/noteID/${staffNoteID}`)
    }
    async deleteUser(userID){
        return this.delete(`api/user/${userID}`)
    }
    async updateUser(user){
        const userJson=JSON.parse(JSON.stringify(user))
        return this.put(`api/user/update-info`, userJson)
    }
    async updateUserEmail(updateUserEmail){
        const updateUserEmailJson=JSON.parse(JSON.stringify(updateUserEmail))
        return this.put(`api/user/update-info/email`, updateUserEmailJson)
    }
    async confirmUpdateEmail(token){
        return this.get(`api/user/update-info/email/confirm/?token=${token}`)
    }
    async newBuyOrder(newBuyOrder) {
        const newBuyOrderJson = JSON.parse(JSON.stringify(newBuyOrder))
        return this.post(`api/business/buy/new-order/new`, newBuyOrderJson)
    }
    async newBuyOrderStaff(newBuyOrder) {
        const newBuyOrderJson = JSON.parse(JSON.stringify(newBuyOrder))
        return this.post(`api/business/buy/new-order/staff`, newBuyOrderJson)
    }
    async deleteBuyOrder(buyOrderID){
        return this.delete(`api/business/buy/new-order/${buyOrderID}`)
    }
    async deleteBuyOrderStaff(buyOrderID){
        return this.delete(`api/business/buy/new-order/staff/${buyOrderID}`)
    }
    async returnBuyOrder(buyOrderID){
        return this.put(`api/business/buy/return-order/id/${buyOrderID}`)
    }
    async delayPayBuyOrder(buyOrderID){
        return this.put(`api/business/buy/delay/id/${buyOrderID}`)
    }
    async payDelayBuyOrder(buyOrderID){
        return this.put(`api/business/buy/delay/pay/id/${buyOrderID}`)
    }
    async updateBuyOrderStatus(updateStatus){
        const updateStatusJson = JSON.parse(JSON.stringify(updateStatus))
        return this.put(`api/business/buy/status`, updateStatusJson)
    }
    async deleteBuyOrderItem(buyOrderItemID){
        return this.delete(`api/business/buy/item/${buyOrderItemID}`)
    }
    async newSellOrder(sellOrderInput) {
        const sellOrderInputJson = JSON.parse(JSON.stringify(sellOrderInput))
        return this.post(`api/business/sell/new-order/new`, sellOrderInputJson)
    }
    async newPosSellOrder(sellOrderInput){
        const sellOrderInputJson = JSON.parse(JSON.stringify(sellOrderInput))
        return this.post(`api/business/sell/new-order/pos`, sellOrderInputJson) 
    }
    async updateSellOrder(sellOrder){
        const sellOrderJson = JSON.parse(JSON.stringify(sellOrder))
        return this.put(`api/business/sell/new-order/update`, sellOrderJson)   
    }
    async deleteSellOrder(sellOrderID){
        return this.delete(`api/business/sell/new-order/${sellOrderID}`)
    }
    async updateSellOrderStatus(updateStatus){
        const updateStatusJson = JSON.parse(JSON.stringify(updateStatus))
        return this.put(`api/business/sell/status`, updateStatusJson)
    }
    async updateSellOrderItem(sellOrderItemID, sellOrderItem){
        const sellOrderItemJson=JSON.parse(JSON.stringify(sellOrderItem))
        return this.put(`api/business/sell/item/update/${sellOrderItemID}`, sellOrderItemJson)
    }
    async deleteSellOrderItem(sellOrderItemID){
        return this.delete(`api/business/sell/item/${sellOrderItemID}`)
    }
    async newWarrantyOrder(warrantyOrderInput){
        const warrantyOrderInputJson = JSON.parse(JSON.stringify(warrantyOrderInput))
        return this.post(`api/business/sell/warranty/create`, warrantyOrderInputJson)
    }
    async cancelSellOrder(sellOrderID){
        return this.put(`api/business/sell/cancel-order/id/${sellOrderID}`)
    }
    async returnSellOrder(sellOrderID){
        return this.put(`api/business/sell/return-order/id/${sellOrderID}`)
    }
    async finishSellOrder(sellOrderID){
        return this.put(`api/business/sell/finish/id/${sellOrderID}`)
    }
    async newPaySlip(paySlipInput){
        const paySlipInputJson = JSON.parse(JSON.stringify(paySlipInput))
        return this.post(`api/business/pay-slip/create`, paySlipInputJson)
    }
    async deletePaySlip(paySlipID){
        return this.delete(`api/business/pay-slip/delete/id/${paySlipID}`)
    }
    async newReceipt(receiptInput){
        const receiptInputJson = JSON.parse(JSON.stringify(receiptInput))
        return this.post(`api/business/receipt/create`, receiptInputJson)
    }
    async deleteReceipt(receiptID){
        return this.delete(`api/business/receipt/delete/id/${receiptID}`)
    }
    async newCustomer(customerInput){
        const customerInputJson = JSON.parse(JSON.stringify(customerInput))
        return this.post(`api/customer/create`, customerInputJson)
    }
    async updateCustomer(customer){
        const customerJson=JSON.parse(JSON.stringify(customer))
        return this.put(`api/customer/update`, customerJson)
    }
    async hideCustomer(customerID) {
        return this.get(`api/customer/crud/hide/${customerID}`)
    }
    async newMembershipType(membershipTypeInput){
        const membershipTypeInputJson = JSON.parse(JSON.stringify(membershipTypeInput))
        return this.post(`api/customer/membership/new`, membershipTypeInputJson)
    }
    async updateMembershipType(membershipTypeID){
        return this.post(`api/customer/update/${membershipTypeID}`)
    }
    async newDiscount(discountInput){
        const discountInputJson = JSON.parse(JSON.stringify(discountInput))
        return this.post(`api/discount/create`, discountInputJson)
    }
    async deleteDiscount(discountID){
        return this.delete(`api/discount/delete/id/${discountID}`)
    }
    async newSupplier(supplierInput){
        const supplierInputJson = JSON.parse(JSON.stringify(supplierInput))
        return this.post(`api/supplier/create`, supplierInputJson)
    }
    async updateSupplier(supplier){
        const supplierJson=JSON.parse(JSON.stringify(supplier))
        return this.put(`api/supplier/update`, supplierJson)
    }
    async hideSupplier(supplierID){
        return this.get(`api/supplier/crud/hide/${supplierID}`)
    }
    async newPlan(planInput){
        const planInputJson = JSON.parse(JSON.stringify(planInput))
        return this.post(`api/plan`, planInputJson)
    }
    async deletePlan(planID){
        return this.delete(`api/plan/${planID}`)
    }
    async newPurchase(purchaseInput){
        const purchaseInputJson = JSON.parse(JSON.stringify(purchaseInput))
        return this.post(`api/plan/purchase/new`, purchaseInputJson)
    }
    async newPicture(pictureInput){
        const pictureInputJson = JSON.parse(JSON.stringify(pictureInput))
        return this.post(`api/picture/upload`, pictureInputJson)
    }
    async deletePicture(pictureID){
        return this.delete(`api/picture/delete/${pictureID}`)
    }
    async newFixedCost(fixedCostInput){
        const fixedCostInputJson = JSON.parse(JSON.stringify(fixedCostInput))
        return this.post(`api/fixed-cost/crud/new`, fixedCostInputJson)
    }
    async updateFixedCost(fixedCost){
        const fixedCostJson = JSON.parse(JSON.stringify(fixedCost))
        return this.put(`api/fixed-cost/crud/update`, fixedCostJson)
    }
    async hideFixedCost(fixedCostID){
        return this.get(`api/fixed-cost/crud/hide/${fixedCostID}`)
    }
    async newOtherCost(otherCostInput){
        const otherCostInputJson = JSON.parse(JSON.stringify(otherCostInput))
        return this.post(`api/other-cost/crud/new`, otherCostInputJson)
    }
    async hideOtherCost(otherCostID){
        return this.get(`api/other-cost/crud/hide/${otherCostID}`)
    }
    async updateOtherCostStatus(updateStatus){
        const updateStatusJson = JSON.parse(JSON.stringify(updateStatus))
        return this.put(`api/cost/othercost/status`, updateStatusJson)
    }
    async newFixedCostBill(fixedCostBillInput){
        const fixedCostBillInputJson = JSON.parse(JSON.stringify(fixedCostBillInput))
        return this.post(`api/cost/fixed-cost/bill/new`, fixedCostBillInputJson)
    }
    async delayFixedCostBill(fixedCostBillID){
        return this.put(`api/cost/fixed-cost/bill/delay/id/${fixedCostBillID}`)
    }
    async payFixedCostBill(fixedCostBillID){
        return this.put(`api/cost/fixed-cost/bill/pay/id/${fixedCostBillID}`)
    }
    async updateFixedCostBillStatus(updateStatus){
        const updateStatusJson = JSON.parse(JSON.stringify(updateStatus))
        return this.put(`api/cost/fixedcost/bill/status`, updateStatusJson)
    }
    async newStore(store){
        const storeJson = JSON.parse(JSON.stringify(store))
        return this.post(`api/store/create`, storeJson)
    }
    async updateStore(store){
        const storeJson = JSON.parse(JSON.stringify(store))
        return this.put(`api/store/update`, storeJson)
    }
}
module.exports = Budabackend