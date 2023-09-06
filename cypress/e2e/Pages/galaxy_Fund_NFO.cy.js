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
    cy.get('#chkUpcommingNFO').check()
    cy.get('#chkCategory_1').check()
    cy.wait(3000)


    cy.get('#chkCurrentNFO').uncheck()
    cy.get('#chkUpcommingNFO').uncheck()
    cy.get('#chkCategory_1').uncheck()
    cy.wait(3000)

    //Checking Filters 
    cy.get('#chkUpcommingNFO').check()
    cy.get('#chkCloseNFO').check()
    cy.get('#chkCategory_4').check()
    cy.wait(3000)


    //Checking Filters 
    cy.get('#chkUpcommingNFO').uncheck()
    cy.get('#chkCloseNFO').uncheck()
    cy.get('#chkCategory_4').uncheck()
    cy.wait(3000)


    //Checking Filters
    cy.get('#chkUpcommingNFO').check()
    cy.get('#chkCloseNFO').check()
    cy.get('#chkCategory_3').check()
    cy.wait(3000)

    cy.get('#chkUpcommingNFO').uncheck()
    cy.get('#chkCloseNFO').uncheck()
    cy.get('#chkCategory_3').uncheck()
    cy.wait(3000)



})