/// <reference types="cypress"/>

import { LoginPage } from "./Pages/galaxy_login.cy.js"
const loginPage = new LoginPage

it('Galaxy_Jainam', () => {
    cy.visit('https://galaxy.jainam.in/')
    cy.wait(3000)
    // //cy.get('.close > span').click()
    // cy.wait(4000)

    // // Click on SEARCH 
    // cy.get('.nav_menu_icon').click()
    // cy.wait(4000)

    // //Search Bar
    // cy.get('.main-search-bar-top')
    // cy.wait(4000)

    // cy.get('.scroll')

    // //Click on SEARCH ICON
    // cy.get('.nav_menu_icon').click()

})