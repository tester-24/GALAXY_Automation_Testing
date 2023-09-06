
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

    //Search Bar
    cy.get('.main-search-bar-top').click()
    cy.wait(4000)

    //Selecting NFO 
    cy.get('.nav > :nth-child(2) > a').click()
    cy.wait(3000)
    cy.get('#chkCurrentNFO').uncheck()

    //Check CURRENT  NFO 
    cy.get('#chkUpcommingNFO').check()
    cy.wait(3000)
    cy.get('#chkUpcommingNFO').uncheck()
    cy.wait(2000)


    //Check Close NFO 
    cy.get('#chkCloseNFO').check()
    cy.wait(3000)
    cy.get('#chkCloseNFO').uncheck()
    cy.wait(3000)


})