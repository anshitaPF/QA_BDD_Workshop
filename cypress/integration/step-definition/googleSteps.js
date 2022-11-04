import { Given, WHen, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { GooglePage } from '../../pages/googlePage'

const googlePage = new GooglePage()

Given('I visit Google Page', () => {
    googlePage.openUrl()

})

When('I enter text', () => {
    googlePage.enterText()
})

And('I click on Search', () => {
    googlePage.clickSearch()
})

Then('I should be redirected to next page', () => {
    googlePage.verifyResponse()
})