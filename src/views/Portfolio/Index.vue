<template>
	<article class="portfolio-layout">
		<section class="image-previews">
			<paginate
				v-model="currentPage"
				container-class="pagination-controls"
				:page-count="pagesAmount"
			/>
			<ul class="image-thumbnails">
				<li v-for="project in projectsToShow" :key="project.name">
					<router-link :to="{ name: 'project', params: { project: project.directory } }">
						<div class="image-thumbnail" :style="{ backgroundImage: `url('${project.thumbnail}')` }"></div>
						<span class="preview-name">{{ project.name }}</span>
					</router-link>
				</li>
			</ul>
		</section>
		<section class="portfolio-content">
			<transition name="project-view" mode="out-in">
				<router-view :key="$route.fullPath" :project="selectedProject" />
			</transition>
		</section>
	</article>
</template>

<script>
import Paginate from 'vuejs-paginate';
import chunk from 'lodash.chunk';
import projects from './projects.js';

function importAll(requireContext) {
	return requireContext.keys().map(file => {
		const [, directory] = file.match(/\.\/(.*)\/.*/);
		return { file, directory, resolvedPath: requireContext(file) };
	});
}

const portfolioImages = importAll(require.context('../../assets/images/portfolio/', true, /\.(jpg|png)$/));

export default {
	name: 'Portfolio',
	components: {
		Paginate,
	},
	data() {
		return {
			projects: chunk(projects, 4),
			selectedProject: {},
			currentPage: 1,
			pagesAmount: Math.ceil(projects.length / 4),
		};
	},
	computed: {
		projectsToShow() {
			return this.projects[this.currentPage - 1];
		},
	},
	beforeRouteUpdate(to, from, next) {
		this.selectProject(to.params.project);
		next();
	},
	created() {
		for (const projectsChunk of this.projects) {
			for (const project of projectsChunk) {
				project.images = portfolioImages.filter(image => image.directory === project.directory).map(image => image.resolvedPath);
				project.thumbnail = project.images.find(image => /\/index\.(jpg|png)$/.test(image)) || project.images[0];
			}
		}

		this.selectProject(this.$route.params.project);
	},
	methods: {
		selectProject(projectDirectory) {
			this.selectedProject = this.projectsToShow.find(project => project.directory === projectDirectory);
		},
	},
};
</script>

<style lang="scss">
@import '../../assets/sass/variables';
@import '../../assets/sass/pagination.sass';

.portfolio-layout {
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	.image-previews {
		.image-thumbnails {
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			margin-top: 0.5em;

			li {
				width: 25%;
				padding: 0 0.5em;
				margin-bottom: 1.5em;
				box-sizing: border-box;

				@media screen and (max-width: 768px) {
					width: 50%;
				}

				a {
					display: block;
					position: relative;
					bottom: 0;
					border-radius: 4px;
					box-shadow: 1px 1px 5px 2px rgba(#000, 0.15);
					transition: all 0.15s ease-in-out;

					.image-thumbnail {
						background-position: center;
						background-size: cover;
						height: 150px;
						border-radius: 4px;

						@media screen and (max-width: 768px) {
							height: 125px;
						}

						@media screen and (max-width: 490px) {
							height: 80px;
						}
					}

					.preview-name {
						color: lighten($gray, 25%);
						display: block;
						padding: 0.5em 0;
						text-align: center;
						border-top: 1px solid rgba(#000, 0.1);
						transition: all 0.15s ease-in-out;
					}

					&.active,
					&:hover {
						box-shadow: 1px 1px 5px 3px rgba(#000, 0.2);

						.preview-name {
							border-color: rgba(#000, 0.15);
						}
					}

					&.active {
						.preview-name {
							color: $blue;
							font-weight: 600;
						}
					}
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
	transform: scale(1.05);
}

.project-view-leave-to {
	opacity: 0;
	transform: scale(0.95);
}
</style>
