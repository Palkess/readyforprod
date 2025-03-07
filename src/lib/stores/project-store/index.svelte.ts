import type { Project } from '$lib/db/db';
import { getContext, setContext } from 'svelte';

export class ProjectStore {
    state = $state<Project[]>([]);

    constructor() {
        // TODO: Initialize the store with the projects from the database, if there are any
    }

    add(project: Project) {
        // TODO: Save the project to the database
        this.state = [...this.state, project];
    }

    remove(guid: string) {
        // TODO: Remove the project from the database
        this.state = this.state.filter((project) => project.guid !== guid);
    }
}

const PROJECT_STORE = Symbol('project-store');

export function setProjectStore() {
    return setContext(PROJECT_STORE, new ProjectStore());
}

export function getProjectStore() {
    return getContext<ReturnType<typeof setProjectStore>>(PROJECT_STORE);
}
