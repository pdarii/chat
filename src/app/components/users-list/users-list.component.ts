import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output
} from "@angular/core";
import { IUser } from "src/assets/interfaces/shared.interface";

@Component({
  selector: "users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  @Input() usersList: IUser[];
  @Output() onUserSelect = new EventEmitter<IUser>();

  constructor() {}
  public selectUser(user: IUser) {
    this.onUserSelect.emit(user);
  }
}
