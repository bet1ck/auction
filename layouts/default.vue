<template>
	<div class="default-layout">
		<Header />
		<main>
			<slot />
		</main>
		<Footer />
	</div>
</template>

<script setup>

</script>

<style lang="scss">
	.default-layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		main { margin-top: 12px; }

		@include mq($tablet) { main { margin-top: 36px; } }
	}

	main { flex: 1; }
</style>