export interface URLMaker {
  get(): string;

  append(path: string): string;

}
