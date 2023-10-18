import Page from "../../core/templates/page";

export enum ErrorTypes {
  Error_404 = 404
}

class ErrorPage extends Page {
  static textObject: {[props: string]: string} = {
    '404': 'Error page not found'
  }

  private readonly errorId: ErrorTypes | number;

  constructor(id: string, errorId: ErrorTypes | number) {
    super(id)
    this.errorId = errorId;
  }

  render(){
    const title = this.createHeaderTitle(ErrorPage.textObject[this.errorId]);
    this.container.append(title);

    return this.container;
  }
}

export default ErrorPage;