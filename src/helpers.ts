export const doWithDelay = <T>(cb: () => T, delay = 300): Promise<T> =>
  new Promise<T>((resolve) => setTimeout(() => resolve(cb()), delay));
