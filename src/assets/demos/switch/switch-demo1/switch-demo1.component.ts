import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-demo1',
  templateUrl: './switch-demo1.component.html',
  styleUrls: ['./switch-demo1.component.scss']
})
export class SwitchDemo1Component {
  switch1Value:boolean = false;
  switch2Value:boolean = true;
}
