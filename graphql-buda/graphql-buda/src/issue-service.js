const { RESTDataSource } = require('apollo-datasource-rest')
class issueService extends RESTDataSource {
    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token)
    }
    constructor() {
        super()
        this.baseURL = 'http://159.89.203.89:1505/'
    }
    async newIssue(issue){
        const issueInputJson = JSON.parse(JSON.stringify(issue))
        return this.post(`api/issue/new`, issueInputJson)
    }
}

module.exports = issueService