import { HttpErrorResponse } from '@angular/common/http';

export class CommonResponse<T> {
  Model: T | undefined;
  Error: HttpErrorResponse | undefined;
}
