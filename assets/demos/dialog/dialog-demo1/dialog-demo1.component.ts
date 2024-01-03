import { Component } from '@angular/core';
import { DialogRef1Component } from '../dialog-ref1/dialog-ref1.component';
import { NgxDialog } from 'ngx-ui-jbisbal/dialog';

@Component({
  selector: 'app-dialog-demo1',
  templateUrl: './dialog-demo1.component.html',
  styleUrls: ['./dialog-demo1.component.scss'],
})
export class DialogDemo1Component {
  constructor(public ngxDialog: NgxDialog) {}
  openDialog() {
    this.ngxDialog.open(
      DialogRef1Component,
      { data: 'str' },
      { width: '20rem', height: '20rem' }
    );
  }
}
