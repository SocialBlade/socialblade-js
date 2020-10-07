export interface MatrixRequest {
  path: string;
  data: any;
  headers: HeadersInit;
}

export interface Response<T> {
  credentials: Credentials;
  status: Status;
  data: T;
}

export interface Status {
  success: boolean;
  status: number;
  error?: string;
}

export interface Credentials {
  type: string;
  client_id: string;
  platform: string;
}
