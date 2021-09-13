import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PopupModel} from "../models/popup-model";

@Component({
  selector: 'app-pop-form',
  templateUrl: './pop-form.component.html',
  styleUrls: ['./pop-form.component.css']
})
export class PopFormComponent implements OnInit {
  @Output() popup = new EventEmitter<PopupModel>();
  private popupElement = new PopupModel(false, false, '');
  constructor() { }

  ngOnInit(): void {
  }

  keyup(text: string): void {
    this.popupElement = new PopupModel(this.popupElement.acceptBtn, this.popupElement.cancelBtn, text);
  }

  accept() {
    this.popupElement = new PopupModel(true, false, this.popupElement.text );
    this.popup.emit(this.popupElement);
  }

  cancel() {
    this.popupElement = new PopupModel(false, true, this.popupElement.text );
    this.popup.emit(this.popupElement);
  }
}
