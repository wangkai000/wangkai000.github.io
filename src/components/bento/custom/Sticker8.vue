<script setup lang="ts"></script>

<template>
    <div
        class="sticker-container h-full w-full bg-white p-[6px] text-[var(--cover-main-color)] dark:bg-[#30363d] rounded-[10px] overflow-hidden"
    >
        <div
            class="box pointer-events-none h-full w-full flex flex-col items-center justify-center rounded-[8px] bg-[var(--cover-main-color)] text-center font-bold font-[fantasy]"
        >
            <!-- 椭圆 -->
            <div
                class="grid w-full flex-1 flex-shrink-0 place-items-center px-[20px]"
            >
                <div
                    class="h-[60px] w-full rounded-[30px] bg-white text-[36px] leading-[60px] dark:bg-[#30363d]"
                >
                    {{ `kai233` }}
                </div>
            </div>
            <!-- 描述 -->
            <div
                class="h-1/4 max-h-[42px] w-full flex-shrink-0 border-4 border-[var(--cover-main-color)] rounded-[10px] border-solid bg-white p-[2px] dark:bg-[#30363d]"
            >
                kai000
            </div>
        </div>
    </div>
</template>

<style scoped>
.sticker-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/noise-light.png);
    background-repeat: repeat;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    color: rgb(255, 250, 221);
}
</style>
