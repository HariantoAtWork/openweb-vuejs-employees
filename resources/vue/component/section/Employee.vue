<template>
	<section class="employee-view">
		<header class="employees-item">
			<div class="avatar">
			    <img class="avatar-circle" :src="item.profileImage" alt="">
			</div>
			<div class="u-flex">
			    <div class="employer-name">{{ item.name }}</div>
			    <div class="employer-role">{{ item.role }}</div>
			</div>
			<div>
			    <span class="fa fa-chevron-right"></span>
			</div>
		</header>
	</section>
</template>