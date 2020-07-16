import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-get-check-box',
    templateUrl: './get-check-box.component.html',
    styleUrls: ['./get-check-box.component.scss']
})
export class GetCheckBoxComponent {
    lastAction: string;

    @Output() onMyMethod = new EventEmitter();
    field = [
        {label: 'title', checked: false},
        {label: 'tag', checked: false}
    ];


    onChange(event, index, item) {

        item.checked = !item.checked;

        this.lastAction = 'index: ' + index + ', label: ' + item.label + ', checked: ' + item.checked;

        this.onMyMethod.emit(item);
        // console.log(index, event, item);
    }


}
