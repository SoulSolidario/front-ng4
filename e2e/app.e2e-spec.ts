import { SSFrontPage } from './app.po';

describe('s-s-front App', () => {
  let page: SSFrontPage;

  beforeEach(() => {
    page = new SSFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
