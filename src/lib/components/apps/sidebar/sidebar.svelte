<script context="module" lang="ts">
    export interface SidebarItem {
        name: string;
        icon: string;
        href: string;
    }
</script>

<script lang="ts">
    import { getProjectStore } from '$lib/stores/project-store/index.svelte';

    let primaryItems: SidebarItem[] = [
        {
            name: 'Create new project',
            icon: '➕',
            href: '/project/new'
        }
    ];

    let minimizedOnDesktop = false;
    let openOnMobile = false;

    let projectStore = getProjectStore();

    /** TODO:
     * Add minimize function on desktop
     * Add open/close function on mobile
     */
</script>

<!-- Desktop menu -->

<div
    class="hidden md:flex flex-col fixed top-0 left-0 w-72 h-full bg-white border-r border-gray-200 p-8">
    <div class="flex items-center justify-between mb-8">
        <a href="/" class="text-2xl font-bold text-blue-500">ReadyForProd</a>
    </div>

    <nav class="flex flex-col space-y-4 mb-8">
        {#each primaryItems as item}
            <a
                href={item.href}
                class="flex items-center space-x-4 text-gray-600 hover:text-blue-500">
                <span class="text-2xl">{item.icon}</span>
                <span>{item.name}</span>
            </a>
        {/each}
    </nav>

    {#if projectStore.state.length > 0}
        <nav class="flex flex-col space-y-4">
            <h2 class="text-lg font-bold text-gray-600 mb-4">Projects</h2>
            {#each projectStore.state as project}
                <a
                    href={`/project/${project.guid}`}
                    class="flex items-center space-x-4 text-gray-600 hover:text-blue-500">
                    <span class="text-2xl">📂</span>
                    <span>{project.name}</span>
                </a>
            {/each}
        </nav>
    {/if}
</div>
