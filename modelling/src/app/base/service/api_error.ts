export class ApiError extends Error {
  isRetryable() {
    return false;
  }

  toString(): string {
    return this.message;
  }

  get text(): string {
    return "api error";
  }
}
