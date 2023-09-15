import { derived } from 'svelte/store';
import { projectIdStore } from './projectsStore';
import type { NavItem } from '$types/nav';

const navLinks = derived(projectIdStore, (projectId) => [
    { 
        label: "Dashboard",
        link: `/project/${projectId}`,
        activeExact: true,
        disabled: !projectId,
        items: []
    },
    { 
        label: "Storage",
        link: `/project/${projectId}/storage`,
        disabled: !projectId,
        items: [
            { 
                label: "Databases",
                link: `/project/${projectId}/database`,
                disabled: !projectId,
            }
        ]
    },
    { 
        label: "Data Processing",
        link: null,
        items:  [
            { 
                label: "Job",
                link: `/project/${projectId}/dataprocessing/job`,
                disabled: !projectId,
            },
            { 
                label: "Notebook",
                link: `/project/${projectId}/dataprocessing/notebook`,
                disabled: !projectId,
            }
        ]
    },
    { 
        label: "AI",
        link: `/project/${projectId}/ai/dashboard`,
        disabled: !projectId,
        items: [
            { 
                label: "Training",
                link: `/project/${projectId}/ai/training`,
                disabled: !projectId,
            },
            { 
                label: "Notebook",
                link: `/project/${projectId}/ai/notebook`,
                disabled: !projectId,
            },
            { 
                label: "Deploy",
                link: `/project/${projectId}/ai/deploy`,
                disabled: !projectId,
            }
        ]
    },
    { 
        label: "Settings",
        link: `/project/settings`,
        disabled: false,
        items: []
    }
]
);

export default navLinks; 