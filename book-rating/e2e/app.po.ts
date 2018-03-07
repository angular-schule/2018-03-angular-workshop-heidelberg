import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    browser.get('/');
    return this;
  }

  goToDashboard() {
    browser.get('/');
    return new DashboardPage();
  }

  getParagraphText() {
    return element(by.css('br-root h1')).getText();
  }
}
