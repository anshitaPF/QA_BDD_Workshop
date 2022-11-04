const data = require('../fixtures/example.json')
export class GooglePage {

    weblocators = {
        input: 'input[name="q"]',
        search: 'input[value="Google Search"]',
        result: 'div.v7W49e',
        lang: 'a:contains("English")'


    }

    openUrl() {

        cy.visit('https://www.google.com/')
        cy.get(this.weblocators.lang).click()
    }

    enterText() {
        cy.get(this.weblocators.input).type(data.text)

    }
    clickSearch() {
        cy.get(this.weblocators.search).last().click()

    }
    verifyResponse() {

    }

}