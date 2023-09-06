/// <reference types="cypress"/>

import { LoginPage } from "./galaxy_login.cy.js"
const loginPage = new LoginPage

it('Galaxy_Jainam', () => {
    cy.visit('https://galaxy.jainam.in/')
    cy.wait(3000)
    //cy.get('.close > span').click()
    cy.wait(4000)

    // Click on SEARCH 
    cy.get('.nav_menu_icon').click()
    cy.wait(4000)


    //Selecting Diiferent Filters
    cy.get('#chkRecommandate').check()
    cy.get('#chkCategory_1').check()
    cy.wait(3000)

    cy.get('#chkRecommandate').uncheck()
    cy.get('#chkCategory_1').uncheck()
    cy.wait(3000)

    //Selecting Diiferent Filters
    cy.get('#chkTopRank').check()
    cy.get('#chkCategory_3').check()
    cy.wait(3000)

    cy.get('#chkTopRank').uncheck()
    cy.get('#chkCategory_3').uncheck()
    cy.wait(3000)

    //Selecting Diiferent Filters
    cy.get('#chkFavourite').check()
    cy.get('#chkCategory_5').check()
    cy.wait(3000)

    cy.get('#chkFavourite').uncheck()
    cy.get('#chkCategory_5').uncheck()
    cy.wait(3000)




})