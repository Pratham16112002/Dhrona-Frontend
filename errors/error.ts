export class ApiError extends Error {
  status: number;
  code?: string;
  details?: unknown;
  url?: string;

  constructor({
    message,
    status,
    code,
    details,
    url,
  }: {
    message: string;
    status: number;
    code?: string;
    details?: unknown;
    url?: string;
  }) {
    super(message);
    this.status = status;
    this.code = code;
    this.details = details;
    this.url = url;
  }
}
