import { Ng4auth0Page } from './app.po';

describe('ng4auth0 App', () => {
  let page: Ng4auth0Page;

  beforeEach(() => {
    page = new Ng4auth0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
