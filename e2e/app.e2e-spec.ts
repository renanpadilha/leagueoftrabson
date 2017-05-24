import { LeagueoftrabsonPage } from './app.po';

describe('leagueoftrabson App', () => {
  let page: LeagueoftrabsonPage;

  beforeEach(() => {
    page = new LeagueoftrabsonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
