import { GooglePage } from './google.po';
import { browser } from 'protractor';

describe('Google', () => {
  let googlePage: GooglePage;

  beforeAll(() => browser.waitForAngularEnabled(false));

  beforeEach(() => {
    googlePage = new GooglePage();
  });

  it('should show subtitle in box', () => {
    const box = googlePage
      .navigateTo()
      .search('Heidelberg')
      .getBox();

    expect(box.getText())
      .toContain('Großstadt in Baden-Württemberg');
  });

  afterAll(() => browser.waitForAngularEnabled(true));

});
