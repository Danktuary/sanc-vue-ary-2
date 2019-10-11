<template>
	<article class="skills-view">
		<div class="tags-list">
			<tag-thumbnail
				v-for="tag in tags"
				:key="tag.id"
				:tag="tag.name"
			>
				{{ tag.name }}
			</tag-thumbnail>
		</div>
		<div class="skills-list">
			<router-view :key="$route.fullPath" />
		</div>
	</article>
</template>

<script>
import axios from 'axios';
import TagThumbnail from './TagThumbnail.vue';

export default {
	name: 'Skills',
	components: {
		TagThumbnail,
	},
	data() {
		return {
			skills: [],
			tags: [],
		};
	},
	async created() {
		try {
			const { data: skills } = await axios.get('/skills?limit=10');
			const { data: tags } = await axios.get('/tags');

			this.skills = skills;
			this.tags = tags;
		} catch ({ response }) {
			// TODO: redirect to an error page
			console.error(response.data.message);
		}
	},
};
</script>

<style lang="scss">
.skills-view {
	display: flex;
	align-items: start;

	.tags-list {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		width: 25%;
		margin-right: 1em;
	}

	.skills-list {
		flex-grow: 1;
	}
}
</style>
