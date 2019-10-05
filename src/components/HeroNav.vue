<template>
	<nav id="hero-nav" :class="{ fixed: scrolledPast }" class="container">
		<ul class="nav-items">
			<li>
				<router-link :to="{ name: 'home' }">
					Home
				</router-link>
			</li>
			<li>
				<a href="#">
					Skills
				</a>
			</li>
			<li>
				<a href="#">
					Portfolio
				</a>
			</li>
		</ul>
		<ul class="nav-items">
			<li>
				<a href="https://github.com/Danktuary" target="_blank" rel="noopener noreferrer">
					GitHub
				</a>
			</li>
			<li>
				<a href="#">
					R&eacute;sum&eacute;
				</a>
			</li>
			<li>
				<a href="#">Contact</a>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'HeroNav',
	data() {
		return {
			scrolledPast: false,
		};
	},
	created() {
		window.addEventListener('scroll', this.handleScroll);
	},
	destroyed() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll() {
			const navHeight = this.$el.clientHeight;
			const heroHeight = this.$parent.$refs.hero.clientHeight;

			this.scrolledPast = window.scrollY > (heroHeight - navHeight);
		},
	},
};
</script>

<style lang="scss">
@import '../assets/sass/variables.scss';
@import '../assets/sass/mixins.scss';

#hero-nav {
	background-color: rgba(#000, 0.25);
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 0.5em;
	border-radius: 8px 8px 0 0;
	box-sizing: border-box;
	border: 1px solid rgba(#000, 0.15);
	transition: all 0.15s ease-in-out;

	&.fixed {
		background-color: transparent;
		background-image:
			url('../assets/images/bg-1.png'),
			linear-gradient(to right, rgba(#000, 0.25), rgba(#000, 0.25)),
			linear-gradient(to right, $purple, $blue);
		position: fixed;
		top: 0;
		border-radius: 0 0 8px 8px;
		z-index: 500;
	}

	.nav-items {
		display: flex;
		letter-spacing: 1px;

		li {
			background-color: $purple;
			position: relative;
			margin: 0 0.25em;
			border-radius: 3px;

			a {
				color: rgba(#fff, 0.75);
				display: block;
				font-weight: 300;
				padding: 0.75em 1.5em;
				border-radius: 3px;
				box-shadow: 0 0 1px 0 rgba(#fff, 0.1);
				transition: all 0.1s ease-in-out;

				&.active,
				&:hover {
					color: #fff;
				}

				@include pulse-hover;
			}

			&:first-of-type {
				margin-left: 0;
			}

			&:last-of-type {
				margin-right: 0;
			}
		}
	}
}
</style>
