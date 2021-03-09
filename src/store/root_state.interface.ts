import { Object } from 'parse';

export interface RootStateInterface {
  baseUrl: string;
  message: string;
  posts: Array<Object>;
}