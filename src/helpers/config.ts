export type ConfigResult<T> = {
  config: T;
  filepath: string;
  isEmpty?: boolean;
};
