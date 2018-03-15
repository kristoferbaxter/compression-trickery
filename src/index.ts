import {States} from './enums';
import {Using} from './using';

console.log(States.SUCCESS, States.LOADING, States.FAILED);

const using = new Using();
Promise.resolve(using.connect()).then((state) => console.log(`data? ${state}`));