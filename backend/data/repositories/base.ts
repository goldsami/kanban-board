export interface BaseRepository<T> {
  get(id: string): Promise<T>;
  getList(): Promise<T[]>;
  delete(id: string): Promise<T>;
  update(id: string, data: Partial<T>): Promise<T>;
  create(data: Partial<T>): Promise<T>;
}
