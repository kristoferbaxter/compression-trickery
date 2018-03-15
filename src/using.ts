import {States} from './enums';

export class Using {
  private state: States = States.LOADING;

  public async connect(): Promise<States> {
    try {
      console.log(await (await fetch('https://jsonplaceholder.typicode.com/posts/1')).json());
      return this.state = States.SUCCESS;
    } catch(e) {
      return this.state = States.FAILED;
    }
  }
}