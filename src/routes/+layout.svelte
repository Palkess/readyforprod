<script lang="ts">
    import Sidebar, { type SidebarItem } from '$lib/components/apps/sidebar/sidebar.svelte';
    import '../app.css';
    let { children } = $props();

    let primaryMenuItems: SidebarItem[] = [
        {
            name: 'Create new project',
            icon: '➕',
            href: '/project/new'
        }
    ];
</script>

<Sidebar primaryItems={primaryMenuItems} />

<main class="ml-72 p-8">
    {@render children()}
</main>
