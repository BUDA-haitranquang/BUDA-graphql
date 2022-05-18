const { RESTDataSource } = require('apollo-datasource-rest')
class authenticationService extends RESTDataSource {
    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token)
    }
    constructor() {
        super()
        // this.baseURL = "http://171.244.57.156:9011/"
        // this.baseURL = "http://103.173.228.124:1505/"
        this.baseURL = 'http://34.124.169.2:6060/'
    }
    async userLogin(email, password) {
        return this.post(`api/login`, {
            email: email,
            password: password,
        })
    }
    async newUser(userRegister){
        const userRegisterJson = JSON.parse(JSON.stringify(userRegister))
        return this.post(`api/register`, userRegisterJson)
    }
    async newAccessToken(jwtSimple) {
        const jwtSimpleJson = JSON.parse(JSON.stringify(jwtSimple))
        return this.post('api/token/refresh', jwtSimpleJson)
    }
}

module.exports = authenticationService