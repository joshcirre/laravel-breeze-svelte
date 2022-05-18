<script>
    import { createEventDispatcher, onMount } from "svelte";

    const dispatch = createEventDispatcher();

    let className;
    let inputElement;

    export let value = "";
    export { className as class };

    function onInput() {
        dispatch("input", value);
    }

    onMount(() => {
        if (inputElement.hasAttribute("autofocus")) {
            inputElement.focus();
        }
    });
</script>

<input
    class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm {className}"
    bind:value
    on:input={onInput}
    bind:this={inputElement}
    {...$$restProps}
/>
