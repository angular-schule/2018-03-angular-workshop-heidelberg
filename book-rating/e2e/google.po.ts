import { browser, $ } from 'protractor';
import { GoogleResultsPage } from './google-results.po';

export class GooglePage {
  navigateTo() {
    browser.get('https://www.google.de');
    return this;
  }

  search(searchTerm: string) {
    const searchContainer = $('form#tsf');
    searchContainer.$('input#lst-ib').sendKeys(searchTerm);
    // browser.sleep(5000);
    searchContainer.submit();
    return new GoogleResultsPage();
  }
}
