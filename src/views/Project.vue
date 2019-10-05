<template>
	<section class="project-details">
		<img :src="project.images[0]" :alt="project.name" :title="project.name" />
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

<style>
.project-details img {
	border-radius: 4px;
}
</style>
