import { ApiError } from "./api_error";

export class ValidationError extends ApiError {
  errors: string[];

  constructor(public data: ValidationErrorData) {
    super(data.message);
    this.errors = data.errors ?? [];
  }

  get text(): string {
    return "validation error";
  }

  static message = "One or more validation errors occurred.";
}

export type ValidationErrorData = {
  message: string;
  errors: string[];
};
