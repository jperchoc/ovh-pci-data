<script lang="ts">
	import { browser } from "$app/environment";
	import { onMount } from "svelte";
    import tinycolor from "tinycolor2";
    import ColorPicker, { type HsvaColor, type RgbaColor } from 'svelte-awesome-color-picker';

    let root:HTMLElement | null;

    export let variable:string;

    onMount(() => {
        if (!browser) return;
        root = document.querySelector(':root')
        if (!root) return;
        const rs = getComputedStyle(root);
        if (!rs) return;
        const varValue = rs.getPropertyValue(variable);
        const colorValue = tinycolor(`hsl(${varValue})`);
        hex = `#${colorValue.toHex()}`;
    })


    const hexToHslString = (hex: string) => {
        const color = tinycolor(hex.replace('#',''));
        const {h, s, l} = color.toHsl();
        return `${h.toFixed(2)} ${(s*100).toFixed(2)}% ${(l*100).toFixed(2)}%`;
    }


    const setVariable = (e:  CustomEvent<{ hsv: HsvaColor; rgb: RgbaColor; hex: string; }>) => {
        if (!root || !hex) return;
        root.style.setProperty(variable, hexToHslString(hex));
    }

    let hex: string | undefined;
</script>

<ColorPicker bind:hex on:input={(e) => setVariable(e)} label={`${variable}: ${hex ? hexToHslString(hex) : ''}`}/>
    