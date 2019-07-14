import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChatAppComponent } from "./components/chat-app/chat-app.component";
import { ChatWindowComponent } from "./components/chat-window/chat-window.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { MessageComponent } from "./components/message/message.component";
import { ChatInputComponent } from "./components/chat-input/chat-input.component";

import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
import { ChatNamePopupComponent } from './components/chat-name-popup/chat-name-popup.component';

const config: SocketIoConfig = { url: "http://localhost:3000", options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ChatAppComponent,
    ChatWindowComponent,
    UsersListComponent,
    MessageComponent,
    ChatInputComponent,
    ChatNamePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
