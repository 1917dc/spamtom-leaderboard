<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
</script>

<svelte:head>
    <title>Login - Admin</title>
</svelte:head>

<main>
    <form>
        <input placeholder="Username">
        <input placeholder="Password">
        <button type="submit">Login</button>
    </form>
</main>