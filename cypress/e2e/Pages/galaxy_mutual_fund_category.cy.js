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

    //Fund Category 
    cy.get('#divSearchCategory > .search-main-list-ttl > h4')
    cy.wait(2000)

    //Fund Category - Debt
    cy.get('#chkCategory_1').check()
    cy.wait(3000)
    cy.get('#chkCategory_1').uncheck()
    cy.wait(3000)


    //SUB CATGEGORY 
    cy.get('#divSearchSubCategory > .search-main-list-ttl > h4')
    cy.wait(4000)

    //Fund Category - Equity 
    cy.get('#chkCategory_2').check()
    cy.wait(3000)
    cy.get('#chkCategory_2').uncheck()
    cy.wait(3000)

    //Fund Category - Hybrid 
    cy.get('#chkCategory_3').check()
    cy.wait(3000)
    cy.get('#chkCategory_3').uncheck()
    cy.wait(3000)

    //Fund Category - Other 
    cy.get('#chkCategory_4').check()
    cy.wait(3000)
    cy.get('#chkCategory_4').uncheck()
    cy.wait(3000)

    //Checking Filter - Solution Oriented
    cy.get('#chkCategory_5').check()
    cy.wait(3000)
    cy.get('#chkCategory_5').uncheck()
    cy.wait(3000)
})