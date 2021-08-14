import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    if (!value) return null;
    let words = value.split(' ');
    for (let index = 0; index < words.length; index++) {
      let word = words[index];
      if (index > 0 && this.IsPreposition(word)) {
        words[index] = word.toLowerCase();
      } else {
        words[index] = this.ToUpperCase(word);
      }
    }
    return words.join(' ');
  }

  private IsPreposition(word: string): boolean {
    const prepositions = ['of', 'the', 'a', 'to'];
    return prepositions.includes(word.toLowerCase());
  }

  private ToUpperCase(word: string): string {
    return `${word.substr(0, 1).toUpperCase()}${word.substr(1).toLowerCase()}`;
  }
}
