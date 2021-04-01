export interface Post {
  id: string;
  message: string;
  views: number;
}

export interface RootStateInterface {
  baseUrl: string;
  message: string;
  posts: Array<Post>;
}