<script>
    import Whatsapp from "../assets/wa.svg";
    import Mail from "../assets/mail.svg";
    import Phone from "../assets/phone.svg";
    import Maps from "../assets/maps.svg";

    let phoneno = 7001376204;
    let email = "msm74588@gmail.com";
    let whatsapp_no = 7001376204;
    let maps_share_link = "https://maps.app.goo.gl/X3jMXJ1TGhkXErPr6";

    let mail_body = `mailto:${email}?subject = Feedback&body = Message`;
</script>

<div class="w-full h-full bg-con bg-local bg-cover bg-center px-[10vw] py-14">
    <div
        class="w-full h-full border-indigo-300 border-[6px] rounded-3xl bg-white grid col-auto px-[3vw]"
    >
        <div class="text-center pt-24 font-poppins font-bold">
            <h1>Contact Us</h1>
            <p>Let's talk about your project.</p>
            <div class="buttongroup pt-6">
                <a href="/getintouch"><button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"
                    >Get in touch with us</button
                ></a>
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"
                    >Send us an Inquiry</button
                >
            </div>
        </div>
        <div class="w-full h-full grid place-items-center py-10">
            <div class="flex lg:flex-row flex-col">
                <div class="contact-card">
                    <a href={mail_body}>
                        <button class="flex items-center ">
                            <img class="inline-block" src={Mail} alt={Mail} />
                            <p class="inline-block  text-left break-words sm:break-words">
                                Email us {email}
                            </p>
                        </button>
                    </a>
                </div>
                <div class="contact-card">
                    <a href={maps_share_link} target="_blank">
                        <button class="flex items-center ">
                            <img class="inline-block" src={Maps} alt={Maps} />
                            <p class="inline-block  text-left break-words sm:break-words">
                                Locate us on Maps
                            </p>
                        </button>
                    </a>
                </div>
                <div class="contact-card">
                    <a href="tel:{phoneno}">
                        <button class="flex items-center">
                            <img class="inline-block" src={Phone} alt={Phone} />
                            <p class="inline-block text-left break-words sm:break-words">
                                Call us {phoneno}
                            </p>
                        </button>
                    </a>
                </div>
                <div class="contact-card">
                    <a href="https://api.whatsapp.com/send?phone={whatsapp_no}">
                        <button class="flex items-center">
                            <img
                                class="inline-block"
                                src={Whatsapp}
                                alt={Whatsapp}
                            />
                            <p class="inline-block text-left break-words sm:break-words">
                                Contact via whatsapp
                            </p>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .bg-con {
        background-color: #cfcfcf;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23CFCFCF' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23d8d8d8' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23e2e2e2' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23ececec' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23f5f5f5' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23FFFFFF' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E");
    }

    img {
        padding-right: 15px;
        height: 3vw;
        margin: auto;
    }

    .contact-card {
        border-width: 4px;
        padding: 0.75rem;
        border-color: rgb(68, 68, 68);
        border-radius: 0.5rem;
        transition: 150ms;
        margin: 1rem;
        background: #ffffff;
        box-shadow: -5px 5px 10px rgba(161, 161, 161, 0.2),
            5px -5px 10px rgba(161, 161, 161, 0.2),
            -5px -5px 10px rgba(255, 255, 255, 0.9),
            5px 5px 13px rgba(161, 161, 161, 0.9);
    }

    .contact-card:hover {
        box-shadow: 0 0 0 3px rgb(196 181 253);
        scale: 105%;
    }

</style>
