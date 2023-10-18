import MainPage from "../main";
import SettingsPage from "../settings";
import Page from "../../core/templates/page";
import StatisticPage from "../statistics";
import ErrorPage from "../error";
import Header from "../../core/components/header";
import { ErrorTypes } from "../error";

export enum PagesId {
  MAIN_PAGE = 'main-page',
  SETTINGS_PAGE = 'settings-page',
  STATISTIC_PAGE = 'statistic-page'
}

class App {
  static container: HTMLElement = document.body;
  private static defaultPageId: string = 'current-page'
  private readonly header: Header

  static renderNewPage(idPage: string) {

    const currentPage = document.getElementById(App.defaultPageId)
    if(currentPage){
      currentPage.remove();
    }
    let page: Page | null = null;

    switch (idPage){
      case PagesId.MAIN_PAGE: page = new MainPage(PagesId.MAIN_PAGE);
        break;
      case PagesId.SETTINGS_PAGE: page = new SettingsPage(PagesId.SETTINGS_PAGE);
        break;
      case PagesId.STATISTIC_PAGE: page = new StatisticPage(PagesId.STATISTIC_PAGE);
        break;
      default: page = new ErrorPage(PagesId.STATISTIC_PAGE, ErrorTypes.Error_404);
    }

    if(page){
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      document.body.append(pageHTML);
    }
  }

  private enableRouteChange() {
    this.routeChange();
    window.addEventListener('hashchange', this.routeChange)
  }

  private routeChange() {
    const id = window.location.hash.slice(1);
    if(!id.length) {
      App.renderNewPage(PagesId.MAIN_PAGE)
      return;
    }
    App.renderNewPage(id);
  }

  constructor() {
    this.header = new Header('header', 'header')
  }
  run(){
    App.container.append(this.header.render());
    this.enableRouteChange();
  }
}

export default App;