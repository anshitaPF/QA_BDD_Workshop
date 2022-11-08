# QA_BDD_Workshop
=================


# Installation
npm install
npx cypress open


# Tech Stack:


JavaScript
BDD Framework : Cucumber
Cypress



# Cypress Dashboard Link:
https://dashboard.cypress.io/projects/8wkb3r/runs/3/overview




# How to write test case

Below is the heirarchy:

Features  
Step-Definition
Pages

1. Features: Go to e2e/features. Create a .feature file . Write the scenarios in feature file

2. Step-Definition: Go to integration/step-definition. Write the corresponding steps here and import the gherin keywords from "cypress-cucumber-preprocessor/steps";
4. Pages: Create a page class which would basically create all the actions performed on the web page ( Eg : clicking on an element / typing text in and input)

Once you are done doing all the three steps, run "npx cypress open" - Choose E2E Testing then select the browser and finally select your .feature file

Congratulations, finally you would be able to run your 1st test case
