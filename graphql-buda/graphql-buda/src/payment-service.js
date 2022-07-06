const { RESTDataSource } = require('apollo-datasource-rest')
class paymentService extends RESTDataSource {
    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token)
    }
    constructor() {
        super()
        this.baseURL = 'http://103.173.228.124:2000/'
    }
    async zaloCallback(callback) {
        const callbackJson = JSON.parse(JSON.stringify(callback))
        return this.post(`api/payment/zalopay/callback`, callbackJson)
    }
    async zaloGetOrderStatus(apptransid){
        return this.get(`api/payment/zalopay/get-order-status/${apptransid}`)
    }
    async zaloCreateOrder(purchase){
        const purchaseJson = JSON.parse(JSON.stringify(purchase))
        return this.post(`api/payment/zalopay/create-order`, purchaseJson)
    }
}
module.exports = paymentService