<template>
	<header id="hero" ref="hero">
		<div class="overlay">
			<div class="hero-title" data-aos="zoom-in" data-aos-duration="750">
				<h1>
					<router-link :to="{ name: 'home' }">
						Hi, I'm Icaro
					</router-link>
				</h1>
				<h3>A full stack web developer</h3>
			</div>
			<hero-nav />
		</div>
	</header>
</template>

<script>
import HeroNav from './HeroNav.vue';

export default {
	name: 'Hero',
	components: {
		HeroNav,
	},
};
</script>

<style lang="sass">
@import '../assets/sass/variables'

#hero
	color: #fff
	background-image: url('../assets/images/bg-1.png'), linear-gradient(to right, $purple, $blue)
	background-attachment: fixed
	width: 100%
	height: 350px

	.overlay
		background-color: rgba(#000, 0.25)
		display: flex
		justify-content: center
		align-items: center
		flex-direction: column
		width: 100%
		height: 100%

	.hero-title
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center
		flex-grow: 1
		font-size: 2rem
		letter-spacing: 1px
		text-shadow: 1px 1px 1px rgba(#000, 0.5)

		a
			transition: all 0.1s ease-in-out

		h1, h3
			font-weight: 300

		h3
			margin-top: 0.5rem
			font-size: 0.5em
</style>
