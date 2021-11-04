import { CoreEntity } from 'states/common/interface/entities';

export interface Post extends CoreEntity {
  title: string;
  content: string;
  comments: Comment[];
}
