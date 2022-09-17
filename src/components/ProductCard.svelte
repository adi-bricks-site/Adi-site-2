<script>
	import Modal from "../components/modal.svelte";
	import { modalActive } from "../stores/stores.js";
	export let product_name;
	export let product_description;
	export let primary_image;

	// console.log(id + product_name + product_description + primary_image)
	let modalState;
	modalActive.subscribe((value) => {
		modalState = value;
	});
</script>

<main>
	<button on:click={() => {
		modalActive.set(true)
		console.log(modalState)
							
	}}>
	<div class="w-44 md:w-auto">
		<div
			class="card-border bg-white card-shadow border-2 border-gray-200 hover:border-4 duration-100  group hover:cursor-pointer"
		>
			<!-- <li>{id}</li> -->

			<!-- check of the primary image is present or not -->
			{#if primary_image}
				<div class="pt-4 px-4">
					<img
						class="aspect-square object-cover image-shadow w-full"
						src={primary_image}
						alt={product_description}
					/>
				</div>
			{/if}

			<div
				class="border-t-2 p-4 group-hover:bg-gray-900 bg-zinc-500 duration-500 rounded"
			>
				<p class="text-white font-medium duration-500">
					{product_name}
				</p>
			</div>
			<!-- <p>{product_description}</p> -->
		</div>
	</div>
	</button>

	{#if modalState == true}
			<Modal product_name="MSM" />
		{/if}
</main>

<style>
	.card-shadow {
		background: #ffffff;
		border-radius: 10px;
	}

	.image-shadow {
		background: #f9f9f9;
		/* box-shadow: 0px 0px 21px -4px rgba(0, 0, 0, 0.25); */
		border-radius: 7px;
	}
	.card-border:hover {
		/* border-color: rgba(252 165 165); */
		border-color: var(--border-color);
	}
</style>
