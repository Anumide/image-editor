<script setup lang="ts">
    const elements = ref([
        { icon: 'mingcute:settings-2-line', title: 'edit' },
        { icon: 'bi:stars', title: 'Effects' },
        { icon: 'ph:text-t', title: 'Text' }
    ])

    const themeImg = ref('ion:moon-outline')
    // light theme img = line-md:moon-to-sunny-outline-transition
</script>

<template>
	<section>
		<div>
			<div
				v-for="(element, index) in elements"
				:key="index"
				class="sidebar__left__element"
				:class="`sidebar__left__element--${index}`"
			>
				<Icon :name="element.icon" size="30px" />
				<span>{{ element.title }}</span>
			</div>
		</div>
		<div class="sidebar__left__element theme">
			<Icon :name="themeImg" size="20px" />
		</div>
	</section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/main';

section{
    background-color: $sidebar_background_primary;
    height: 100%;
    width: 6%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 2em
    // animation: sideBarLeftAnim 1.3s cubic-bezier(.3,.54,.6,.72);
}

.sidebar__left__element {
    display: flex;
    flex-direction: column;
    gap: 1px;
    line-height: 10px;
    align-items: center;
    padding: 1em;
    cursor: pointer;
    color: $text_primary;
    &:hover {
        background-color: lighten($text_primary, 60%);
    }
    span {
        font-size: 10px;
        text-transform: uppercase;
    }

    &.active {
        background-color: lighten($text_primary, 50%);
    }
}

@keyframes sideBarLeftAnim {
    from{ width: 0;}
    to{
        width: 6rem;
    }
}
</style>
