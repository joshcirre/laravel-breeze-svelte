<script>
    import { inertia } from "@inertiajs/inertia-svelte";
</script>

<main class="max-w-4xl m-auto h-screen p-14">
    <header>
        <a use:inertia href="/">Home</a>
        <a use:inertia href="/about">About</a>
        <a use:inertia href="/links">Links</a>
    </header>
    <article>
        <slot />
    </article>
</main>
