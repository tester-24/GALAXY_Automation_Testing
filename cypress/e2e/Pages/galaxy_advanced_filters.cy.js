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

    // Checking Advance Filters 
    cy.get('#showtoggle').click()
    cy.wait(2000)

    //360 ONE Mutual Fund

    //Aditya Birla Sun Life Mutual Fund
    cy.get('#chkAMC_2').check()
    cy.wait(2000)
    cy.get('#chkAMC_2').uncheck()
    cy.wait(2000)

    //Axis Mutual Fund
    cy.get('#chkAMC_3').check()
    cy.wait(2000)
    cy.get('#chkAMC_3').uncheck()
    cy.wait(2000)

    //Bajaj Finserv Mutual Ltd
    cy.get('#chkAMC_4').check()
    cy.wait(2000)
    cy.get('#chkAMC_4').uncheck()
    cy.wait(2000)

    //Bandhan Mutual Fund
    cy.get('#chkAMC_5').check()
    cy.wait(2000)
    cy.get('#chkAMC_5').uncheck()
    cy.wait(2000)

    //Bank of India Mutual Fund
    cy.get('#chkAMC_6').check()
    cy.wait(2000)
    cy.get('#chkAMC_6').uncheck()
    cy.wait(2000)

    //Baroda BNP Paribas Mutual Fund
    cy.get('#chkAMC_7').check()
    cy.wait(2000)
    cy.get('#chkAMC_7').uncheck()
    cy.wait(2000)

    //Canara Robeco Mutual Fund
    cy.get('#chkAMC_8').check()
    cy.wait(2000)
    cy.get('#chkAMC_8').uncheck()
    cy.wait(2000)


    //DSP Mutual Fund
    cy.get('#chkAMC_9').check()
    cy.wait(2000)
    cy.get('#chkAMC_9').uncheck()
    cy.wait(2000)

    //Edelweiss Mutual Fund
    cy.get('#chkAMC_10').check()
    cy.wait(2000)
    cy.get('#chkAMC_10').uncheck()
    cy.wait(2000)

    //Franklin Templeton Mutual Fund
    cy.get('#chkAMC_11').check()
    cy.wait(2000)
    cy.get('#chkAMC_11').uncheck()
    cy.wait(2000)

    //Groww Mutual Fund
    cy.get('#chkAMC_12').check()
    cy.wait(2000)
    cy.get('#chkAMC_12').uncheck()
    cy.wait(2000)

    //HDFC Mutual Fund
    cy.get('#chkAMC_13').check()
    cy.wait(2000)
    cy.get('#chkAMC_13').uncheck()
    cy.wait(2000)

    //HSBC Mutual Fund
    cy.get('#chkAMC_14').check()
    cy.wait(2000)
    cy.get('#chkAMC_14').uncheck()
    cy.wait(2000)

    //ICICI Prudential Mutual Fund
    cy.get('#chkAMC_15').check()
    cy.wait(2000)
    cy.get('#chkAMC_15').uncheck()
    cy.wait(2000)

    //IDBI Mutual Fund
    cy.get('#chkAMC_16').check()
    cy.wait(2000)
    cy.get('#chkAMC_16').uncheck()
    cy.wait(2000)

    //Invesco Mutual Fund
    cy.get('#chkAMC_17').check()
    cy.wait(2000)
    cy.get('#chkAMC_17').uncheck()
    cy.wait(2000)

    //ITI Mutual Fund
    cy.get('#chkAMC_18').check()
    cy.wait(2000)
    cy.get('#chkAMC_18').uncheck()
    cy.wait(2000)

    //JM Financial Mutual Fund
    cy.get('#chkAMC_19').check()
    cy.wait(2000)
    cy.get('#chkAMC_19').uncheck()
    cy.wait(2000)

    //Kotak Mahindra Mutual Fund
    cy.get('#chkAMC_20').check()
    cy.wait(2000)
    cy.get('#chkAMC_20').uncheck()
    cy.wait(2000)

    //LIC Mutual Fund
    cy.get('#chkAMC_21').check()
    cy.wait(2000)
    cy.get('#chkAMC_21').uncheck()
    cy.wait(2000)

    //Mahindra Manulife Mutual Fund
    cy.get('#chkAMC_22').check()
    cy.wait(2000)
    cy.get('#chkAMC_22').uncheck()
    cy.wait(2000)

    //Mirae Asset Mutual Fund
    cy.get('#chkAMC_23').check()
    cy.wait(2000)
    cy.get('#chkAMC_23').uncheck()
    cy.wait(2000)

    //Motilal Oswal Mutual Fund
    cy.get('#chkAMC_24').check()
    cy.wait(2000)
    cy.get('#chkAMC_24').uncheck()
    cy.wait(2000)

    //Navi Mutual Fund
    cy.get('#chkAMC_25').check()
    cy.wait(2000)
    cy.get('#chkAMC_25').uncheck()
    cy.wait(2000)

    //Nippon India Mutual Fund
    cy.get('#chkAMC_26').check()
    cy.wait(2000)
    cy.get('#chkAMC_26').uncheck()
    cy.wait(2000)

    //NJ Mutual Fund
    cy.get('#chkAMC_27').check()
    cy.wait(2000)
    cy.get('#chkAMC_27').uncheck()
    cy.wait(2000)

    //PGIM India Mutual Fund
    cy.get('#chkAMC_28').check()
    cy.wait(2000)
    cy.get('#chkAMC_28').uncheck()
    cy.wait(2000)

    //PPFAS Mutual Fund
    cy.get('#chkAMC_29').check()
    cy.wait(2000)
    cy.get('#chkAMC_29').uncheck()
    cy.wait(2000)

    //Quant Mutual Fund
    cy.get('#chkAMC_30').check()
    cy.wait(2000)
    cy.get('#chkAMC_30').uncheck()
    cy.wait(2000)

    //Quantum Mutual Fund
    cy.get('#chkAMC_31').check()
    cy.wait(2000)
    cy.get('#chkAMC_31').uncheck()
    cy.wait(2000)

    //Samco Mutual Fund
    cy.get('#chkAMC_32').check()
    cy.wait(2000)
    cy.get('#chkAMC_32').uncheck()
    cy.wait(2000)

    //SBI Mutual Fund
    cy.get('#chkAMC_33').check()
    cy.wait(2000)
    cy.get('#chkAMC_33').uncheck()
    cy.wait(2000)

    //Shriram Mutual Fund
    cy.get('#chkAMC_34').check()
    cy.wait(2000)
    cy.get('#chkAMC_34').uncheck()
    cy.wait(2000)

    //Sundaram Mutual Fund
    cy.get('#chkAMC_35').check()
    cy.wait(2000)
    cy.get('#chkAMC_35').uncheck()
    cy.wait(2000)

    //Tata Mutual Fund
    cy.get('#chkAMC_36').check()
    cy.wait(2000)
    cy.get('#chkAMC_36').uncheck()
    cy.wait(2000)

    //Taurus Mutual Fund
    cy.get('#chkAMC_37').check()
    cy.wait(2000)
    cy.get('#chkAMC_37').uncheck()
    cy.wait(2000)

    //Trust Mutual Fund
    cy.get('#chkAMC_38').check()
    cy.wait(2000)
    cy.get('#chkAMC_38').uncheck()
    cy.wait(2000)

    //Union Mutual Fund
    cy.get('#chkAMC_39').check()
    cy.wait(2000)
    cy.get('#chkAMC_39').uncheck()
    cy.wait(2000)

    //UTI Mutual Fund
    cy.get('#chkAMC_38').check()
    cy.wait(2000)
    cy.get('#chkAMC_38').uncheck()
    cy.wait(2000)

    //WhiteOak Capital Mutual Fund
    cy.get('#chkAMC_39').check()
    cy.wait(2000)
    cy.get('#chkAMC_39').uncheck()
    cy.wait(2000)

    //Back To ADVANCEDFILTERS 
    cy.get('#showtoggle').click()
    cy.wait(2000)

    //Min Statement
    cy.get('#MinInvestment').click()
    cy.wait(2000)

    //Range
    cy.get('.range-slider')
    cy.wait(2000)

    //Selecting Diiferent Filters
    cy.get('#chkRecommandate').check()
    cy.get('#chkTopRank').check()

    //Selecting Diiferent Filters
    cy.get('#chkRecommandate').uncheck()
    cy.get('#chkTopRank').uncheck()

    //Selecting Diiferent Filters
    cy.get('#chkRecommandate').check()
    cy.get('#chkFavourite').check()

    //Selecting Diiferent Filters
    cy.get('#chkRecommandate').uncheck()
    cy.get('#chkFavourite').uncheck()

    //Selecting Diiferent Filters
    cy.get('#chkTopRank').check()
    cy.get('#chkFavourite').check()

    //Selecting Diiferent Filters
    cy.get('#chkTopRank').uncheck()
    cy.get('#chkFavourite').uncheck()



})