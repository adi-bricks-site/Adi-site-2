<script>
    import { fade } from "svelte/transition";
    import { modalActive } from "../stores/stores.js";
    import { modaldata } from "../stores/modaldata.js";
    import close from "../assets/close-svgrepo-com.svg"
    import { inquiry } from "../stores/inquiry"
    import cross from "../assets/cross-circle-svgrepo-com.svg"


    let isInquiry = false
    let isSubmitted = false
    let hasError = false

    let values = {
        mail: "",
        name: "",
        product_name: "",
        quantity: ""
    };

    let modalState;
    modalActive.subscribe((value) => {
        modalState = value;
    });

    let tableurl = "https://api.airtable.com/v0/appE99jFhnqLXnEJm/inquiry"

function submit() { fetch(tableurl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': import.meta.env.PUBLIC_AIRTABLE_API,
    },
    body: JSON.stringify({
            "records": [{
                
                    "fields": {
                        "Name": values.name,
                        "email": values.email,
                        "product" : $modaldata.product_name,
                        "quantity" : values.quantity


                    }
                    
    }],
            
    })
})
.then(res => res.json())
.then(data => {console.log(data)
    isSubmitted = true;
    hasError = false;
})
.catch(error => {console.log(error)
    hasError = true
})

}

const handleSubmit = async () => {
    try {
        // await schema.validate(values, { abortEarly: false });
        // alert(JSON.stringify(values, null, 2));
        submit();
        
        errors = {};
    } catch (err) {
        // errors = err.inner.reduce((acc, err) => {
        //   return { ...acc, [err.path]: err.message };
        // }, {});
        console.log(err);
    }
};



</script>

<main>
    <div
        transition:fade={{ duration: 150 }}
        class="fixed top-0 left-0 bg-[#21212130] h-screen w-screen py-10 px-5 md:px-32 z-50"
    >
            <div class="relative w-full h-full">
                <div
            class="bg-zinc-100 w-full h-full rounded-lg border-8 border-blue-400 p-6 md:p-12 overflow-scroll"
        >
        <button class="float-right absolute right-5 top-5" on:click={() => {modalActive.set(false)}} ><img class="h-10" src={close} alt="x"></button>
           <div class="flex md:flex-row flex-col w-full h-full modal-bg">
            <div class="md:w-[50%] w-full grid place-items-center">
                <img class="md:h-full w-full rounded-lg"
                    src={$modaldata.image_link}
                    alt={$modaldata.product_name}
                />
            </div>
            <div class="md:p-5">
                <p>Product name:</p>
                <h1 class="font-medium font-poppins md:text-4xl underline decoration-4 underline-offset-8 py-3">{$modaldata.product_name}</h1>
                <p>Product description:</p>
                <p>{$modaldata.product_description}</p>
                <p class="pt-5">Estimated Price: INR <b>{$modaldata.estimated_cost}</b>/peice</p>

                <a href="#inquiry"><button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-5 " on:click={() =>{
                        $inquiry.product_name = $modaldata.product_name
                        $inquiry.product_description = $modaldata.product_description
                        isInquiry = true

                    }}
                    >Send us Inquiry about this product</button
                ></a>
<!-- FORM -->
{#if isInquiry}


<section id="inquiry">
    <form on:submit|preventDefault={handleSubmit}>
        <div class="border-2 p-6 my-5 rounded-lg border-blue-600">
         <div class="mb-6">
             <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
             <input type="text" bind:value={values.name} id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
           </div>
           <div class="mb-6">
             <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
             <input bind:value={values.mail} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="@email" required>
           </div>
           <div class="mb-6">
             <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quantity</label>
             <input bind:value={values.quantity} min="1" type="number" id="quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="quantity" required>
           </div>
           
           <button type="submit"  disabled="{isSubmitted}" class="text-white disabled:bg-blue-300 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {#if isSubmitted}
            Submitted: We will contact you soon
            {:else}
            Submit
            {/if}
        </button>
        </div>
       </form>
</section>
{/if}
  <!-- /FORM -->

  
            </div>
           </div>
        </div>
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

<style>
    /* .modal-bg{
        background-image: url(../assets/adi-logo.svg);
        background-repeat: no-repeat;
        background-position: right bottom;
        background-size: 30%;
    }

    @media only screen 
   and (max-width : 768px) {

   .modal-bg{
    background-image: none;
   }
} */
</style>