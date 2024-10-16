<template>
	<footer class="footer">
		<div class="footer__line" />
		<div class="footer__content container">
			<div class="footer__content-wr">
				<p class="footer__wr-title">SUPPORT</p>
				<ul class="footer__wr-list">
					<li class="footer__list-item">
						<NuxtLink to="#">Center</NuxtLink>
					</li>
					<li class="footer__list-item">
						<NuxtLink to="#">Locations</NuxtLink>
					</li>
					<li class="footer__list-item">
						<NuxtLink to="#">Download the App</NuxtLink>
					</li>
				</ul>
			</div>
			<div class="footer__content-wr">
				<p class="footer__wr-title">CORPORATE</p>
				<ul class="footer__wr-list">
					<li class="footer__list-item">
						<NuxtLink to="#">Press</NuxtLink>
					</li>
					<li class="footer__list-item">
						<NuxtLink to="#">Privacy Policy</NuxtLink>
					</li>
					<li class="footer__list-item">
						<NuxtLink to="#">Corporate Governance</NuxtLink>
					</li>
					<li class="footer__list-item">
						<NuxtLink to="#">Careers</NuxtLink>
					</li>
				</ul>
			</div>
			<div class="footer__content-wr footer__content-wr--tablet">
				<p class="footer__wr-title">MORE...</p>
				<ul class="footer__wr-list">
					<li class="footer__list-item">
						<NuxtLink to="#">Security</NuxtLink>
					</li>
					<li class="footer__list-item">
						<NuxtLink to="#">Terms & Conditions</NuxtLink>
					</li>
					<li class="footer__list-item">
						<NuxtLink to="#">Conditions of Business</NuxtLink>
					</li>
					<li class="footer__list-item">
						<NuxtLink to="#">Modern Slavery Statement</NuxtLink>
					</li>
				</ul>
			</div>
			<div class="footer__content-wr footer__content-wr--mobile">
				<button class="footer__wr-auth">
					<p class="footer__wr-title">LOG IN</p>
					<icons-auth />
				</button>
			</div>
		</div>
	</footer>
</template>

<script setup>
import iconauth from '../icons/auth.vue';

</script>

<style lang="scss">
	.footer__line
	{
		width: 100%;
		border: 1px solid $greyborder;
	}

	.footer__content
	{
		width: 100%;
		display: flex;
		justify-content: space-between;
		gap: 65px;
		padding: 20px;
	}

	.footer__content-wr
	{
		&--mobile { display: none; }

		&--tablet { display: none; }

		@include mq($tablet)
		{
			&--tablet { display: block; }
		}

		@include mq($desktop)
		{
			&--mobile { display: block; }
		}
	}

	.footer__wr-title
	{
		font-size: 14px;
		font-weight: 600;
		font-style: normal;
		line-height: 17px;
		margin-bottom: 20px;
		text-transform: uppercase;
		&:last-child{
			margin-bottom: 0;
		}
	}

	.footer__wr-list
	{
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.footer__list-item
	{
		font-size: 12px;
		font-weight: 400;
		line-height: 15px;
		text-align: left;
		text-transform: uppercase;
	}

	.footer__wr-auth
	{
		display: flex;
		align-items: center;
		gap: 8px;
		border: none;
		background: none;

		.footer__wr-title { margin-bottom: 0; }
	}
</style>