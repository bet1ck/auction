<template>
    <div>
        <header class="header container">
            <NuxtLink to="#" class="header__logo">
                AUCTION.COM
            </NuxtLink>
            <div class="header__menu">
                <NuxtLink to="#" class="header__menu-link">preferred access</NuxtLink>
                <NuxtLink to="#" class="header__menu-link">about</NuxtLink>
                <NuxtLink to="#" class="header__menu-link">discover</NuxtLink>
                <NuxtLink to="#" class="header__menu-link">services</NuxtLink>
                <NuxtLink to="#" class="header__menu-link">Как купить или продать</NuxtLink>
            </div>
            <div class="header__menu-btns">
                <div class="header__btns-btn header__btns-btn--mobile">
                    <p>Авторизация</p>
                    <icons-auth />
                </div>
                <div class="header__btns-btn header__btns-btn--mobile">
                    <icons-search />
                </div>
                <div class="header__btns-btn header__btns-btn--tablet">
                    <icons-favourites />
                </div>
                <div class="header__btns-btn">
                    <icons-cart />
                </div>

                <div class="header__btns-btn header__btns-btn--hide header__btns-btn" @click="isMenuOpen = !isMenuOpen">
                    <icons-burger v-if="isMenuOpen" />
                    <icons-close v-else />
                </div>
            </div>
        </header>
        <transition>
            <header-burger v-if="!isMenuOpen" />
        </transition>
    </div>
</template>

<script setup>

    const isMenuOpen = ref(true);

</script>

<style lang="scss">
    .header
    {
        padding-top: 18px;
        padding-bottom: 18px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .header__logo
    {
        font-size: 27px;
        font-weight: 700;
        line-height: 33px;
    }

    .header__menu
    {
        display: none;

        @include mq($desktop)
        {
            display: flex;
            align-items: center;
            gap: 40px;
        }
    }

    .header__menu-link
    {
        font-size: 12px;
        font-weight: 600;
        line-height: 15px;
    }

    .header__menu-btns
    {
        display: flex;
        align-items: center;
        gap: 40px;
    }

    .header__btns-btn
    {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;

        &--hide
        {
            @include mq($desktop)
            {
                display: none;
            }
        }

        &--mobile
        {
            display: none;
            @include mq($tablet)
            {
                display: flex;
            }
        }

        &--tablet
        {
            display: none;
            @include mq($desktop)
            {
                display: flex;
            }
        }
    }

    .burger
    {
        padding: 0 15px 15px;
        width: fit-content;
        position: absolute;
        right: 0;
        top: 10%;
        z-index: 5;
        background: $white;
        height: 100%;
    }
</style>