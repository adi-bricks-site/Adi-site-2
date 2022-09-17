<script>
    import ButtonLanding from "../components/button-landing.svelte";
    const title_slogan = "Lightweight, Sustainable & Strong Bricks";

    import CarouselComponentLanding from "../sections/carousel-landing.svelte";
</script>

<div
    class="gcontainer h-full relative"
>


    <div class="left  pt-[9vh] pl-24">
        <h1
            class="text-[2.7vw] leading-[4vw] max-w-[85%] font-poppins font-bold"
        >
            {title_slogan}
        </h1>

        <h2 class="text-[1.2vw] pt-5  max-w-[85%]">
            <strong
                >Brick is a core material that is commonly used to build the
                wall of a building.</strong
            > Clay bricks are the most common brick type. It is made from sand and
            clay and uniformly burnt at temperatures between 800°C and 1200°C.
        </h2>
        <div class="pt-5">
            <ButtonLanding name="OUR PRODUCTS" link="#products" />
        </div>
    </div>
    <div class="right grid place-items-center pr-24 py-20">
        <div class="h-full  w-[80%] min-w-[700px] rounded-">
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


    @media only screen and (min-width: 768px) {
    .gcontainer {
        grid-template-areas: "left right" "left right" "left right";

        }
    }



    .gcontainer {
        display: grid;
        grid-template-rows: auto 1fr;
        gap: 0px 20px;
        
        
        grid-auto-flow: row;
        grid-template-columns: 1.5fr 1fr;
        }
        

    .left {
        grid-area: left;
    }

    .right {
        grid-area: right;
    }


</style>
