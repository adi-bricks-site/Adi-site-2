<script>
    import ButtonLanding from "../components/button-landing.svelte";
    const title_slogan = "Lightweight, Sustainable & Strong Bricks";

    import CarouselComponentLanding from "../sections/carousel-landing.svelte";
</script>

<div
    class="gcontainer h-full relative px-6 md:px-24"
>


    <div class="left pt-9 md:pt-[9vh]">
        <h1
            class="leading-[3rem] md:text-[2.7vw] md:leading-[4vw] max-w-[85%] font-poppins font-bold"
        >
            {title_slogan}
        </h1>

        <h2 class="text-xl md:text-[1.2vw] pt-5  max-w-[85%]">
            <strong
                >Brick is a core material that is commonly used to build the
                wall of a building.</strong
            >The clay ash bricks manufactured by manual or extrusion process,
            mixing of ash (60%) with clay or moderate plasticity. The green 
            bricks are dry under the atmospheric condition at an equilibrium moisture 
            level of 3%. Dried brick is fired in kilns at a temperature of 1000C +- 
            30C with a soaking period of approximately 5 to 7 hours.
        </h2>
        <div class="pt-5">
            <ButtonLanding name="OUR PRODUCTS" link="#products" />
        </div>
    </div>
    <div class=" right hidden md:grid md:place-items-center p-2 md:py-20">
        <div class="h-60 md:h-full w-[90vw]   md:w-[80%] md:min-w-[700px] rounded-">
            <!-- carousel -->
            <CarouselComponentLanding />
        </div>
    </div>
</div>

<style scoped>
    /* @media only screen and  (max-device-width: 1080px) {
        .gcontainer{
            
        }
    } */






    .gcontainer {
        display: grid;
        grid-template-rows: auto 1fr;
        gap: 0px 20px;
        
        grid-template-areas: "left right" "left right" "left right";
        grid-auto-flow: row;
        grid-template-columns: 1.5fr 1fr;
        }
        

    .left {
        grid-area: left;
    }

    .right {
        grid-area: right;
    }

    @media only screen and (max-width: 768px) {
    .gcontainer {
        grid-template-areas: "left left" "right right" "right right";

        }
    }
</style>
