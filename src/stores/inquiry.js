import { writable } from 'svelte/store';

export const inquiry = writable({
    product_name: "",
    estimated_cost: 0,
});

