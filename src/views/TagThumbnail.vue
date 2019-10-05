<template>
	<router-link :to="{ name: 'skill', params: { skill: tag.toLowerCase() } }" class="tag-thumbnail">
		<span class="thumbnail-title">
			<slot></slot>
		</span>
	</router-link>
</template>

<script>
export default {
	name: 'TagThumbnail',
	props: {
		tag: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss">
@import '../assets/sass/variables.scss';
@import '../assets/sass/mixins.scss';

.tag-thumbnail {
	background-image: url('../assets/images/bg-1.png'), linear-gradient(to right, $purple, $blue);
	display: flex;
	justify-content: center;
	width: 48%;
	margin-bottom: 0.5em;
	border-radius: 4px;
	box-sizing: border-box;
	text-align: center;
	transition: all 0.15s ease-in-out;

	.thumbnail-title {
		color: #fff;
		background-color: rgba(#000, 0.25);
		display: block;
		width: 100%;
		font-weight: bold;
		padding: 1em;
		border-radius: 4px;
		letter-spacing: 2px;
		transition: all 0.15s ease-in-out;
	}

	&.active .thumbnail-title,
	.thumbnail-title:hover {
		background-color: rgba(#000, 0.5);
	}
}
</style>
