<script>
    import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout.svelte";
    import InputError from "../../Components/InputError.svelte";
    import PrimaryButton from "../../Components/PrimaryButton.svelte";
    import Chirp from "../../Components/Chirp.svelte";
    import { useForm } from "@inertiajs/svelte";
    const form = useForm({
        message: "",
    });

    function handleSubmit() {
        $form.post("/chirps", {
            onSuccess: () => $form.reset(),
        });
    }

    export let chirps;
</script>

<svelte:head>
    <title>Chirps</title>
</svelte:head>
<AuthenticatedLayout>
    <svelte:fragment slot="header">
        <h2
            class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"
        >
            Chirps
        </h2>
    </svelte:fragment>
    <div class="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
        <form on:submit|preventDefault={handleSubmit}>
            <textarea
                bind:value={$form.message}
                placeholder="What's on your mind?"
                class="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
            ></textarea>
            <PrimaryButton class="mt-8">Chirp</PrimaryButton>
            {#if $form.errors.message}
                <InputError message={$form.errors.message} class="mt-2" />
            {/if}
        </form>
        <div class="mt-6 bg-white shadow-sm rounded-lg divide-y">
            {#each chirps as chirp (chirp.id)}
                <Chirp {chirp} />
            {/each}
        </div>
    </div>
</AuthenticatedLayout>
