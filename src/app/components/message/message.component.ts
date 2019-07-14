import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { IMessage } from "src/assets/interfaces/shared.interface";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent {
  constructor() {}
  @Input() message: IMessage;
}
