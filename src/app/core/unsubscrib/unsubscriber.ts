import {Subject} from "rxjs";

export class Unsubscriber {
  public ngUnsubscribe: Subject<void> = new Subject<void>();
  protected unsubscribe(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
