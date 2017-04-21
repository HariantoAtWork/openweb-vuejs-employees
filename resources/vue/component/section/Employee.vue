<template>
	<section 
		v-scrollbar
		class="section-employee u-relative scrollbar">

		<header 
			@click="onViewEmployees"
			class="employee-header u-box u-box--align-center">
			<div 
				class="employee-arrow">
				<span class="fa fa-chevron-left"></span>
			</div>
			<div class="avatar">
				<img class="avatar-circle" :src="employee.profileImage" alt="">
			</div>
			<div class="u-flex">
				<h1 class="employer-name">{{ employee.name }}</h1>
				<h2 class="employer-role">{{ employee.role }}</h2>
			</div>
			
		</header>
		<article class="employee-content">
			<h3>Bio</h3>

			<div class="employee-bio">{{ employee.bio }}</div>

			<h3>Skills</h3>

			<ul class="list skilltags-list">
				<li 
					class="skilltags-item" 
					v-for="skillname in employee.skills">
					{{skillname}} <span class="fa fa-plus-square"></span>
				</li>
			</ul>
		</article>
	</section>
</template>

<script>
	import './Employee.scss'

	export default {
		name: 'Employee',
		props: {
			onViewEmployees: {
				type: Function,
				required: true
			},
			employee: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		
	}
</script>