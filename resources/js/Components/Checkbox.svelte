<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let checked = false;
    export let value = null;

    let proxyChecked = checked;

    function onChange() {
        dispatch("update:checked", proxyChecked);
    }
</script>

<input
    type="checkbox"
    {value}
    bind:checked={proxyChecked}
    on:change={onChange}
    class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
/>
