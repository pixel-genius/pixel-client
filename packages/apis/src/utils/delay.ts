export interface DelayProps<T> {
  timeOut?: number;
  data: T;
}

const DEFAULT_TIMEOUT = 1000;

export const randomTimeout = (time: number) => Math.floor(Math.random() * time);

const delay = <T>({
  timeOut = randomTimeout(DEFAULT_TIMEOUT),
  data,
}: DelayProps<T>): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), timeOut));

export default delay;
