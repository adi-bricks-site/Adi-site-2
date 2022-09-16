<script>
    export let name;
    export let link;
</script>

<main>
    <a href={link}>
        <button class="group button-85 text-lg hover:scale-[102%] duration-300 focus:outline-none focus:ring focus:ring-violet-300">
        	<p class="all-product inline-block">{name}</p>
							<!-- <Icon.ArrowRight class="inline-block" size="40" stroke-width="70" /> -->
							<i
								class="fi fi-rr-arrow-small-right inline-block relative top-[0.24rem] scale-125 ml-1 group-hover:translate-x-2 duration-75"
							></i>
        </button>
    </a>
</main>

<!-- HTML !-->


<style>
/* CSS */
@import url('https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css');


.button-85 {
  padding: 0.6em 4em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-85:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(7px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

@keyframes glowing-button-85 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.button-85:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #222;
  left: 0;
  top: 0;
  border-radius: 10px;
}
</style>