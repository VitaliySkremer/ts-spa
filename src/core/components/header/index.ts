import Components from "../../templates/components";
import { PagesId } from "../../../pages/app";

class Header extends Components {

  private readonly Buttons = [
    {
      id: PagesId.MAIN_PAGE,
      text: 'main page'
    },
    {
      id: PagesId.SETTINGS_PAGE,
      text: 'settings page'
    },
    {
      id: PagesId.STATISTIC_PAGE,
      text: 'statistic page'
    },
  ]

  constructor(tag: string, className: string) {
    super(tag, className);
  }

  renderPageButtons() {
    const pageButtons = document.createElement('div');

    this.Buttons.forEach(button => {
      const buttonEl = document.createElement('a');
      buttonEl.href = `#${button.id}`;
      buttonEl.innerText = button.text;
      buttonEl.classList.add('header__container-link')
      pageButtons.append(buttonEl);
    })
    pageButtons.classList.add('header__container')
    this.container.append(pageButtons);
  }

  render(): HTMLElement {
    this.renderPageButtons();
    return super.render();
  }

}

export default Header;