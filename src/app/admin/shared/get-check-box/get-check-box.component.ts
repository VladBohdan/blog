import { Component } from '@angular/core';

@Component({
  selector: 'app-get-check-box',
  templateUrl: './get-check-box.component.html',
  styleUrls: ['./get-check-box.component.scss']
})
export class GetCheckBoxComponent {
  lastAction: string;

  field = [
    { label: 'title', checked: false },
    { label: 'tag', checked: false }
  ];

  onChange(event, index, item) {

    item.checked = !item.checked;

    this.lastAction = 'index: ' + index + ', label: ' + item.label + ', checked: ' + item.checked;

    console.log(index, event, item);

  }


}
