<template>
    <div class="burger">
        <div class="burger__menu-btns">
            <div class="burger__btns-btn burger__btns-btn--mobile">
                <p>Авторизация</p>
                <icons-auth />
            </div>
            <div class="burger__btns-btn burger__btns-btn--mobile">
                <icons-search />
            </div>
            <div class="burger__btns-btn burger__btns-btn--tablet">
                <p>избранное</p>
                <icons-favourites />
            </div>
        </div>
        <div class="burger__menu">
            <NuxtLink to="#" class="burger__menu-link">preferred access</NuxtLink>
            <NuxtLink to="#" class="burger__menu-link">about</NuxtLink>
            <NuxtLink to="#" class="burger__menu-link">discover</NuxtLink>
            <NuxtLink to="#" class="burger__menu-link">services</NuxtLink>
            <NuxtLink to="#" class="burger__menu-link">Как купить или продать</NuxtLink>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">

    .burger__menu
    {
        display: flex;
        flex-direction: column;
    }

    .burger__btns-btn
    {
        display: flex;
        align-items: center;
    }

</style>