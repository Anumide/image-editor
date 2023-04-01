<template>
	<div class="heading">
		<div class="title_wrapper">
			<p class="title">
				Image Title
			</p>
			<Icon name="radix-icons:pencil-2" size="15px" />
		</div>

		<button type="button">
			<Icon name="charm:download" size="15px" />
			Download
		</button>
	</div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/main';

.heading {
    background-color: $background_primary;
    padding: 1rem 1rem 1rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 7%;
}

.title_wrapper{
    display: flex;
    align-items: center;
    gap: 1rem;
    color: $text_primary;
    svg{
        cursor: pointer;
    }
}

.title {
    font-weight: bold;
    font-size: 0.95rem;
}

button {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0.5rem 0.8rem;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.1);
    color: #fff;
    background-color: #f47b39;
    cursor: pointer;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.3px;
    &:hover{
        background-color: #db6e32;
    }
}
</style>
