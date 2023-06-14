<script lang="ts">
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from '$components/ui/accordion';
	import { Alert, AlertDescription, AlertTitle } from '$components/ui/alert';
	import {
		AlertDialog,
		AlertDialogAction,
		AlertDialogCancel,
		AlertDialogContent,
		AlertDialogDescription,
		AlertDialogFooter,
		AlertDialogHeader,
		AlertDialogTitle,
		AlertDialogTrigger
	} from '$components/ui/alert-dialog';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$components/ui/card';
	import { Separator } from '$components/ui/separator';
	import {
		Blockquote,
		Code,
		H1,
		H2,
		H3,
		H4,
		Large,
		Lead,
		Muted,
		P,
		Small
	} from '$components/ui/typography';
	import { AlertCircle, BellRing, Check, Italic, Loader2, Mail, Terminal } from 'lucide-svelte';
	import { Button } from '$components/ui/button';
	import { AspectRatio } from '$components/ui/aspect-ratio';
	import { Avatar, AvatarFallback, AvatarImage } from '$components/ui/avatar';
	import { Badge, badgeVariants } from '$components/ui/badge';
	import { Switch } from '$components/ui/switch';
	import { Checkbox } from '$components/ui/checkbox';
	import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '$components/ui/collapsible';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$components/ui/dialog';
	import { HoverCard, HoverCardContent, HoverCardTrigger } from '$components/ui/hover-card';
	import { Input } from '$components/ui/input';
	import { Label } from '$components/ui/label';
	import { Progress } from '$components/ui/progress';
	import { RadioGroup, RadioGroupItem } from '$components/ui/radio-group';
	import {
		Sheet,
		SheetClose,
		SheetContent,
		SheetDescription,
		SheetFooter,
		SheetHeader,
		SheetTitle,
		SheetTrigger
	} from '$components/ui/sheet';
	import { Skeleton } from '$components/ui/skeleton';
	import { Slider } from '$components/ui/slider';
	import {
		Table,
		TableBody,
		TableCaption,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$components/ui/table';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$components/ui/tabs';
	import { Textarea } from '$components/ui/textarea';
	import { Toggle } from '$components/ui/toggle';
	import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '$components/ui/tooltip';

    //Handle interactive Sheet component
	const SHEET_POSITIONS = ['top', 'right', 'bottom', 'left'] as const;
	type SheetPosition = (typeof SHEET_POSITIONS)[number];
	let sheetPosition: SheetPosition = 'right';
	const SHEET_SIZES = ['sm', 'default', 'lg', 'xl', 'full', 'content'] as const;
	type SheetSize = (typeof SHEET_SIZES)[number];
	let sheetSize: SheetSize = 'default';
</script>

<div class="space-y-2">
	<H1 id="typography">Typography</H1>
	<Lead
		>A vertically stacked set of interactive headings that each reveal a section of content.</Lead
	>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4">
		<H1>This is a H1 text</H1>
		<H2>This is a H2 text</H2>
		<H3>This is a H3 text</H3>
		<H4>This is a H4 text</H4>
		<P
			>This is a P text. It can be usefull for long paragraphs, such as Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Placeat at aut sit non ducimus dolorum facere nulla dolores
			similique earum, fugiat iusto dolore architecto temporibus suscipit deleniti dicta obcaecati
			tempora nemo.</P
		>
		<Blockquote>A good Blockquote can be a lorem ipsum</Blockquote>
		<Code>this is a code block</Code>
		<Lead>A Lead is used for leading texts</Lead>
		<Large>A Large has a bigger font size thant a paragraph</Large>
		<Small>A Small has a smaller font size thant a paragraph</Small>
		<Muted>A Muted is a small text with a lighter color</Muted>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="accordion">Accordion</H1>
	<Lead
		>A vertically stacked set of interactive headings that each reveal a section of content.</Lead
	>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10  space-y-2">
		<Accordion type="single" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger>Is it accessible?</AccordionTrigger>
				<AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
			</AccordionItem>
		</Accordion>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="alert">Alert</H1>
	<Lead>Displays a callout for user attention.</Lead>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4">
		<Alert>
			<Terminal class="h-4 w-4" />
			<AlertTitle>Heads up!</AlertTitle>
			<AlertDescription>You can add components to your app using the cli.</AlertDescription>
		</Alert>
		<Alert variant="destructive">
			<AlertCircle class="h-4 w-4" />
			<AlertTitle>Error</AlertTitle>
			<AlertDescription>Your session has expired. Please login again.</AlertDescription>
		</Alert>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="alert-dialog">Alert Dialog</H1>
	<Lead>A modal dialog that interrupts the user with important content and expects a response.</Lead
	>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4">
		<AlertDialog>
			<AlertDialogTrigger>
				<Button variant="outline">Open Dialog</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete your account and remove your
						data from our servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction>Continue</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="aspect-ratio">Aspect Ratio</H1>
	<Lead>Displays content within a desired ratio.</Lead>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4">
		<div class="max-w-[450px]">
			<AspectRatio ratio={16 / 9} class="bg-muted">
				<img
					src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
					alt="Gray by Drew Beamer"
					class="rounded-md object-cover h-full w-full"
				/>
			</AspectRatio>
		</div>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="avatar">Avatar</H1>
	<Lead>An image element with a fallback for representing the user.</Lead>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4">
		<Avatar>
			<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
		<Avatar>
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="badge">Badge</H1>
	<Lead>Displays a badge or a component that looks like a badge.</Lead>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-x-2">
		<Badge>Primary</Badge>
		<Badge variant="secondary">Secondary</Badge>
		<Badge variant="outline">Outline</Badge>
		<Badge variant="destructive">Destructive</Badge>
		<a href="/components" class={badgeVariants({ variant: 'outline' })}>Link Badge</a>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="button">Button</H1>
	<Lead>Displays a button or a component that looks like a button.</Lead>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-x-2">
		<Button>Primary</Button>
		<Button variant="secondary">Secondary</Button>
		<Button variant="destructive">Destructive</Button>
		<Button variant="outline">Outline</Button>
		<Button variant="ghost">Ghost</Button>
		<Button variant="link">Link</Button>
		<Button>
			<Mail class="mr-2 h-4 w-4" />
			Login with Email
		</Button>
		<Button disabled>
			<Loader2 class="mr-2 h-4 w-4 animate-spin" />
			Please wait
		</Button>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="card">Card</H1>
	<Lead>Displays a card with header, content, and footer.</Lead>
</div>
<Separator class="my-4" />
<div class="p-10 space-y-4">
		<Card class="max-w-[380px]">
			<CardHeader>
				<CardTitle tag="h3">Card Title</CardTitle>
				<CardDescription>Card Description</CardDescription>
			</CardHeader>
			<CardContent class="grid gap-4">
				<div class=" flex items-center space-x-4 rounded-md border p-4">
					<BellRing />
					<div class="flex-1 space-y-1">
						<p class="text-sm font-medium leading-none">Push Notifications</p>
						<p class="text-sm text-muted-foreground">Send notifications to device.</p>
					</div>
					<Switch />
				</div>
				<div>
					<div class="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
						<span class="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
						<div class="space-y-1">
							<p class="text-sm font-medium leading-none">Your call has been confirmed.</p>
							<p class="text-sm text-muted-foreground">1 hour ago</p>
						</div>
					</div>
					<div class="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
						<span class="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
						<div class="space-y-1">
							<p class="text-sm font-medium leading-none">You have a new message!</p>
							<p class="text-sm text-muted-foreground">1 hour ago</p>
						</div>
					</div>
					<div class="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
						<span class="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
						<div class="space-y-1">
							<p class="text-sm font-medium leading-none">Your subscription is expiring soon!</p>
							<p class="text-sm text-muted-foreground">2 hours ago</p>
						</div>
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Button class="w-full">
					<Check class="mr-2 h-4 w-4" /> Mark all as read
				</Button>
			</CardFooter>
		</Card>
</div>

<div class="space-y-2 mt-6">
	<H1 id="checkbox">Checkbox</H1>
	<Lead>A control that allows the user to toggle between checked and not checked.</Lead>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4 ">
		<div class="flex items-center space-x-2">
			<Checkbox id="terms" />
			<label
				for="terms"
				class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				Accept terms and conditions
			</label>
		</div>
		<div class="items-top flex space-x-2">
			<Checkbox id="terms1" />
			<div class="grid gap-1.5 leading-none">
				<label
					for="terms1"
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Accept terms and conditions
				</label>
				<p class="text-sm text-muted-foreground">
					You agree to our Terms of Service and Privacy Policy.
				</p>
			</div>
		</div>
		<div class="flex items-center space-x-2">
			<Checkbox id="terms" disabled />
			<label
				for="terms2"
				class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				Accept terms and conditions
			</label>
		</div>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="collapsible">Collapsible</H1>
	<Lead>An interactive component which expands/collapses a panel.</Lead>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4">
		<Collapsible>
			<CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
			<CollapsibleContent>
				Yes. Free to use for personal and commercial projects. No attribution required.
			</CollapsibleContent>
		</Collapsible>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="dialog">Dialog</H1>
	<Lead
		>A window overlaid on either the primary window or another dialog window, rendering the content
		underneath inert.</Lead
	>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4">
		<Dialog>
			<DialogTrigger>Open</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you sure absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your account and remove your
						data from our servers.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="hover-card">Hover Card</H1>
	<Lead>For sighted users to preview content available behind a link.</Lead>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4">
		<HoverCard>
			<HoverCardTrigger>Hover</HoverCardTrigger>
			<HoverCardContent>SvelteKit - Web development, streamlined</HoverCardContent>
		</HoverCard>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="input">Input</H1>
	<Lead>Displays a form input field or a component that looks like an input field.</Lead>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4">
		<Input type="email" placeholder="email" />
		<Input disabled type="email" placeholder="email" />
		<div class="grid w-full max-w-sm items-center gap-1.5">
			<Label for="email">Email</Label>
			<Input type="email" id="email" placeholder="email" />
		</div>
		<div class="grid w-full max-w-sm items-center gap-1.5">
			<Label for="email-2">Email</Label>
			<Input type="email" id="email-2" placeholder="Email" />
			<p class="text-sm text-muted-foreground">Enter your email address.</p>
		</div>
		<form class="flex w-full max-w-sm items-center space-x-2">
			<Input type="email" placeholder="email" />
			<Button type="submit">Subscribe</Button>
		</form>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="label">Label</H1>
	<Lead>Renders an accessible label associated with controls.</Lead>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4">
		<Label for="email">Your email address</Label>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="progress">Progress</H1>
	<Lead
		>Displays an indicator showing the completion progress of a task, typically displayed as a
		progress bar.</Lead
	>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4">
		<Progress value={33} />
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="radio-group">Radio Group</H1>
	<Lead
		>A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be
		checked at a time.</Lead
	>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4">
		<RadioGroup value="option-one">
			<div class="flex items-center space-x-2">
				<RadioGroupItem value="option-one" id="option-one" />
				<Label for="option-one">Option One</Label>
			</div>
			<div class="flex items-center space-x-2">
				<RadioGroupItem value="option-two" id="option-two" />
				<Label for="option-two">Option Two</Label>
			</div>
		</RadioGroup>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="separator">Separator</H1>
	<Lead>Visually or semantically separates content.</Lead>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4">
		<div>
			<div class="space-y-1">
				<h4 class="text-sm font-medium leading-none">Radix Primitives</h4>
				<p class="text-sm text-muted-foreground">An open-source UI component library.</p>
			</div>
			<Separator class="my-4" />
			<div class="flex h-5 items-center space-x-4 text-sm">
				<div>Blog</div>
				<Separator orientation="vertical" />
				<div>Docs</div>
				<Separator orientation="vertical" />
				<div>Source</div>
			</div>
		</div>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="sheet">Sheet</H1>
	<Lead
		>Extends the Dialog component to display content that complements the main content of the
		screen.</Lead
	>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4 flex justify-center items-center">
		<div class="flex flex-col space-y-8">
			<RadioGroup bind:value={sheetPosition}>
				<div class="grid grid-cols-2 gap-2">
					{#each SHEET_POSITIONS as position, index (index)}
						<div class="flex items-center space-x-2">
							<RadioGroupItem value={position} id={position} />
							<Label for={position}>{position}</Label>
						</div>
					{/each}
				</div>
			</RadioGroup>
			<RadioGroup bind:value={sheetSize}>
				<div class="grid grid-cols-2 gap-2">
					{#each SHEET_SIZES as size, index (index)}
						<div class="flex items-center space-x-2">
							<RadioGroupItem value={size} id={size} />
							<Label for={size}>{size}</Label>
						</div>
					{/each}
				</div>
			</RadioGroup>
			<Sheet>
				<SheetTrigger>
					<Button>Open {sheetSize} {sheetPosition} sheet</Button>
				</SheetTrigger>
				<SheetContent position={sheetPosition} size={sheetSize}>
					<SheetHeader>
						<SheetTitle>Edit profile</SheetTitle>
						<SheetDescription>
							Make changes to your profile here. Click save when you're done.
						</SheetDescription>
					</SheetHeader>
					<div class="grid gap-4 py-4">
						<div class="grid grid-cols-4 items-center gap-4">
							<Label for="name" class="text-right">Name</Label>
							<Input id="name" value="Pedro Duarte" class="col-span-3" />
						</div>
						<div class="grid grid-cols-4 items-center gap-4">
							<Label for="username" class="text-right">Username</Label>
							<Input id="username" value="@peduarte" class="col-span-3" />
						</div>
					</div>
					<SheetFooter>
						<SheetClose>
							<Button type="submit">Save changes</Button>
						</SheetClose>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</div>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="skeleton">Skeleton</H1>
	<Lead>Use to show a placeholder while content is loading.</Lead>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4">
		<div class="flex items-center space-x-4">
			<Skeleton class="h-12 w-12 rounded-full" />
			<div class="space-y-2">
				<Skeleton class="h-4 max-w-[250px]" />
				<Skeleton class="h-4 max-w-[200px]" />
			</div>
		</div>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="slider">Slider</H1>
	<Lead>An input where the user selects a value from within a given range.</Lead>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4">
		<Slider value={33} max={100} step={1} />
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="switch">Switch</H1>
	<Lead>A control that allows the user to toggle between checked and not checked.</Lead>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4">
		<div class="flex items-center space-x-2">
			<Switch id="airplane-mode" />
			<Label for="airplane-mode">Airplane Mode</Label>
		</div>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="table">Table</H1>
	<Lead>A responsive table component.</Lead>
</div>
<Separator class="my-4" />
<Card>
	<Table>
		<TableCaption>A list of your recent invoices.</TableCaption>
		<TableHeader>
			<TableRow>
				<TableHead class="max-w-[100px]">Invoice</TableHead>
				<TableHead>Status</TableHead>
				<TableHead>Method</TableHead>
				<TableHead class="text-right">Amount</TableHead>
			</TableRow>
		</TableHeader>
		<TableBody>
			<TableRow key="INV001">
				<TableCell class="font-medium">INV001</TableCell>
				<TableCell>Paid</TableCell>
				<TableCell>Credit Card</TableCell>
				<TableCell class="text-right">$250.00</TableCell>
			</TableRow>
			<TableRow key="INV002">
				<TableCell class="font-medium">INV002</TableCell>
				<TableCell>Pending</TableCell>
				<TableCell>PayPal</TableCell>
				<TableCell class="text-right">$150.00.00</TableCell>
			</TableRow>
			<TableRow key="INV003">
				<TableCell class="font-medium">INV003</TableCell>
				<TableCell>Unpaid</TableCell>
				<TableCell>Bank Transfer</TableCell>
				<TableCell class="text-right">$350.00</TableCell>
			</TableRow>
		</TableBody>
	</Table>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="tabs">Tabs</H1>
	<Lead
		>A set of layered sections of content—known as tab panels—that are displayed one at a time.</Lead
	>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4">
		<Tabs value="account" class="max-w-[400px]">
			<TabsList>
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="password">Password</TabsTrigger>
			</TabsList>
			<TabsContent value="account">Make changes to your account here.</TabsContent>
			<TabsContent value="password">Change your password here.</TabsContent>
		</Tabs>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="textarea">Textarea</H1>
	<Lead>Displays a form textarea or a component that looks like a textarea.</Lead>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4">
		<div class="grid w-full gap-1.5">
			<Label for="message-2">Your Message</Label>
			<Textarea placeholder="Type your message here." id="message-2" />
			<p class="text-sm text-muted-foreground">Your message will be copied to the support team.</p>
		</div>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="toggle">Toggle</H1>
	<Lead>A two-state button that can be either on or off.</Lead>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4">
		<Toggle variant="outline" aria-label="Toggle italic">
			<Italic class="h-4 w-4" />
		</Toggle>
	</CardContent>
</Card>

<div class="space-y-2 mt-6">
	<H1 id="tooltip">Tooltip</H1>
	<Lead
		>A popup that displays information related to an element when the element receives keyboard
		focus or the mouse hovers over it.</Lead
	>
</div>
<Separator class="my-4" />
<Card>
	<CardContent class="p-10 space-y-4">
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>Hover</TooltipTrigger>
				<TooltipContent>
					<p>Add to library</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	</CardContent>
</Card>
