import { $ } from 'protractor';

export class GoogleResultsPage {
  getBox() {
    return $('div.knowledge-panel');
  }
}
