import type { ovhapi } from "$types/ovh";
import { writable } from "svelte/store"

const projectsStore = writable<ovhapi.cloud.Project[]>([]);
const projectIdStore = writable<String>();
export {
    projectsStore,
    projectIdStore
}; 