<script>
    // import Swiper core and required modules
    import { Navigation, Pagination, A11y, Autoplay } from "swiper";

    import { Swiper, SwiperSlide } from "swiper/svelte";

    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/navigation";
    import "swiper/css/pagination";
    import "swiper/css/scrollbar";

    let landing_carousel_url =
        "https://api.airtable.com/v0/appE99jFhnqLXnEJm/landing-carousel";

    let options = {
        method: "GET",
        headers: {
            Authorization: import.meta.env.PUBLIC_AIRTABLE_API,
        },
    };
    // use Node.env, to hide the api key

    let promise = fetch(landing_carousel_url, options).then((res) =>
        res.json()
    );
</script>

<div class="w-full h-full ">
    <div class="w-full bg-slate-100 h-full ring ring-violet-300 rounded-lg">
        {#await promise}
            <div class="grid place-items-center w-full h-full">
                <p class="animate-bounce ">Loading...</p>
            </div>
        {:then slidedata}
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                followFinger
                direction="horizontal"
                speed={300}
                autoplay
                loop=true
                delay={400}
                pagination={{ clickable: true }}
                class="h-full"
            >
                {#each slidedata.records as slide}
                    {#if slide.fields.Status}
                        <SwiperSlide>
                            <div class="w-full grid place-items-center h-full">
                                <img
                                    class="rounded-lg"
                                    src={slide.fields.image[0].url}
                                    alt={slide.fields.Name}
                                />
                            </div>
                        </SwiperSlide>
                    {/if}
                {/each}
            </Swiper>
        {/await}
    </div>
</div>

<style>
    img {
        max-height: 60vh;
    }
</style>
