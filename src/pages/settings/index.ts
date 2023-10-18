import Page from "../../core/templates/page";

class SettingsPage extends Page{

  static textObject: {[props: string]: string} = {
    MainTitle: 'Settings page'
  }

  constructor(id: string) {
    super(id)
  }

  render(){
    const title = this.createHeaderTitle(SettingsPage.textObject.MainTitle);
    this.container.append(title);

    return this.container;
  }
}

export default SettingsPage