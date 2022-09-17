<script>
    import adiLogoWhite from "../assets/adi-logo-white.svg";
</script>

<div class="h-full gcontainer p-12">
    <div class="w-auto md:w-[50vh] h-full left">
        <div class="w-full h-full flex align-base">
            <div>
                <img class="h-14 " src={adiLogoWhite} alt="adi-bricks" />
                <p class="font-poppins text-zinc-200 text-sm font-bold mt-2">
                    Adi FlyAsh Brick Manufacturer
                </p>
                <p class="mt-3 text-zinc-300">
                    @ Website by <a
                        class="underline decoration-2 underline-offset-8 font-normal hover:font-bold hover:decoration-4 duration-150"
                        href="https://github.com/msm74588"
                        target="_blank">Mandra Saptak Mandal</a
                    >
                </p>
            </div>
        </div>
    </div>
    <div class="right w-fit">
        <div>
            <a href="/products"><p class="font-poppins">Our Products</p></a>
        </div>
        <div><a href="/aboutus"><p class="font-poppins">About us</p></a></div>
        <div><a href="#contact"><p class="font-poppins">Contact us</p></a></div>
        <div>
            <a href="#"><p class="font-poppins">Send us an Inquiry</p></a>
        </div>
        <div>
            <a href="/getintouch"
                ><p class="font-poppins">Get in touch with us</p></a
            >
        </div>
    </div>
</div>

<style>
    .right > div > a > p {
        color: white;
        height: fit-content;
        padding-bottom: 15px;
        width: 100%;
        text-decoration: underline;
        text-decoration-thickness: 3px;
        text-decoration-color: rgb(110, 110, 110);
        text-underline-offset: 5px;
    }

    .gcontainer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas: "left right";
    }

    @media only screen and (max-width: 768px) {
        .gcontainer {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
            grid-template-areas: "right" "left";
            gap: 2rem;
        }
    }

    .left {
        grid-area: left;
    }

    .right {
        grid-area: right;
    }
</style>
