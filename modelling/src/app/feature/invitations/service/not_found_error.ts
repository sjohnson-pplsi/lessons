import { ApiError } from "./api_error";

export class NotFoundError extends ApiError {
  isRetryable() {
    return true;
  }

  get text(): string {
    return "not found";
  }

  static message = "not found";
}
