<script>
    /** @type {{ form: any, data: any }} */
    let { data, form } = $props();
</script>

<svelte:head>
    <title>Login - Admin</title>
</svelte:head>

<main>
    <form method="POST" action="?/post">
        <input placeholder="Username" id="username" name="username" type="text" required>
        <input placeholder="Password" id="password" name="password" type="text" required>
        <button type="submit">Login</button>

        {#if form?.invalid}
            <p class="text-red-700">Preencha o formulário corretamente</p>
        {/if}
        
        {#if form?.credentials}
            <p class="text-red-700">Você inseriu as informações erradas.</p>
        {/if}
    </form>
</main>