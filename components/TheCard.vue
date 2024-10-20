<template>
    <NuxtLink class="the-card">
        <div class="the-card__img">
            <img src="../assets/img/ProductImage.png" alt="">
        </div>
        <div class="the-card__info">
            <div class="the-card__info-lot">
                <p class="the-card__lot-text">Номер лота:</p>
                <p class="the-card__lot-number">SKP05432</p>
            </div>
            <p class="the-card__info-title">«Алжирские женщины (Версия О)», Пабло Пикассо</p>
            <div class="the-card__info-value">
                <icons-currency />
                <div class="the-card__value-title">
                    <p class="the-card__title-text">Стартовая цена</p>
                    <p class="the-card__value-price">250 000 RUB</p>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>

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