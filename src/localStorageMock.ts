export const mockLocalStorage = (
  state: Record<string, string | undefined>
): Storage => {
  return {
    clear: () => {
      for (let i = 0; i < Object.keys(state).length; i++) {
        const k = Object.keys(state)[i];
        delete state[k];
      }
    },
    getItem: (key: string): string | null => {
      const item = state[key];
      return item === undefined ? null : item;
    },
    key: (index: number): string | null => {
      const x: string | undefined = Object.keys(state)[index];
      return x === undefined ? null : x;
    },
    get length(): number {
      return Object.keys(state).length;
    },
    removeItem: (key: string): void => {
      delete state[key];
    },
    setItem: (key: string, value: string): void => {
      state[key] = value;
    },
  };
};
