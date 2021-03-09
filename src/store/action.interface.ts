export interface ChangeMessageFn {
  (message: string): Promise<void>;
}

export interface FetchPostFn {
  (params: {
    page: number,
    perPage: number
  }): Promise<void>;
}