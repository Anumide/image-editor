<script setup lang="ts">
const imageInput = ref()
const selectedFile = ref()

const imageFile = () => {
	const reader = new FileReader()
	reader.addEventListener('load', () => {
		selectedFile.value = reader.result
	})
	reader.readAsDataURL(imageInput.value.files[0])
}

</script>
<template>
	<div class="container">
		<Header />
		<main>
			<SideBarLeft />
			<input ref="imageInput" type="file" accept="image/*" @change="imageFile">
			<NuxtImg
				provider="cloudinary"
				:src="`${selectedFile}`"
				width="300"
				height="200"
			/>
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
	height: 100%;
}
</style>
