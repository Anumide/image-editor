<script setup lang="ts">
const selectedFile = ref()
provide('imgFile', selectedFile)
</script>
<template>
	<div class="container">
		<Header />
		<main>
			<SideBarLeft />
			<EditBoard />
			<SideBarRight />
		</main>
	</div>
</template>
<style scoped lang="scss">
@import '@/assets/styles/main';

.container {
	width: 100%;
	height: 100vh;
}

main{
	width: 100vw;
	height: 93%;
	display: flex;
	justify-content: space-between;
}
</style>
