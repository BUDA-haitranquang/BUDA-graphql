const { RESTDataSource } = require('apollo-datasource-rest')
class authenticationService extends RESTDataSource {
    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token)
    }
    constructor() {
        super()
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
    async confirmRegister(token) {
        return this.get(`api/register/confirm/?token=${token}`)
    }
    async updateUserPassword(updateUserPassword){
        const updateUserPasswordJson=JSON.parse(JSON.stringify(updateUserPassword))
        return this.put(`api/password/update`, updateUserPasswordJson)
    }
    async forgotPassword(email){
        return this.get(`api/password/forgot/?email=${email}`)
    }
    async updateForgotPassword(token, updateUserPassword){
        const updateUserPasswordJson=JSON.parse(JSON.stringify(updateUserPassword))
        return this.put(`api/password/forgot/confirm/?token=${token}`, updateUserPasswordJson)
    }
}

module.exports = authenticationService