import {Pipe, PipeTransform} from '@angular/core';
import {Post} from '../../../shared/interfaces';

@Pipe({
    name: 'searchPosts'
})
export class SearchPipe  implements PipeTransform {
    transform(posts: Post[], search = '', field: string = 'title'): Post[] {
        if (!search.trim()) {
            return posts;
        }
        else {
                return posts.filter(post => {
                return post[field]?.toLowerCase().includes(search.toLowerCase());
            });
            }
    }
}

