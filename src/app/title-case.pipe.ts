import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlepipe'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    // tslint:disable-next-line:curly
    if (!value) return null;

    const words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      // tslint:disable-next-line:curly
      if (i > 0 && this.isPrepositions(word))
        words[i] = words[i].toLowerCase();
      else {
        words[i] = this.toTiltleCase(word);
      }
    }

    return words.join(' ');
  }

  private toTiltleCase(word): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

  private isPrepositions(word: string): boolean {
    const prepositions = [
      'of',
      'the'
    ];

    return prepositions.includes(word.toLowerCase());
  }
}
