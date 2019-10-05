<template>
	<div>
		<ul>
			<li v-for="skill in skills" :key="skill.id">
				{{ skill.name }}
			</li>
		</ul>
		<hr style="height: 1px; background-color: #000; display: block;" />
	</div>
</template>

<script>
import axios from 'axios';

const cachedSkills = {};

export default {
	name: 'TaggedSkills',
	data() {
		return {
			skills: [],
		};
	},
	async created() {
		const skillParam = this.$route.params.skill;

		if (cachedSkills.hasOwnProperty(skillParam)) {
			return this.skills = cachedSkills[skillParam];
		}

		const { data: skills } = await axios.get(`/skills/tagged/${skillParam}`);

		this.skills = skills;
		cachedSkills[skillParam] = skills;
	},
};
</script>
