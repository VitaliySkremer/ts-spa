abstract class Page {

  protected readonly container: HTMLElement;
  static textObject: {[props: string]: string}

  protected constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  protected createHeaderTitle(text: string) {
    const headerTitle = document.createElement('h1');
    headerTitle.innerText = text;
    return headerTitle;
  }

  render(){
    return this.container
  }
}

export default Page