export interface IBaseService<T> {
  read?: () => Promise<any>;
  create?: (d: T) => Promise<any>;
  put?: (d: T) => Promise<any>;
  patch?: (d: T) => Promise<any>;
  delete?: (id: number) => Promise<any>;
}
