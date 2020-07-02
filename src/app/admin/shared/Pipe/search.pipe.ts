import {Pipe, PipeTransform} from '@angular/core';
import {Post} from '../../../shared/interfaces';

@Pipe({
    name: 'searchPosts'
})
export class SearchPipe  implements PipeTransform {
    transform(posts: Post[], search = '', field: string[] = [ 'title', 'tag' ]): Post[] {
        if (!search.trim()) {
            return posts;
        }
        else {
                return posts.filter(post => {
                    return field.reduce((accumulator, currentValue) => {
                        return accumulator || post[currentValue]?.toLowerCase().includes(search.toLowerCase());
                    }, false);
                });
            }
    }
}

