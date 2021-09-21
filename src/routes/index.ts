import * as routes from './routes';

type ReturnForIn<T, N> = {
  -readonly [key in keyof T]: N;
}

function forIn<T, N>(obj: T, func: (value: T[keyof T], key: string) => N): ReturnForIn<T, N> {
  const obj2 = {} as ReturnForIn<T, N>;
  for (const key in obj) {
    const value = obj[key];
    obj2[key] = func(value, key);
  }
  return obj2;
}

export default routes;

export const routePaths = forIn(routes, (value) => Object.values(value));
