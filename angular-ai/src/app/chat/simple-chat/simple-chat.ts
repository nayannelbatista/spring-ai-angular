import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-simple-chat',
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    NgClass
  ],
  templateUrl: './simple-chat.html',
  styleUrl: './simple-chat.scss',
})
export class SimpleChat {

  userPrompt = '';

  messages = signal([
    { text: 'Hello, how can I help you today?', isBot: true }
  ]);

  sendMessage() {
    this.trimUserMessage();
    if (this.userPrompt != '') {
      this.updateMessages(this.userPrompt);
      this.userPrompt = '';
      this.simulateResponse();
    }
  }

  private updateMessages(text: string, isBot = false) {
      this.messages.update(messages => [...messages, {text: text, isBot: isBot}])
  }

  private trimUserMessage() {
    this.userPrompt = this.userPrompt.trim();
  }

  private simulateResponse() {
    setTimeout(() => {
      const response = 'This is a simulate response from Chat AI.';
      this.updateMessages(response, true);
    }, 2000)
  }
}
