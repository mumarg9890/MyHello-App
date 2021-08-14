import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ChangePasswordValidators {
  static isValidPassword(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((control.value as string) !== '123') {
          resolve({ invalidOldPassword: true });
        } else resolve(null);
      }, 1000);
    });
  }

  static isPasswordMatch(control: AbstractControl): ValidationErrors | null {
    let password = control.get('newPassword')?.value as string;
    let confirmPassword = control.get('confirmPassword')?.value as string;
    if (password !== confirmPassword) {
      return { passwordNotMatch: true };
    } else return null;
  }
}
