const { RESTDataSource } = require('apollo-datasource-rest')
class notifierService extends RESTDataSource {
    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token)
    }
    constructor() {
        super()
        // this.baseURL = "http://171.244.57.156:9011/"
        // this.baseURL = "http://103.173.228.124:1505/"
        // this.baseURL = 'http://34.124.169.2:6060/'
    }
    async allNotifier(){
        return this.get(`api/notification/all`)
    }
}

module.exports = notifierService