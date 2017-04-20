<template>
	<div v-html="content"></div>
</template>

<script>
	export default {
		name: 'Markdown',
		props: {
			file: {
				type: String,
				required: true
			}
		},
		data () {
			return {
				content: ''
			}
		},
		watch: {
			file (newValue) {
				this.loadMarkdownPage(newValue)
			}
		},
		methods: {
			loadMarkdownPage (filename) {
				return require(`../../data/${filename}.md`)
			}
		},
		// LifeCycle Hooks
		created () {
			this.content = this.loadMarkdownPage(this.file);
		}
	}
</script>