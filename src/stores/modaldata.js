import { writable } from 'svelte/store';

export const modaldata = writable({
    product_name: "xyz",
    estimated_cost: 0,
    image_link : "",
    product_description: "",
    main_image: "",
});

