import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numOfWords = 30;
  wordsToType = {
    letters: '',
    result: '',
  };
  typedWords = '';
  winStatus = '';

  getWords() {
    const wordsList = 'abcde fghijkl mnopqrstuvwx yz1234567 890! @#$%^&* ()';
    this.wordsToType.result = '';
    this.typedWords = '';
    this.winStatus = '';
    this.wordsToType.letters = '';

    for (let i = 0; i < 75; i++) {
      this.wordsToType.letters +=
        wordsList[Math.floor(Math.random() * wordsList.length)];
    }
  }

  verifyResult(typedWords) {
    this.wordsToType.result = '';
    typedWords.split('').forEach((letter, idx) => {
      if (letter === this.wordsToType.letters[idx]) {
        this.wordsToType.result += 1;
      } else {
        this.wordsToType.result += 0;
      }
    });
    const isTypingFinished =
      this.wordsToType.result.length === this.wordsToType.letters.length;
    const isCorrect = this.wordsToType.result
      .split('')
      .every((value) => value == '1');

    if (isCorrect && isTypingFinished) {
      this.winStatus = 'YOU WIN';
    }
  }

  handleInputChange(value: string) {
    this.typedWords = value;
    this.verifyResult(value);
  }
}
