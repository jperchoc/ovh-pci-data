<script lang="ts">
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import { Button } from "$lib/components/ui/button";
    import { MoreHorizontal } from "lucide-svelte";
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

  </script>
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild let:builder>
      <Button
        variant="ghost"
        builders={[builder]}
        size="icon"
        class="relative w-8 h-8 p-0"
      >
        <span class="sr-only">Open menu</span>
        <MoreHorizontal class="w-4 h-4" />
      </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Group>
        <DropdownMenu.Label>Actions</DropdownMenu.Label>
        <DropdownMenu.Item on:click={() => {dispatch('rename-clicked')}}>Rename service</DropdownMenu.Item>
      </DropdownMenu.Group>
    </DropdownMenu.Content>
  </DropdownMenu.Root>