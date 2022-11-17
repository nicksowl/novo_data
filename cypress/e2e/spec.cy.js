const eqeqeq = require("eslint-plugin-vue/lib/rules/eqeqeq")

describe('page is available', () => {
  it('page loads', () => {
    cy.visit('http://localhost:5173/')
    cy.url().should('include', 'localhost')
  })
})

describe('nav bar is available and clickable', () => {
  it('navbar loads', () => {
    // Elements in view are there and clickable
    cy.get('.navbar').contains('View').click()
    cy.get('.navbar').contains('Dashboard').click()
    cy.get('.navbar').contains('Novo Data').click()
  })
})

describe('selection progress is available', () => {
  it('selection is available', () => {
    cy.get('#main-select')
  })
  it('helping text is visible', () => {
    cy.get('p').contains('Start by selecting batch bellow')
  })
})

describe('picker is working and it renders things properly and they are clickable', () => {
  it('batch title is there', () => {
    cy.get('h2').contains('Batch')
  })
  it ('list of batches is rendered', () => {
    cy.get('div > #batchButton').contains('BP400E0101')
  })
  // batch one is clickable and it leads to things
  it ('batch selector, sensor, interval are clickable', () => {
    cy.get('#batchButton').click()
      // on click sensor appears
    cy.get('h2').contains('Sensor')
    // sensors list is there and clickable
    cy.get('div > #sensorButton').contains('400E_Pres1').click()
    // on click interval appear
    cy.get('h2').contains('Sample Interval in minutes')
    cy.get('select').contains(60)
    cy.get('select').not(150)
    // thins are render properly at the top
    cy.get('#main-select > button').contains('Add Extra set')
    cy.get('#main-select > button').contains('See data')
    // reset
    cy.get('#main-select > button > svg').click()
    cy.get('#main-select').not('Add Extra set')
    cy.get('#main-select').not('See data')
  })
})

// pick is good and a visualisation is there and after reset
describe('can select and view single visualisation', () => {
  it('select batch and sensor', () => {
    cy.get('#batchButton').click()
    cy.get('#sensorButton').click()
    cy.get('button').contains('See data').click()
    // cy.wait(500)
    cy.get('#myChart')
    cy.get('#main-select > button > svg').click()
  })
})

// double pik is there and double visualisation appears
describe('can select and view double visualisation', () => {
  it('select batch and sensor and select extra', () => {
    cy.get('#batchButton').click()
    cy.get('#sensorButton').click()
    cy.get('button').contains('Add Extra set').click()
    cy.get('#batchButton').eq(1).click()
    cy.get('#sensorButton').eq(1).click()
    cy.get('button').contains('See data').click()
    cy.get('canvas')
    cy.get('#main-select > button > svg').click()
  })
})
