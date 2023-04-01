<template>
	<section />
</template>

<style scoped lang="scss">
@import '@/assets/styles/main';

section{
    background-color: $sidebar_background_primary;
    height: 100%;
    width: 19%;
    overflow: hidden;
    max-height: 100%;
    // animation: sideBarLeftAnim 1.3s cubic-bezier(.3,.54,.6,.72);
}

@keyframes sideBarLeftAnim {
    from{ width: 0;}
    to{
        width: 19%;
    }
}

</style>
