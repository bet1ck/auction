<template>
    <NuxtLink class="the-card">
        <div class="the-card__img">
            <img :src="img" alt="">
        </div>
        <div class="the-card__info">
            <div class="the-card__info-lot">
                <p class="the-card__lot-text">{{ titlelot }}</p>
                <p class="the-card__lot-number">{{ numb }}</p>
            </div>
            <p class="the-card__info-title">{{ title }}</p>
            <div class="the-card__info-value">
                <icons-currency />
                <div class="the-card__value-title">
                    <p class="the-card__title-text">Стартовая цена</p>
                    <p class="the-card__value-price">{{ price }} RUB</p>
                </div>
            </div>
        </div>
        <ui-button>выбрать</ui-button>
    </NuxtLink>
</template>

<script setup>

	const props = defineProps({
		id: { type: Number },
		img: { type: String },
		numb: { type: Number },
		titlelot: { type: String },
		price: { type: Number },
		currency: { type: String },
		title: { type: String },
	});

</script>

<style lang="scss">
.the-card__img
{
    width: 100%;
    margin-bottom: 20px;
    img { width: 100%; }
}

.the-card__info-lot
{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
}

.the-card__lot-text
{
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
}

.the-card__lot-number
{
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    color: $blue;
}

.the-card__info-title
{
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    margin-bottom: 10px;
}

.the-card__info-value
{
    display: flex;
    gap: 20px;
}

.the-card__title-text
{
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin: 0;
}

.the-card__value-price
{
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin: 0;
    color: $blue;
}
</style>