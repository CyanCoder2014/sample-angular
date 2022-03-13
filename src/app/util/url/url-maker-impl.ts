import {URLMaker} from './url-maker';
import {SERVER_API_URL} from '../../app.constants';

export class URLMakerImpl implements URLMaker {

  private url = SERVER_API_URL;

  constructor(private path: string) {
  }

  get(): string {
    return this.url + this.path;
  }

  append(path: string): string {
    return this.url + this.path + path;
  }

}
