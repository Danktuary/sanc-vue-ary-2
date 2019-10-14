<template>
	<div id="app">
		<hero />
		<main id="main-content" class="container">
			<transition name="route" mode="out-in">
				<router-view />
			</transition>
		</main>
	</div>
</template>

<script>
import Hero from './components/Hero.vue';

export default {
	name: 'App',
	components: {
		Hero,
	},
};
</script>

<style lang="sass">
@import '~axios-progress-bar/dist/nprogress.css'
@import '~aos/src/sass/aos'
@import './assets/sass/fonts'
@import './assets/sass/reset'
@import './assets/sass/variables'

#nprogress
	.bar
		background-color: $purple

	.spinner-icon
		border-color: $purple

body
	color: #4a4a4a
	font-family: 'Open Sans', sans-serif

a
	color: #fff

	&:hover
		color: darken(#fff, 25%)

.container
	max-width: 1200px
	margin-left: auto
	margin-right: auto

	@media screen and (max-width: 980px)
		max-width: 95%

#main-content
	margin-top: 1rem
	margin-bottom: 1rem
	padding: 1rem
	border-radius: 4px
	box-sizing: border-box
	box-shadow: 1px 1px 5px 1px rgba(#000, 0.25)

.route-enter-active, .route-leave-active
	position: relative
	left: 0
	top: 0
	transition: all 0.25s ease-in-out

.route-enter
	left: 1em
	opacity: 0

.route-leave-to
	left: -1em
	opacity: 0
</style>
