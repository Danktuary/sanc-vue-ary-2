<template>
	<article class="portfolio-layout">
		<section class="image-previews">
			<ul class="image-thumbnails">
				<li v-for="project in projects" :key="project.name">
					<router-link :to="{ name: 'project', params: { project: project.slug } }">
						<img :src="project.images[0]" :alt="project.name" :title="project.name" />
						<span class="preview-name">{{ project.name }}</span>
					</router-link>
				</li>
			</ul>
		</section>
		<transition name="project-view" mode="out-in">
			<router-view :key="$route.fullPath" :project="selectedProject" />
		</transition>
	</article>
</template>

<script>
export default {
	name: 'Portfolio',
	data() {
		return {
			selectedProject: {},
			projects: [
				{
					name: 'Sanctuary',
					imagesAmount: 1,
				},
				{
					name: 'Nordeste Portas',
					imagesAmount: 1,
				},
			],
		};
	},
	beforeRouteUpdate(to, from, next) {
		this.selectProject(to.params.project);
		next();
	},
	created() {
		for (const project of this.projects) {
			project.images = [];
			project.slug = project.name.toLowerCase().replace(/ /g, '-');

			for (let i = 0; i < project.imagesAmount; ++i) {
				try {
					// eslint-disable-next-line no-undef
					project.images.push(require(`../assets/images/portfolio/${project.slug}/${i + 1}.jpg`));
				} catch (error) {
					console.warn(`Project "${project.name}": Image #${i + 1} could not be loaded.`);
				}
			}
		}

		this.selectProject(this.$route.params.project);
	},
	methods: {
		selectProject(projectName) {
			this.selectedProject = this.projects.find(project => project.slug === projectName);
		},
	},
};
</script>

<style lang="scss">
@import '../assets/sass/variables.scss';

.portfolio-layout {
	display: flex;
	flex-direction: column;

	.image-thumbnails {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-top: 0.5em;

		li {
			width: 20%;
			padding: 0 0.5em;
			margin-bottom: 1.5em;
			box-sizing: border-box;

			a {
				display: block;
				position: relative;
				bottom: 0;
				border-radius: 4px;
				box-shadow: 1px 1px 5px 2px rgba(#000, 0.15);
				transition: all 0.15s ease-in-out;

				.preview-name {
					color: lighten($gray, 25%);
					display: block;
					padding: 0.5em 0;
					text-align: center;
					border-top: 1px solid rgba(#000, 0.1);
					transition: all 0.15s ease-in-out;
				}

				img {
					border-radius: 4px;
				}

				&.active,
				&:hover {
					bottom: 5px;
					box-shadow: 1px 1px 5px 3px rgba(#000, 0.2);

					.preview-name {
						border-color: rgba(#000, 0.15);
					}
				}

				&.active {
					bottom: 8px;
				}
			}
		}
	}
}

.project-view-enter-active, .project-view-leave-active {
	transition: all 0.25s ease-in-out;
}

.project-view-enter {
	opacity: 0;
	transform: scale(0.95);
}

.project-view-leave-to {
	opacity: 0;
	transform: scale(1.05);
}
</style>
