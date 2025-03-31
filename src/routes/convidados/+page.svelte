<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
</script>

<svelte:head>
    <title>Convidados</title>
</svelte:head>
<main>
    <div>
        <form action="?/post" method="POST">
            <input placeholder="Nome" id="username" name="username" type="text" required>
            <button type="submit">Adicionar</button>
        </form>
    </div>
</main>