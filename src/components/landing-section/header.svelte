<script>
    // import { each } from "svelte/internal";
    // import adiLogo from "../../assets/adi-logo.svg";
    import adiLogo from "../../assets/adibricks_logo.png";
    import Button from "../button.svelte";
    import Link from "./link.svelte";

    export let product
    export let contact
 
    
</script>

<main>
    <div class=" px-16 py-6 headergrid w-full border-b-2 demo" style="background: white !important;padding-top: 0px;
    padding-bottom: 0px;">
        <div class="left" style="text-align: -webkit-center;">
            <a href="/">
                <img class=" h-11 md:h-[46px]" src={adiLogo} alt="Adi Bricks Logo" style="width: 48%;height: auto;"/>
            </a>
        </div>
        <div class=" justify-center center md:flex hidden">
            <Link name="home" link="/"/>
            <!-- <Link name="products" link="#products" /> -->
            <a class="float-left px-6 text-[#969696] font-black font-poppins group" href={product}>
                <p class="capitalize whitespace-nowrap  duration-500 group-hover:underline underline-offset-8 decoration-[3px] decoration-purple-400 group-hover:text-zinc-700">products</p>
                <!-- <div class="dropdown invisible opacity-0 group-hover:opacity-100 group-hover:visible absolute border-2 border-purple-500 rounded-lg duration-200 mt-2 bg-white -translate-x-[50%] ">
                    <div class="flex flex-col divide-y-2 dropdown-links">

                        
                        
                            <a href=""><p>habijabi</p></a>
                        

                    </div>
                </div> -->
            </a>
            
            <!-- <Link name="contact us" link="#contact"/> -->
            <Link name="about us" link="/aboutus"/>
        </div>
        <div class="right hidden md:block">
            <Button name="contact us" link={contact}/>
        </div>
    </div>
</main>

<style>
    .headergrid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        grid-auto-columns: 1fr 1fr 1fr;
        grid-auto-rows: 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        align-items: center;
        grid-template-areas: "left center right";

        background: rgba(217, 217, 217, 0.19);
        backdrop-filter: blur(5px);
        border-color: rgba(211, 211, 211, 0.233);
    }

    @media only screen 
   and (max-width : 768px) {
    .headergrid{
        display: block;
        grid-template-areas: "left left left";
        height: 116px;
        height: 116px;

    }
}

    .left {
        grid-area: left;
    }

    .center {
        grid-area: center;
    }

    .right {
        grid-area: right;
        justify-self: end;
    }

    /* .dropdown-links > a{
        padding: 10px 20px 10px 20px;
        transition: 300ms;
    }

    .dropdown{
        box-shadow: 0px 6px 16px 1px rgba(0, 0, 0, 0.25);
        z-index: 2;
    }

    .dropdown-links > a:hover{
        color: rgb(63 63 70);
        background-color: rgb(233 213 255)
    } */
    a{
        border-radius: 0.3rem;
    }

    
</style>
