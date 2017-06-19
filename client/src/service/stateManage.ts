import * as Rx from 'rxjs/Rx';

// Observer for state managing of stepper
export class StateManage {
	static stepperObserver: Rx.Subject<any> = new Rx.Subject<any>();
}
