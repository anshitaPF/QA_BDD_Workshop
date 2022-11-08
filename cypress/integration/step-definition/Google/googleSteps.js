import { Given, WHen, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import { GooglePage } from '../../../pages/googlePage'

const googlePage = new GooglePage()


Given('I visit Google Page', () => {
    cy.log("=== I visit Google Page === ")
})

When('I enter text', () => {
     cy.log("=== I enter text === ")
})

And('I click on Search', () => {
    cy.log("=== I click on search === ")
})

Then('I should be redirected to next page', () => {
    cy.log("=== I should be redurected to next Google Page === ")
    assert.equal(1==2)
   
})

