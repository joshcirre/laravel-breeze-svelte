<script>
    import BreezeButton from "@/Components/Button.svelte";
    import BreezeGuestLayout from "@/Layouts/Guest.svelte";
    import BreezeInput from "@/Components/Input.svelte";
    import BreezeLabel from "@/Components/Label.svelte";
    import BreezeValidationErrors from "@/Components/ValidationErrors.svelte";
    import { useForm } from "@inertiajs/inertia-svelte";
    let err = {};
    export let errors = {};
    export let status;
    $: {
        err = errors;
    }
    const form = useForm({
        email: "",
    });
    const onSubmit = () => {
        $form.post(window.route("password.email"));
    };
</script>

<svelte:head>
    <title>Forgot Password</title>
</svelte:head>

<BreezeGuestLayout>
    <div class="mb-4 text-sm text-gray-600">
        Forgot your password? No problem. Just let us know your email address
        and we will email you a password reset link that will allow you to
        choose a new one.
    </div>

    {#if status}
        <div class="mb-4 font-medium text-sm text-green-600">
            {status}
        </div>
    {/if}

    <BreezeValidationErrors class="mb-4" errors={err} />

    <form on:submit|preventDefault={onSubmit}>
        <div>
            <BreezeLabel for="email" value="Email" />
            <BreezeInput
                id="email"
                type="email"
                class="mt-1 block w-full"
                value={form.email}
                required
                autofocus
                autocomplete="username"
                on:input={(evt) => ($form.email = evt.detail)}
            />
        </div>

        <div class="flex items-center justify-end mt-4">
            <BreezeButton
                sclass:opacity-25={form.processing}
                disabled={form.processing}
            >
                Email Password Reset Link
            </BreezeButton>
        </div>
    </form>
</BreezeGuestLayout>
