<script>
    import {onMount} from "svelte";
    import {loadPostsEffect, posts} from "@/model/posts/posts.model";

    onMount(() => {
        loadPostsEffect();
    })

    // TAK ETO IMBA O.O
</script>


{#each $posts as post (post.id)}
    <h1>{post.title}</h1>
    <p>{post.body}</p>
{/each}