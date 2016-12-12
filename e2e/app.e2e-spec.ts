import { MyCA2Page } from './app.po';

describe('my-ca2 App', function() {
  let page: MyCA2Page;

  beforeEach(() => {
    page = new MyCA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
