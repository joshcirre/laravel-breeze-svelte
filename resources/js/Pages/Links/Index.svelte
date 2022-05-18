<script>
    export let links;
    import MainLayout from "@/Layouts/Authenticated.svelte";
    import { useForm, inertia } from "@inertiajs/inertia-svelte";

    let form = useForm({
        title: null,
        url: null,
    });

    function submit() {
        $form.post("/links");
        $form.reset();
        form.title.focus();
    }
</script>

<MainLayout>
    <h2 class="font-semibold text-xl text-gray-800 leading-tight" slot="header">
        Links
    </h2>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    {#each links as link}
                        <li>
                            <a href={link.url} target="_blank">{link.title}</a>
                            <button
                                class="inline-flex mt-4 items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-red-400 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                                use:inertia={{
                                    href: `/links/${link.id}`,
                                    method: "delete",
                                }}>Delete Link</button
                            >
                        </li>
                    {/each}

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
                                    type="text"
                                    name="title"
                                    id="title"
                                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                            <div class="mt-1 flex rounded-md shadow-sm">
                                <span
                                    class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
                                >
                                    http://
                                </span>
                                <input
                                    bind:value={$form.url}
                                    type="text"
                                    name="url"
                                    id="url"
                                    class="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                                    placeholder="www.example.com"
                                />
                            </div>
                            {#if $form.errors.url}
                                <div class="form-error">{$form.errors.url}</div>
                            {/if}
                        </div>
                        <button
                            disabled={$form.processing}
                            type="submit"
                            class="inline-flex mt-4 items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</MainLayout>
