<script lang="ts">
    import type { ProjectType } from '$lib/db/db';
    import { getProjectStore } from '$lib/stores/project-store/index.svelte';

    let projectStore = getProjectStore();

    let name = $state('');
    let projectType = $state<ProjectType>('website');

    async function addNewProject() {
        projectStore.add({
            guid: crypto.randomUUID(),
            name: name,
            type: projectType,
            created: new Date(),
            lastModified: new Date()
        });

        name = '';
        projectType = 'website';
    }
</script>

<h1>Create new</h1>

<form onsubmit={addNewProject}>
    <input type="text" bind:value={name} placeholder="Project name" />
    <select bind:value={projectType}>
        <option value="website">Website</option>
        <option value="api">API</option>
        <option value="mobile">Mobile</option>
    </select>

    <button>Create</button>
</form>
