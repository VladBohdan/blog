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
                    if (field[0]){
                        return  post.title.toLowerCase().includes(search.toLowerCase());
                    }
                    else {
                        return field[1] = String(post.tag?.toLowerCase().includes(search.toLowerCase()));
                    }
            });
            }
    }
}

