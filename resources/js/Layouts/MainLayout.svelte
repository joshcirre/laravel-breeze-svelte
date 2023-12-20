<script>
    import { inertia } from "@inertiajs/svelte";
</script>

<main class="max-w-4xl m-auto h-screen p-14">
    <header>
        <a use:inertia href="/">Home</a>
    </header>
    <article>
        <slot />
    </article>
</main>
