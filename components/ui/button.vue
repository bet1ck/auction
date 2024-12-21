<template>
	<div class="ui-button__wr">
		<button ref="uiButton" class="ui-button">
			<span class="ui-button__text">
				<slot />
			</span>
		</button>
	</div>
</template>

<script setup>
	const uiButton = ref(null);

	onMounted(() => {
	if (uiButton.value) {
		uiButton.value.onmousemove = function (e) {
		let x = e.pageX - uiButton.value.offsetLeft;
		let y = e.pageY - uiButton.value.offsetTop;

		uiButton.value.style.setProperty('--x', x + 'px');
		uiButton.value.style.setProperty('--y', y + 'px');
		};
	}
	});
</script>

<style lang="scss">
	.ui-button__wr .ui-button
	{
		position: relative;
		padding: 10px 20px;
		border-radius: 20px;
		overflow: hidden;
		width: 100%;
		max-width: 250px;
        background-color: #333;
		cursor: pointer;
        border: none;
		z-index: 0;

		.ui-button__text
		{
			position: relative;
			z-index: 2;
			color: #fff;
			transition: 1s all;
		}

		&::before
		{
			content: '';
			position: absolute;
			top: var(--y);
			left: var(--x);
			transform: translate(-50%, -50%);
			width: 0;
			height: 0;
			border-radius: 50%;
			color: #fff;
			background: #9bdc28;
			transition:  1s, top 0s, left 0s;
			z-index: 1;
		}

		&:hover
		{
			.ui-button__text { color: #333; }

			&::before
			{
				width: 1000px;
				height: 1000px;
			}
		}
	}

</style>