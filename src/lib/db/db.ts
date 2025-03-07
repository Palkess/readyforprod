import Dexie, { type EntityTable } from 'dexie';

export type ProjectType = 'sales' | 'website' | 'other';

export interface Project {
    guid: string;
    name: string;
    type: ProjectType;
    created: Date;
    lastModified: Date;
}

const db = new Dexie('ReadyForProdDatabase') as Dexie & {
    projects: EntityTable<
        Project,
        'guid' // primary key "id" (for the typings only)
    >;
};

// Schema declaration:
db.version(1).stores({
    projects: 'guid, name, type, created, lastModified' // primary key "id" (for the runtime!)
});

export { db };
