import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ws-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: [ './image-picker.component.scss' ],
  styles: [
  ]
})
export class ImagePickerComponent implements OnInit {
  @Input() value: string;
  @Output("onChange") valueChange: EventEmitter<string>;

  constructor() {
    this.valueChange = new EventEmitter<string>();
   }

  ngOnInit(): void {
  }

  onChange(event) {
    if (event.target.files.length === 0) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        // get loaded data and render thumbnail.
        const value = e.target.result.toString();


        this.value = value;
        this.valueChange.emit(value);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(event.target.files[0]);
  }
}
