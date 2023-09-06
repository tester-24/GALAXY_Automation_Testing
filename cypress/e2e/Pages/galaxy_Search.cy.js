/// <reference types="cypress"/>

import { LoginPage } from "./galaxy_login.cy.js"
const loginPage = new LoginPage

it('Galaxy_Jainam', () => {
    cy.visit('https://galaxy.jainam.in/')
    cy.wait(3000)
    // cy.get('.close > span').click()
    // cy.wait(4000)

    // Click on SEARCH 
    cy.get('.nav_menu_icon').click()
    cy.wait(4000)

    //Search Bar
    cy.get('.main-search-bar-top').type('HDFC')

    cy.wait(4000)

    //Click on SEARCH ICON
    cy.get('.nav_menu_icon').click()
    cy.get('.main-search-bar-top').type('AXIS')
    cy.wait(4000)


    //Click on SEARCH ICON
    cy.get('.nav_menu_icon').click()
    cy.get('.main-search-bar-top').type('BANK')
    cy.wait(4000)


    //Click on SEARCH ICON
    cy.get('.nav_menu_icon').click()
    cy.get('.main-search-bar-top').type('CANARA')
    cy.wait(4000)


    //Click on SEARCH ICON
    cy.get('.nav_menu_icon').click()
    cy.get('.main-search-bar-top').type('KOTAK')
    cy.wait(4000)


    //Click on SEARCH ICON
    cy.get('.nav_menu_icon').click()
    cy.get('.main-search-bar-top').type('ICICI')
    cy.wait(4000)

    //Click on SEARCH ICON
    cy.get('.nav_menu_icon').click()
    cy.get('.main-search-bar-top').type('LIC')
    cy.wait(4000)

    // //Click on SEARCH ICON
    cy.get('.nav_menu_icon').click()


})