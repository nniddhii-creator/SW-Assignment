const { Given, When, Then } = require('cucumber');
const { browser } = require('protractor');
const chai = require('chai');
chai.use(require('chai-as-promised'));

const searchForm = require('../page-objects/search-form.po');

Given('I navigate to {string}', async (string) => {
    await browser.get('http://' + string + ':4200/');
    await browser.sleep(2000);
});

When('I search for name {string}', async (name) => {
    await searchForm.input.clear().sendKeys(name);
    await searchForm.searchBtn.click();
    await browser.sleep(2000);
});

Then('I see Lukes details', async () => {
    await chai.expect(searchForm.firstCharacterName.getAttribute('innerText'))
        .to.eventually.contain('Skywalker');
    await chai.expect(searchForm.gender.getAttribute('innerText'))
    .to.eventually.contain('male');
    await chai.expect(searchForm.birthYear.getAttribute('innerText'))
    .to.eventually.contain('19BBY');
    await chai.expect(searchForm.eyeColor.getAttribute('innerText'))
    .to.eventually.contain('blue');
    await chai.expect(searchForm.skinColor.getAttribute('innerText'))
    .to.eventually.contain('fair');
});

Then('I see not found in details', async () => {
  await chai.expect(searchForm.notFound.getAttribute('innerText'))
    .to.eventually.equals('Not found.');

});

When('I search for planet name {string}', async (planetName) => {
  await searchForm.planetSelector.click();
  await searchForm.input.clear().sendKeys(planetName);
  await searchForm.searchBtn.click();
  await browser.sleep(2000);
});

Then('I see Hoth details', async () => {
  await chai.expect(searchForm.firstPlanetName.getAttribute('innerText'))
    .to.eventually.contain('Hoth');
  await chai.expect(searchForm.population.getAttribute('innerText'))
  .to.eventually.contain('unknown');
  await chai.expect(searchForm.climate.getAttribute('innerText'))
  .to.eventually.contain('frozen');
  await chai.expect(searchForm.gravity.getAttribute('innerText'))
  .to.eventually.contain('1.1');

});

When('I clear the search box and tap enter again', async () => {
  await searchForm.input.clear();
  await searchForm.searchBtn.click();
  await browser.sleep(2000);
});

Then('I switch to planet tab and tap enter again', async () => {
  await searchForm.planetSelector.click();
  await searchForm.searchBtn.click();
  await chai.expect(searchForm.notFound.getAttribute('innerText'))
    .to.eventually.equals('Not found.');

});

Then(/^I see (\d+) result|results for "([^"]*)"$/, async (length, searchName) => {
  if (searchName === 'people') {
    await searchForm.peopleSearchResults.then((items) => {
      chai.expect(items.length - 1).to.equal(length);
    });
  } else if (searchName === 'planet') {
    await searchForm.planetSearchResults.then((items) => {
      chai.expect(items.length - 1).to.equal(length);
    });
  }
});


