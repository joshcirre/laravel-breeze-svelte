<script>
    import BreezeButton from "@/Components/Button.svelte";
    import BreezeGuestLayout from "@/Layouts/Guest.svelte";
    import { Link, useForm } from "@inertiajs/inertia-svelte";
    let verificationLinkSent;
    export let status;
    const form = useForm();
    const onSubmit = () => {
        $form.post(window.route("verification.send"));
    };
    $: {
        verificationLinkSent = status === "verification-link-sent";
    }
</script>

<svelte:head>
    <title>Email Verification</title>
</svelte:head>

<BreezeGuestLayout>
    <div class="mb-4 text-sm text-gray-600">
        Thanks for signing up! Before getting started, could you verify your
        email address by clicking on the link we just emailed to you? If you
        didn't receive the email, we will gladly send you another.
    </div>

    {#if verificationLinkSent}
        <div
            class="mb-4 font-medium text-sm text-green-600"
            v-if="verificationLinkSent"
        >
            A new verification link has been sent to the email address you
            provided during registration.
        </div>
    {/if}

    <form on:submit|preventDefault={onSubmit}>
        <div class="mt-4 flex items-center justify-between">
            <BreezeButton
                xclass:opacity-25={form.processing}
                disabled={form.processing}
            >
                Resend Verification Email
            </BreezeButton>

            <Link
                href={window.route("logout")}
                method="post"
                as="button"
                class="underline text-sm text-gray-600 hover:text-gray-900"
                >Log Out</Link
            >
        </div>
    </form>
</BreezeGuestLayout>
