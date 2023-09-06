/// <reference types="cypress"/>

import { LoginPage } from "./galaxy_login.cy.js"
const loginPage = new LoginPage

it('Galaxy_Jainam', () => {
    cy.visit('https://galaxy.jainam.in/')
    cy.wait(3000)
    //cy.get('.close > span').click()
    cy.wait(4000)

    //EXPLORE CATEGORIES
    cy.get('.hp_explore_fund > .hp_explore_ttl > h3').click()
    //cy.wait(2000)

    //High Return
    cy.get('.hp_explore_flex > :nth-child(1)').click()
    cy.wait(2000)

    //Back To Home 
    cy.get('#ClientMenu').click()
    cy.wait(1000)

    //EXPLORE CATEGORIES
    cy.get('.hp_explore_fund > .hp_explore_ttl > h3').click()
    cy.wait(2000)


    //ELSS-Tax saver
    cy.get('.hp_explore_flex > :nth-child(2)').click()
    cy.wait(4000)

    //FUND CATEGORIES 
    cy.get('#chkCategory_2').click()
    cy.wait(4000)

    //Check SUB CATEGORY
    cy.get('#chkSubCategory_2').click()
    cy.wait(4000)

    //Back To Home 
    cy.get('#ClientMenu').click()
    //cy.wait(3000)

    //EXPLORE CATEGORIES
    cy.get('.hp_explore_fund > .hp_explore_ttl > h3').click()
    //cy.wait(2000)


    //Flexi Funds 
    cy.get('.hp_explore_flex > :nth-child(3)').click()
    cy.wait(4000)


    //FUND CATEGORIES 
    cy.get('#chkCategory_2').click()
    cy.wait(4000)

    //Check Sub Category 
    cy.get('#chkSubCategory_3').click()
    cy.wait(4000)

    //Back To Home 
    cy.get('#ClientMenu').click()
    cy.wait(3000)

    //EXPLORE CATEGORIES
    cy.get('.hp_explore_fund > .hp_explore_ttl > h3').click()
    cy.wait(2000)


    //Large Caps
    cy.get('.hp_explore_flex > :nth-child(4)').click()
    cy.wait(4000)

    //FUND CATEGORIES 
    cy.get('#chkCategory_2').click()
    cy.wait(4000)

    //Check Sub Category 
    cy.get('#chkSubCategory_6').click()
    cy.wait(4000)

    //Back To Home 
    cy.get('#ClientMenu').click()
    cy.wait(3000)

    //EXPLORE CATEGORIES
    cy.get('.hp_explore_fund > .hp_explore_ttl > h3').click()
    cy.wait(2000)


    //Small Caps 
    cy.get('.hp_explore_flex > :nth-child(5)').click()
    cy.wait(4000)

    //FUND CATEGORIES 
    cy.get('#chkCategory_2').click()
    cy.wait(4000)

    //Check Sub Category 
    cy.get('#chkSubCategory_10').click()
    cy.wait(4000)

    //Back To Home 
    cy.get('#ClientMenu').click()
    cy.wait(3000)

    //EXPLORE CATEGORIES
    cy.get('.hp_explore_fund > .hp_explore_ttl > h3').click()
    cy.wait(2000)


    //Index Funds 
    cy.get('.hp_explore_flex > :nth-child(6)').click()
    cy.wait(4000)

    //FUND CATEGORIES 
    cy.get('#chkCategory_4').click()
    cy.wait(4000)

    //Check Sub Category 
    cy.get('#chkSubCategory_3').click()
    cy.wait(4000)

    //Back To Home 
    cy.get('#ClientMenu').click()
    cy.wait(3000)

    //EXPLORE CATEGORIES
    cy.get('.hp_explore_fund > .hp_explore_ttl > h3').click()
    cy.wait(2000)


    //Thematic Funds 
    cy.get('.hp_explore_flex > :nth-child(7)').click()
    cy.wait(3000)


    //FUND CATEGORIES 
    cy.get('#chkCategory_2').click()
    cy.wait(4000)

    //Check Sub Category 
    cy.get('#chkSubCategory_9').click()
    cy.wait(4000)

    //Back To Home 
    cy.get('#ClientMenu').click()
    cy.wait(4000)

    //EXPLORE CATEGORIES
    cy.get('.hp_explore_fund > .hp_explore_ttl > h3').click()
    cy.wait(2000)

    //Liquid Funds 
    cy.get('.hp_explore_flex > :nth-child(8)').click()
    cy.wait(4000)

    //FUND CATEGORIES
    cy.get('#chkCategory_1').click()
    cy.wait(4000)

    //Checking Sub Category 
    cy.get('#chkSubCategory_8').click()
    cy.wait(4000)

    //Back To Home 
    cy.get('#ClientMenu').click()
    cy.wait(4000)

    //EXPLORE CATEGORIES
    cy.get('.hp_explore_fund > .hp_explore_ttl > h3').click()
    cy.wait(2000)







})