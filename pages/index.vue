<script setup>
	const cards = [
			{
				id: '1',
				img: 'https://yastatic.net/naydex/yandex-search/gxh6yd680/36e3f2Vha/k19s_Ntk6XE_x2sg9Bc7JA_pd5Blm9wVgKDA4bRVRmIEsxI0NfWyDlr1YldlaMq5c-IEcU5OSKMBE1_31pklBkP6IMwj0CDNgyua0DSPp4xH1BKQFc7YGYCQzL3Y-Zw',
				lot:{
					numb: "1",
					titlelot: "название лота"
				},
				title: "«Алжирские женщины (Версия О)», Пабло Пикассо",
				price: {
					amount: "10000",
					currency: "руб."
				}
			},
			{
				id: '2',
				img: 'https://yastatic.net/naydex/yandex-search/gxh6yd680/36e3f2Vha/k19s_Ntk6XE_x2sg9Bc7JA_pd5Blm9wVgKDA4bRVRmIEsxI0NfWyDlr1YldlaMq5c-IEcU5OSKMBE1_31pklBkP6IMwj0CDNgyua0DSPp4xH1BKQFc7YGYCQzL3Y-Zw',
				lot:{
					numb: "1",
					titlelot: "название лота"
				},
				title: "«Алжирские женщины (Версия О)», Пабло Пикассо",
				price: {
					amount: "10000",
					currency: "руб."
				}
			},
			{
				id: '3',
				img: 'https://yastatic.net/naydex/yandex-search/gxh6yd680/36e3f2Vha/k19s_Ntk6XE_x2sg9Bc7JA_pd5Blm9wVgKDA4bRVRmIEsxI0NfWyDlr1YldlaMq5c-IEcU5OSKMBE1_31pklBkP6IMwj0CDNgyua0DSPp4xH1BKQFc7YGYCQzL3Y-Zw',
				lot:{
					numb: "1",
					titlelot: "название лота"
				},
				title: "«Алжирские женщины (Версия О)», Пабло Пикассо",
				price: {
					amount: "10000",
					currency: "руб."
				}
			},
			{
				id: '4',
				img: 'https://yastatic.net/naydex/yandex-search/gxh6yd680/36e3f2Vha/k19s_Ntk6XE_x2sg9Bc7JA_pd5Blm9wVgKDA4bRVRmIEsxI0NfWyDlr1YldlaMq5c-IEcU5OSKMBE1_31pklBkP6IMwj0CDNgyua0DSPp4xH1BKQFc7YGYCQzL3Y-Zw',
				lot:{
					numb: "1",
					titlelot: "название лота"
				},
				title: "«Алжирские женщины (Версия О)», Пабло Пикассо",
				price: {
					amount: "10000",
					currency: "руб."
				}
			},
			{
				id: '5',
				img: 'https://yastatic.net/naydex/yandex-search/gxh6yd680/36e3f2Vha/k19s_Ntk6XE_x2sg9Bc7JA_pd5Blm9wVgKDA4bRVRmIEsxI0NfWyDlr1YldlaMq5c-IEcU5OSKMBE1_31pklBkP6IMwj0CDNgyua0DSPp4xH1BKQFc7YGYCQzL3Y-Zw',
				lot:{
					numb: "1",
					titlelot: "название лота"
				},
				title: "«Алжирские женщины (Версия О)», Пабло Пикассо",
				price: {
					amount: "10000",
					currency: "руб."
				}
			},
			{
				id: '6',
				img: 'https://yastatic.net/naydex/yandex-search/gxh6yd680/36e3f2Vha/k19s_Ntk6XE_x2sg9Bc7JA_pd5Blm9wVgKDA4bRVRmIEsxI0NfWyDlr1YldlaMq5c-IEcU5OSKMBE1_31pklBkP6IMwj0CDNgyua0DSPp4xH1BKQFc7YGYCQzL3Y-Zw',
				lot:{
					numb: "1",
					titlelot: "название лота"
				},
				title: "«Алжирские женщины (Версия О)», Пабло Пикассо",
				price: {
					amount: "10000",
					currency: "руб."
				}
			},
			{
				id: '7',
				img: 'https://yastatic.net/naydex/yandex-search/gxh6yd680/36e3f2Vha/k19s_Ntk6XE_x2sg9Bc7JA_pd5Blm9wVgKDA4bRVRmIEsxI0NfWyDlr1YldlaMq5c-IEcU5OSKMBE1_31pklBkP6IMwj0CDNgyua0DSPp4xH1BKQFc7YGYCQzL3Y-Zw',
				lot:{
					numb: "1",
					titlelot: "название лота"
				},
				title: "«Алжирские женщины (Версия О)», Пабло Пикассо",
				price: {
					amount: "10000",
					currency: "руб."
				}
			},
			{
				id: '8',
				img: 'https://yastatic.net/naydex/yandex-search/gxh6yd680/36e3f2Vha/k19s_Ntk6XE_x2sg9Bc7JA_pd5Blm9wVgKDA4bRVRmIEsxI0NfWyDlr1YldlaMq5c-IEcU5OSKMBE1_31pklBkP6IMwj0CDNgyua0DSPp4xH1BKQFc7YGYCQzL3Y-Zw',
				lot:{
					numb: "1",
					titlelot: "название лота"
				},
				title: "«Алжирские женщины (Версия О)», Пабло Пикассо",
				price: {
					amount: "10000",
					currency: "руб."
				}
			},
			{
				id: '9',
				img: 'https://yastatic.net/naydex/yandex-search/gxh6yd680/36e3f2Vha/k19s_Ntk6XE_x2sg9Bc7JA_pd5Blm9wVgKDA4bRVRmIEsxI0NfWyDlr1YldlaMq5c-IEcU5OSKMBE1_31pklBkP6IMwj0CDNgyua0DSPp4xH1BKQFc7YGYCQzL3Y-Zw',
				lot:{
					numb: "1",
					titlelot: "название лота"
				},
				title: "«Алжирские женщины (Версия О)», Пабло Пикассо",
				price: {
					amount: "10000",
					currency: "руб."
				}
			}
		]
</script>

<template>
	<div class="default-layout">
		<TheBlockCards
			:items="cards"
		/>
	</div>
</template>

<style lang="scss">

</style>