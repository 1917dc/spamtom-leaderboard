<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>
<main>
    <div class="flex justify-center items-center min-h-screen">
        <div class="inline">
            <h1 class="text-6xl">Bem vinde, {data.user.name}!</h1>
            <div class="flex justify-center my-6">
                <a href="/convidados">Adicionar convidados</a>
            </div>
        </div>
    </div>
</main>