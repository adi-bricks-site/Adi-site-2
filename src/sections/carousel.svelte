<script>
    // import Swiper core and required modules
    import { Navigation, Pagination, A11y , Autoplay} from "swiper";

    import { Swiper, SwiperSlide } from "swiper/svelte";

    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/navigation";
    import "swiper/css/pagination";
    import "swiper/css/scrollbar";


    let carousel_url =
        "https://api.airtable.com/v0/appsWOLKfMpJcm5QX/primary-carousel";

    let options = {
        method: "GET",
        headers: {
            Authorization: import.meta.env.PUBLIC_AIRTABLE_API,
        },
    };
    // use Node.env, to hide the api key

    let promise = fetch(carousel_url, options).then((res) =>
        res.json()
    );
</script>

<div class="w-full p-2 md:p-10  bg-purple-200 ">
    <div class="w-full rounded-lg bg-slate-100 border-4 border-slate-400 h-full">
       

        {#await promise}
            <div class="grid place-items-center w-full h-full py-6">
                <p class="animate-bounce ">Loading...</p>
            </div>
        {:then carddata}
        <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        followFinger
        direction="horizontal"
        speed={300}
        autoplay
        delay={400}
        centeredSlides
        loop=true
        pagination={{ clickable: true }}
        class="h-full"
        >
        {#each carddata.records as card}
            <SwiperSlide>
                <div class="w-full justify-center flex">
                    <img
                    class="rounded-lg"
                                        src={card.fields.slideimg[0].url}
                                        alt={card.fields.Name}
                />
                </div>
            </SwiperSlide>

        {/each}

        </Swiper>
        {/await}

        
    </div>
</div>
