<template>
	<section />
</template>

<style scoped lang="scss">
@import '@/assets/styles/main';

section{
    background-color: $sidebar_background_primary;
    height: 100%;
    width: 6rem;
    animation: sideBarLeftAnim 1.3s cubic-bezier(.42,.37,.7,.65);
}

@keyframes sideBarLeftAnim {
    from{ width: 0;}
    to{
        width: 6rem;
    }
}
</style>
