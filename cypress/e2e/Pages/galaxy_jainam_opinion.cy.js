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

    //Check Recommended
    cy.get('#chkRecommandate').check()
    cy.wait(2000)
    cy.get('#chkRecommandate').uncheck()
    cy.wait(2000)


    //Checking TOP RANKED 
    cy.get('#chkTopRank').check()
    cy.wait(2000)
    cy.get('#chkTopRank').uncheck()
    cy.wait(2000)



    //Check FAVOURITES
    cy.get('#chkFavourite').check()
    cy.wait(2000)
    // cy.get('#chkFavourite').uncheck()
    // cy.wait(2000)



})