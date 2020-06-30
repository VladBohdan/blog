import {Pipe, PipeTransform} from '@angular/core';
import {Post} from '../../shared/interfaces';

@Pipe({
    name: 'searchTag'
})
export class SearchTagPipe  implements PipeTransform {
    transform(posts: Post[], search = ''): Post[] {
        if (!search.trim()) {
            return posts;
        }
        return posts.filter(post => {
            return post.tag.toLowerCase().includes(search.toLowerCase());
        });
    }
}
