<script>
    export let name;
    export let link;
</script>

<main>
    <a href={link}>
        <div class="hover:bg-black hover:text-white font-bold border-4 border-black rounded-lg px-11 py-[0.25rem] text-black hover:scale-110 duration-300 ease-in-out">
            <p class="uppercase font-poppins font-medium tracking-wider">{name}</p>
        </div>
    </a>
</main>
