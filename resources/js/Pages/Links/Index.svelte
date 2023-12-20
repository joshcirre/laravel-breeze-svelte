<script>
    export let links;
    import MainLayout from "@/Layouts/Authenticated.svelte";

    import { useForm, inertia } from "@inertiajs/svelte";

    let form = useForm({
        title: null,
        url: null,
    });

    let focusForm;

    function focus() {
        focusForm.focus();
    }

    function submit() {
        focus();
        $form.post("/links");
        $form.reset();
    }
</script>

<svelte:head>
    <title>Links List</title>
</svelte:head>
<MainLayout>
    <h2 class="text-xl font-semibold leading-tight text-gray-800" slot="header">
        Links
    </h2>

    <div class="py-12">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    {#if !links.length}
                        No links added. Why don't you add one below?
                    {:else}
                        {#each links as link (link.id)}
                            <li>
                                <a href={link.url} target="_blank"
                                    >{link.title}</a
                                >
                                <button
                                    class="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium leading-4 text-white bg-red-400 border border-transparent rounded-md shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                                    use:inertia={{
                                        href: `/links/${link.id}`,
                                        method: "delete",
                                    }}>Delete Link</button
                                >
                            </li>
                        {/each}
                    {/if}
                    <form on:submit|preventDefault={submit}>
                        <div class="mt-8">
                            <label
                                for="title"
                                class="block text-sm font-medium text-gray-700"
                                >Title</label
                            >
                            <div class="mt-1">
                                <input
                                    bind:value={$form.title}
                                    bind:this={focusForm}
                                    type="text"
                                    name="title"
                                    id="title"
                                    class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Twitter"
                                />
                            </div>
                            {#if $form.errors.title}
                                <div class="form-error">
                                    {$form.errors.title}
                                </div>
                            {/if}
                        </div>
                        <div class="mt-4">
                            <label
                                for="url"
                                class="block text-sm font-medium text-gray-700"
                            >
                                URL
                            </label>
                            <div class="flex mt-1 rounded-md shadow-sm">
                                <span
                                    class="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm"
                                >
                                    http://
                                </span>
                                <input
                                    bind:value={$form.url}
                                    type="text"
                                    name="url"
                                    id="url"
                                    class="flex-1 block w-full min-w-0 px-3 py-2 border-gray-300 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="www.twitter.com"
                                />
                            </div>
                            {#if $form.errors.url}
                                <div class="form-error">
                                    {$form.errors.url}
                                </div>
                            {/if}
                        </div>
                        <button
                            disabled={$form.processing}
                            type="submit"
                            class="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium leading-4 text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</MainLayout>
