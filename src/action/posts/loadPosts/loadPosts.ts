import type { DomainPost } from '@/model/posts/posts.model';


export const loadPosts = function (): Promise<DomainPost[]> {
    return fetch(`https://jsonplaceholder.typicode.com/posts`, { method: 'GET' })
        .then((response) => response.ok ? response.json() : []);
};