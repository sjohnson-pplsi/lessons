import { ApiError } from "./api_error";
import { NotFoundError } from "./not_found_error";
import { ValidationError } from "./validation_error";

const baseParams = {
  withCredentials: true,
};

export function getParams(version?: number) {
  if (version === undefined) {
    return baseParams;
  }

  return {
    ...baseParams,
    headers: {},
  };
}

export function callService<T>(
  callback: () => Promise<Response>,
  retries = 5,
  delay = 1000
) {
  return retry(() => handleResponse<T>(callback()), retries, delay);
}

export async function handleResponse<T>(query: Promise<Response>): Promise<T> {
  const response = await query;

  if (response.status < 200 || response.status >= 300) {
    throw await parseError(response);
  }

  const result = await response.json();

  return result.data;
}

async function parseError(response: Response): Promise<Error> {
  const data = await response.json();
  switch (response.status) {
    case 400:
      if ("message" in data && data?.message === NotFoundError.message) {
        return new NotFoundError(data?.message);
      }
      if ("message" in data && data?.message === ValidationError.message) {
        return new ValidationError(data);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return new ApiError(data as unknown as any);
    default:
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return new ApiError(data as unknown as any);
  }
}

export async function retry<T>(
  callback: () => Promise<T>,
  retries = 5,
  delay = 1000
): Promise<T> {
  for (let i = 0; i <= retries; i++) {
    try {
      return await callback();
    } catch (err) {
      if (!isRetryable(err)) {
        throw err;
      }

      if (i === retries) {
        throw err;
      }

      await wait(delay);
    }
  }

  // This should never be called
  throw new ApiError("unable to complete");
}

export const wait = (time = 0) => new Promise<void>((r) => setTimeout(r, time));

export function isRetryable(error: unknown) {
  return error instanceof ApiError && error.isRetryable();
}
