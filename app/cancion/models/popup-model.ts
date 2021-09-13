export class PopupModel {
  acceptBtn: boolean;
  cancelBtn: boolean;
  text:string;

  constructor(acceptBtn: boolean, cancelBtn: boolean, text: string) {
    this.acceptBtn = acceptBtn;
    this.cancelBtn = cancelBtn;
    this.text = text;
  }
}
