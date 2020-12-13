export interface IHaveId {
  id: string;
}

export type DbSet<T extends IHaveId> = Record<string, T>;
