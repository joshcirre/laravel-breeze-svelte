<script>
    import BreezeApplicationLogo from "@/Components/ApplicationLogo.svelte";
    import { inertia } from "@inertiajs/inertia-svelte";
</script>

<div
    class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"
>
    <div>
        <a href="/" use:inertia>
            <BreezeApplicationLogo
                class="w-20 h-20 fill-current text-gray-500"
            />
        </a>
    </div>

    <div
        class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"
    >
        <slot />
    </div>
</div>
