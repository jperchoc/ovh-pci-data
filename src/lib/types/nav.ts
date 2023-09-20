export type NavItem = {
	label: string;
	link: string | null;
	disabled?: boolean;
	activeExact?: boolean;
	items?: NavItem[];
};