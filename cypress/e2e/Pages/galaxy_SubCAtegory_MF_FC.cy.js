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


    //Sub Category 
    cy.get('#divSearchSubCategory > .search-main-list-ttl > h4')
    cy.get('#divSearchSubCategory')
    cy.wait(4000)

    //Aggressive Hybrid Fund
    cy.get('#chkSubCategory_2').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_2').uncheck()
    cy.wait(4000)


    //Arbitrage Fund
    cy.get('#chkSubCategory_1').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_1').uncheck()
    cy.wait(4000)


    //Banking and PSU Fund
    cy.get('#chkSubCategory_2').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_2').uncheck()
    cy.wait(4000)



    //Childrens Fund
    cy.get('#chkSubCategory_3').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_3').uncheck()
    cy.wait(4000)


    //Conservative Hybrid Fund
    cy.get('#chkSubCategory_4').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_4').uncheck()
    cy.wait(4000)


    //Contra Fund
    cy.get('#chkSubCategory_5').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_5').uncheck()
    cy.wait(4000)


    //Corporate Bond Fund
    cy.get('#chkSubCategory_6').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_6').uncheck()
    cy.wait(4000)


    //Credit Risk Fund
    cy.get('#chkSubCategory_7').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_7').uncheck()
    cy.wait(4000)


    //Dividend Yield Fund
    cy.get('#chkSubCategory_8').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_8').uncheck()
    cy.wait(4000)


    //Dynamic Asset Allocation or Balanced Advantage
    cy.get('#chkSubCategory_9').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_9').uncheck()
    cy.wait(4000)


    //Dynamic Bond"
    cy.get('#chkSubCategory_10').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_10').uncheck()
    cy.wait(4000)


    //ELSS
    cy.get('#chkSubCategory_9').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_9').uncheck()
    cy.wait(4000)


    //Equity Savings
    cy.get('#chkSubCategory_10').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_11').uncheck()
    cy.wait(4000)


    //ETFs Fund
    cy.get('#chkSubCategory_12').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_12').uncheck()
    cy.wait(4000)



    //Fixed Maturity Plans
    cy.get('#chkSubCategory_13').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_13').uncheck()
    cy.wait(4000)


    //Flexi Cap Fund
    cy.get('#chkSubCategory_14').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_14').uncheck()
    cy.wait(4000)

    //Floater Fund
    cy.get('#chkSubCategory_15').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_15').uncheck()
    cy.wait(4000)


    //Focused Fund
    cy.get('#chkSubCategory_16').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_16').uncheck()
    cy.wait(4000)


    //FoFs Domestic
    cy.get('#chkSubCategory_17').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_17').uncheck()
    cy.wait(4000)


    //FoFs Overseas
    cy.get('#chkSubCategory_18').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_18').uncheck()
    cy.wait(4000)


    //Gilt Fund
    cy.get('#chkSubCategory_19').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_19').uncheck()
    cy.wait(4000)



    //Gilt Fund with 10 year Constant duration
    cy.get('#chkSubCategory_20').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_20').uncheck()
    cy.wait(4000)


    //Index Fund
    cy.get('#chkSubCategory_21').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_21').uncheck()
    cy.wait(4000)


    //Large & Mid Cap Fund
    cy.get('#chkSubCategory_22').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_22').uncheck()
    cy.wait(4000)


    //Large Cap Fund
    cy.get('#chkSubCategory_23').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_23').uncheck()
    cy.wait(4000)


    //Liquid Fund
    cy.get('#chkSubCategory_24').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_24').uncheck()
    cy.wait(4000)


    //Long Duration Fund
    cy.get('#chkSubCategory_25').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_25').uncheck()
    cy.wait(4000)


    //Low Duration Fund
    cy.get('#chkSubCategory_26').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_26').uncheck()
    cy.wait(4000)


    //Medium Duration Fund"
    cy.get('#chkSubCategory_27').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_27').uncheck()
    cy.wait(4000)


    //Medium to Long Duration Fund
    cy.get('#chkSubCategory_28').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_28').uncheck()
    cy.wait(4000)


    //Mid Cap Fund
    cy.get('#chkSubCategory_29').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_29').uncheck()
    cy.wait(4000)


    //Money Market Fund
    cy.get('#chkSubCategory_30').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_30').uncheck()
    cy.wait(4000)


    //Multi Asset Allocation
    cy.get('#chkSubCategory_31').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_31').uncheck()
    cy.wait(4000)


    //Multi Cap Fund
    cy.get('#chkSubCategory_32').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_32').uncheck()
    cy.wait(4000)


    //Overnight Fund
    cy.get('#chkSubCategory_33').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_33').uncheck()
    cy.wait(4000)



    //Retirement Fund
    cy.get('#chkSubCategory_34').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_34').uncheck()
    cy.wait(4000)


    //Sectoral / Thematic
    cy.get('#chkSubCategory_35').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_35').uncheck()
    cy.wait(4000)


    //Short Duration Fund
    cy.get('#chkSubCategory_36').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_36').uncheck()
    cy.wait(4000)


    //Small Cap Fund
    cy.get('#chkSubCategory_37').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_37').uncheck()
    cy.wait(4000)


    //Ultra Short Duration Fund
    cy.get('#chkSubCategory_38').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_38').uncheck()
    cy.wait(4000)


    //Value Fund
    cy.get('#chkSubCategory_39').check()
    cy.wait(4000)
    cy.get('#chkSubCategory_39').uncheck()
    cy.wait(4000)






})