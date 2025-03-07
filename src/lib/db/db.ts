import Dexie, { type EntityTable } from 'dexie';

export type ProjectType = 'sales' | 'website' | 'other';

export interface Project {
    id: number;
    name: string;
    type: ProjectType;
    created: Date;
    lastModified: Date;
}

const db = new Dexie('ReadyForProdDatabase') as Dexie & {
    projects: EntityTable<
        Project,
        'id' // primary key "id" (for the typings only)
    >;
};

// Schema declaration:
db.version(1).stores({
    projects: '++id, name, type, created, lastModified' // primary key "id" (for the runtime!)
});

export { db };
