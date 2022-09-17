<script>
	import ProductCard from "../components/ProductCard.svelte";

	let url =
		"https://api.airtable.com/v0/appE99jFhnqLXnEJm/Table%201?id=tbls0VnR15vXEiP2w";

	let options = {
		method: "GET",
		headers: {
			Authorization: import.meta.env.PUBLIC_AIRTABLE_API,
		},
	};
	// use Node.env, to hide the api key

	let promise = fetch(url, options).then((res) => res.json());
	// create a var to pass product thumnail

	// let modalState
	// modalActive.subscribe(value => {
	// 	modalState = value;
	// https://api.whatsapp.com/send?phone=917001376204
	// });
</script>

<div class="px-4 md:px-48 w-full">
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
		<div class="product-list divide-y divide-gray-400 w-full">
			<div class="py-20 ">
				<h1
					class="font-bold underline underline-offset-8 decoration-4 decoration-indigo-400"
					style="font-size: 40px;"
				>
					Our Featured Products:
				</h1>
				<div class="grid-wrapper pt-4 featured-grid">
					{#each data.records as product}
						{#if product.fields.status != "not-available"}
							{#if product.fields.featured}
								<ProductCard
									product_name={product.fields.Product_name}
									product_description={product.fields
										.Product_description}
									primary_image={product.fields
										.primary_image[0].thumbnails.large.url}
									--border-color="#818cf8"
								/>
							{/if}
						{/if}
					{/each}
				</div>
			</div>
			<div class="py-20">
				<h1
					class="font-bold underline underline-offset-8 decoration-4 decoration-orange-400"
					style="font-size: 40px;"
				>
					Our Products:
				</h1>
				<div class="grid-wrapper pt-4 md:overflow-x-auto product-grid">
					{#each data.records as product}
						{#if product.fields.status != "not-available"}
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
				<div class="pt-4 md:pt-8">
					<a
						href="/products"
						class="text-zinc-500 underline underline-offset-[7px] decoration-2 hover:translate-x-2 duration-200 "
						>See all products ➜</a
					>
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
</div>

<style>
	.grid-wrapper {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.7rem;
		justify-items: center;
		align-items: start;
		justify-content: space-evenly;
	}
	@media only screen and (max-width: 768px) {
		.grid-wrapper {
			/* grid-template-columns: repeat(2, 1fr); */
			grid-template-rows: repeat(2, 1fr);
			grid-auto-flow: column;
			grid-auto-columns: 1fr;
			justify-items: center;
			align-items: center;
			justify-content: start;
		}
		.featured-grid {
			overflow-x: scroll;
			grid-template-rows: repeat(1, 1fr);
			scroll-padding-left: 3em;
			scroll-padding-right: 3em;
		}

		.product-grid {
			gap: 0.3rem;
			overflow-x: scroll;

			scroll-padding-left: 3rem;
		}
	}
</style>
