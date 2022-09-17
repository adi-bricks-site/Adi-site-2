<script>
    // import { error } from 'astro/dist/core/logger/core'
    import tick from "../assets/tick-svgrepo-com.svg"
    import cross from "../assets/cross-circle-svgrepo-com.svg"

    let isSubmitted = false
    let hasError = false

    let values = {
        email: "",
        name: "",
        message: "",
    };

    let errors = {};

    let tableurl = "https://api.airtable.com/v0/appE99jFhnqLXnEJm/get-in-touch-responses"

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
                            "message" : values.message,

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

    // const handleSubmit = () => {
    //     console.log("submit initiated")
    // }
</script>

{#if isSubmitted}
    <div class="w-full p-6">
        <div class="border-2 bg-green-200 border-green-600 rounded-lg py-3 px-10">
            <div class="m-auto w-full">
                <img src={tick} alt="done" class="h-8" id="tick">
               <div>
                 <h2 class="text-green-600 mt-2">Submitted</h2>
                <p>We will contact you soon.</p>
               </div>
            </div>
        </div>
    </div>
{:else}
<div class="grid place-items-center md:px-8 px-2">
    <form
    class="md:w-[60vw] w-full my-8 px-7 py-10 bg-white border-2 rounded-lg"
    on:submit|preventDefault={handleSubmit}
>
    <div class="flex flex-wrap -mx-3 mb-6">
        <div class="m-auto pb-3 underline decoration-4 underline-offset-8" ><h2>Get in touch with us</h2></div>
        <div class="w-full px-3">
            <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
            >
                name
            </label>
            <input
                bind:value={values.name}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                required
            />
            <!-- <p class="text-gray-600 text-xs italic">Remove if not needed</p> -->
        </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
            <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
            >
                E-mail
            </label>
            <input
                bind:value={values.email}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                required
            />
            <!-- <p class="text-gray-600 text-xs italic">Some tips - as long as needed</p> -->
        </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
            <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
            >
                Message
            </label>
            <textarea
                bind:value={values.message}
                class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-y"
                id="message"
                required
            />
            <!-- <p class="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> -->
        </div>
    </div>
    <div class="md:flex md:items-center">
        <div class="md:w-1/3">
            
            <button type="submit" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-bold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Send</button>
        </div>
        <div class="md:w-2/3" />
        

    </div>
    <div class="pt-5">
        {#if hasError}
        <div class="border-2 bg-red-200 border-red-600 rounded-lg px-16 py-5">
        <div class="m-auto w-full">
            <img src={cross} alt="done" class="h-8" id="tick">
           <div>
             <h2 class="text-red-600 mt-2">Sorry, not submitted</h2>
            <p>Please try again. Or try after some time.</p>
           </div>
        </div>
    </div>
        {/if}
    </div>
</form>
</div>

{/if}

