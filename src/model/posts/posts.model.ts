import { createEffect, createStore } from 'effector';
import { loadPosts } from '@/action/posts/loadPosts/loadPosts';


export type DomainPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const loadPostsEffect = createEffect<void, DomainPost[], Error>(loadPosts);

export const posts = createStore<DomainPost[]>([])
    .on(loadPostsEffect.done, (state, payload) => payload.result);