<script setup>
    import { onDestroy, onMount } from "svelte";

    let className;
    let open = false;

    export { className as class };
    export let contentClasses = "py-1 bg-white";

    function closeOnEscape(e) {
        if (open.value && e.key === "Escape") {
            open.value = false;
        }
    }

    onMount(() => document.addEventListener("keydown", closeOnEscape));
    onDestroy(() => document.removeEventListener("keydown", closeOnEscape));
</script>

<div class="relative">
    <div on:click={(evt) => (open = !open)}>
        <slot name="trigger" />
    </div>

    <!-- Full Screen Dropdown Overlay -->
    {#if open}
        <div class="fixed inset-0 z-40" on:click={(evt) => (open = false)} />
        <div
            class="absolute z-50 mt-2 rounded-md shadow-lg {className}"
            on:click={(evt) => (open = false)}
        >
            <div
                class="rounded-md ring-1 ring-black ring-opacity-5 {contentClasses}"
            >
                <slot name="content" />
            </div>
        </div>
    {/if}
</div>
