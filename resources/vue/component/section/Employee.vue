<template>
	<section 
		v-scrollbar
		v-if="!isEmpty"
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
					{{skillname}} <span class="fa fa-tag"></span>
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

		computed: {
			isEmpty () {
				var obj = this.employee

			    // null and undefined are "empty"
			    if (obj == null) return true;

			    // Assume if it has a length property with a non-zero value
			    // that that property is correct.
			    if (obj.length > 0)    return false;
			    if (obj.length === 0)  return true;

			    // If it isn't an object at this point
			    // it is empty, but it can't be anything *but* empty
			    // Is it empty?  Depends on your application.
			    if (typeof obj !== "object") return true;

			    // Otherwise, does it have any properties of its own?
			    // Note that this doesn't handle
			    // toString and valueOf enumeration bugs in IE < 9
			    for (var key in obj) {
			        if (hasOwnProperty.call(obj, key)) return false;
			    }

			    return true;
			}
		}
		
	}
</script>