import { WeatherServicePage } from './app.po';

describe('weather-service App', () => {
  let page: WeatherServicePage;

  beforeEach(() => {
    page = new WeatherServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
