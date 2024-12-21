<template>
	<div class="the-block-cards container">
		<div class="the-block-cards__wr">
			<the-card
				v-for="el in items"
				:key="el.id"
				:id="el.id"
				:img="el.img"
				:numb="el.lot.numb"
				:titlelot="el.lot.titlelot"
				:price="el.price.amount"
				:currency="el.price.currency"
				:title="el.title"
			/>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
		items: {
			type: Array,
			required: true
		},
	});

	console.log(props.items)
</script>

<style lang="scss">

	.the-block-cards__wr
	{
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 10px;
		width: 100%;
		height: 100%;

		@include mq($tablet) { grid-template-columns: repeat(2, 1fr) }

		@include mq($desktop) { grid-template-columns: repeat(3, 1fr) }
	}

</style>