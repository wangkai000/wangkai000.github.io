<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { SITE } from "~/config/param";
</script>

<template>
    <div
        class="relative select-none overflow-hidden rounded-[10px] bg-[var(--card--bg)]"
    >
        <img
            class="lozad pointer-events-none h-full w-full select-none object-fill"
            :style="{ opacity: isDark ? 0 : 1 }"
            src="/wrap-bg.svg"
            alt=""
        />
        <img
            class="lozad pointer-events-none absolute left-0 top-0 h-auto w-[370px] select-none object-fill"
            src="https://pic.netbian.com/uploads/allimg/240127/000026-1706284826cc8a.jpg"
            style="transform: rotate(330deg) translate3d(100px, 10px, 10px)"
            alt=""
        />

        <a class="detail-arrow" :href="SITE.weeklyUrl" target="_blank">
            <Icon class="h-[16px] w-[16px]" icon="carbon-arrow-up-right" />
        </a>
    </div>
</template>

<style scoped>
.detail-arrow {
    pointer-events: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    position: absolute;
    left: 12px;
    bottom: 10px;
    color: var(--text-color);
    border-radius: 18px;
    background: var(--card--bg);
    box-shadow: var(--card-border) 0px 0px 0px 2px;
    transition: box-shadow 0.2s ease-out 0s;
}

.detail-arrow:hover {
    cursor: pointer;
    box-shadow: var(--card-border) 0px 0px 0px 5px;
}
</style>
