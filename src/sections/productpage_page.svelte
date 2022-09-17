<script>
	// import { log } from "astro/dist/core/logger/core";
    // import { log } from "astro/dist/core/logger/core";
import ProductCard from "../components/ProductCard.svelte";
    import filter from "../stores/categories";
    import categoriesList from "../stores/categories"; 

	let category;

    categoriesList.subscribe(data => {
        category = data;
        console.debug(data)
    });

	let url =
		"https://api.airtable.com/v0/appE99jFhnqLXnEJm/Table%201?id=tbls0VnR15vXEiP2w";

	let options = {
		method: "GET",
		headers: {
			Authorization: import.meta.env.PUBLIC_AIRTABLE_API,
		},
	};
	// use Node.env, to hide the api key

	var filtertext = category
	let filtertextSetbackCall = filtertext

	let promise = fetch(url, options).then((res) => res.json());
	// create a var to pass product thumnail

	// let modalState
	// modalActive.subscribe(value => {
	// 	modalState = value;
	// https://api.whatsapp.com/send?phone=917001376204
	// });
</script>

<div class="will-change-auto px-48">
	{#await promise}
		<script
			async
			src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
		<div class="flex justify-center w-full">
			<lottie-player
				src="https://assets6.lottiefiles.com/packages/lf20_dkz94xcg.json"
				background="transparent"
				speed="1"
				style="width: 200px; height: 200px;"
				loop
				autoplay
			/>
		</div>
	{:then data}
		<!-- promise was fulfilled -->
		<div class="product-list divide-y divide-gray-400">
			<div class="py-20">
				<h1
					class="font-bold underline underline-offset-8 decoration-4 decoration-orange-400"
					style="font-size: 40px;"
				>
					Our Products:
				</h1>
				{#if category.filter != ""}
				<p
					class="text-zinc-600 bg-zinc-300 rounded p-[10px] px-4 w-fit font-medium"
				>
					filter: {filtertext}
				</p>
				{/if}
				<div class="grid-wrapper pt-4">
					{#each data.records as product}
						{#if filtertext != ""}
							{#if filtertext == product.fields.category}
								{#if product.fields.status != "not-available"}
									<ProductCard selectableCallback={filtertextSetbackCall
									}
										product_name={product.fields
											.Product_name}
										product_description={product.fields
											.Product_description}
										primary_image={product.fields
											.primary_image[0].thumbnails.large
											.url}
										--border-color="#fb923c"
									/>
								{/if}
							{/if}
						{:else if product.fields.status != "not-available"}
							<ProductCard
								product_name={product.fields.Product_name}
								product_description={product.fields
									.Product_description}
								primary_image={product.fields.primary_image[0]
									.thumbnails.large.url}
								--border-color="#fb923c"
							/>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	{:catch error}
		<div class="text-center w-full justify-center flex">
			<div class="py-32">
				<h2>Oops: something went wrong...</h2>
				<h3><strong>Please Refresh</strong></h3>
				<code>{error}</code>
			</div>
		</div>
	{/await}

	<button on:click={() => {
		categoriesList.set("")
		console.log(categoriesList)
							
	}}>
	All Products</button>

	<!-- {#if modalState == true}
			<Modal product_name="MSM" />
		{/if} -->
</div>

<style>
	.grid-wrapper {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.7rem;
		justify-items: center;
		align-items: start;
		justify-content: center;
		justify-content: space-evenly;
	}
</style>
