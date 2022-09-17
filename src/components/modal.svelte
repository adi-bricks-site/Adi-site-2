<script>
    import { blur } from "svelte/transition";
    import { modalActive } from "../stores/stores.js";

    export let product_name = msm;

    let modalState;
    modalActive.subscribe((value) => {
        modalState = value;
    });
</script>

<main>
    <div
        transition:blur="{{duration: 300}}"
        class="fixed top-0 left-0 bg-[#21212130] h-screen w-screen p-10 px-32 z-50"
    >
        <div
            class="bg-zinc-100 w-full h-full rounded-2xl border-8 border-blue-400"
        >
            <h1>{product_name}</h1>
        </div>
        <div
            class="fixed top-0 left-0 w-full h-full z-[-1]"
            on:click={() => {
                modalActive.set(false);
                console.log("Modal unfocused");
            }}
        />
    </div>
</main>
