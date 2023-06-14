import type { SidebarNavItem } from "$types/nav";
import { writable } from "svelte/store"

const navStore = writable<SidebarNavItem[]>([]);
export default navStore; 