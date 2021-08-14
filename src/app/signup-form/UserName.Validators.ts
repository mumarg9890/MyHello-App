import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static CannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }

  static ShouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((control.value as string) === 'umar') {
          resolve({ alreadyOccupied: true });
        } else resolve(null);
      }, 2000);
    });
  }
}
