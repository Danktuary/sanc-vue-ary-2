<template>
	<section class="project-container">
		<div class="project-details">
			<h2 class="project-title">
				{{ project.name }}
			</h2>
			<div class="project-description">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quas quos nisi cum laboriosam.
			</div>
		</div>
		<photoswipe class="project-images">
			<div
				v-for="image in project.images"
				:key="image"
				v-pswp="image"
				:style="{ backgroundImage: `url('${image}')` }"
				class="project-image"
				data-aos="zoom-out"
				data-aos-duration="500"
			></div>
		</photoswipe>
	</section>
</template>

<script>
export default {
	name: 'Project',
	props: {
		project: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="sass">
@import '../../assets/sass/variables'

.project-container
	.project-details
		a
			color: $blue

			&:hover
				color: darken($blue, 15%)

		.project-title
			display: inline-block
			font-weight: 700
			font-size: 2rem
			padding: 0 0.2em 0.2em
			border-bottom: 0.25rem solid rgba($blue, 0.75)
			border-radius: 4px

		.project-description
			color: lighten($gray, 20%)
			margin: 1em 0

	.project-images
		display: flex
		justify-content: space-around
		flex-wrap: wrap

		.project-image
			background-position: center
			background-size: cover
			width: 32%
			height: 200px
			padding: 1%
			margin: 1em 0
			box-sizing: border-box
			border-radius: 4px
			box-shadow: 1px 1px 5px 2px rgba(#000, 0.15)

			@media screen and (max-width: 768px)
				width: 48%
				height: 150px

			@media screen and (max-width: 490px)
				height: 100px

		img
			border-radius: 4px
</style>
