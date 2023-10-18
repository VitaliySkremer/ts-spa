import Page from "../../core/templates/page";

class StatisticPage extends Page{

  static textObject: {[props: string]: string} = {
    MainTitle: 'Statistic page'
  }

  constructor(id: string) {
    super(id)
  }

  render(){
    const title = this.createHeaderTitle(StatisticPage.textObject.MainTitle);
    this.container.append(title);

    return this.container;
  }
}

export default StatisticPage