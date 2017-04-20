<template>
	<section class="employee-view">
		<header class="employees-item">
			<div class="avatar">
			    <img class="avatar-circle" :src="employee.profileImage" alt="">
			</div>
			<div class="u-flex">
			    <div class="employer-name">{{ employee.name }}</div>
			    <div class="employer-role">{{ employee.role }}</div>
			</div>
			<div>
			    <span class="fa fa-chevron-right"></span>
			</div>
		</header>
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
				default: {}
			}
		},
	}
</script>