<script>
    import { page } from "$app/state"

</script>

<main>
    <h1 class="text-8xl">{page.status}</h1>
    <h1 class="text-8xl">{page.error?.message}</h1>
</main>