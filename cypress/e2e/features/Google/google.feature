Feature: Testing Google Home Page

Scenario: Search on Google
Given I visit Google Page
When I enter text
And I click on Search
Then I should be redirected to next page