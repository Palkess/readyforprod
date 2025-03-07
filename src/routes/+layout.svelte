<script lang="ts">
    import Sidebar, { type SidebarItem } from '$lib/components/apps/sidebar/sidebar.svelte';
    import { setProjectStore } from '$lib/stores/project-store/index.svelte';
    import '../app.css';
    let { children } = $props();

    setProjectStore();
</script>

<Sidebar />

<main class="ml-72 p-8">
    {@render children()}
</main>
