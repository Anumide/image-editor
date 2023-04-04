<template>
	<section>
		<div v-if="!selectedFile" class="upload__wrapper">
			<input
				id="imageInput"
				ref="imageInput"
				type="file"
				accept="image/*"
				@change="imageFile"
			>
			<label for="imageInput">
				<Icon name="icon-park-outline:file-addition-one" size="30px" />
				<p><em>Drag or Upload Image</em></p>
			</label>
		</div>
		<NuxtImg
			v-if="selectedFile"
			provider="cloudinary"
			:src="`${selectedFile}`"
			width="300"
			height="200"
		/>
	</section>
</template>

<script setup lang="ts">
const imageInput = ref()
const selectedFile = ref(inject('imgFile'))

const imageFile = () => {
	const reader = new FileReader()
	reader.addEventListener('load', () => {
		selectedFile.value = reader.result
	})
	reader.readAsDataURL(imageInput.value.files[0])
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main';

section {
    width: 75%;
}

.upload__wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    input {
        display: none;
    }

    label {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
        cursor: pointer;
    }
}

</style>
