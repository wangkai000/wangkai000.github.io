<script setup lang="ts">
const isOpen = ref(false);
</script>

<template>
    <ShadowCard class="!p-[5px]">
        <div
            class="grid h-full w-full place-items-center text-[--text-color]"
            @click="isOpen = true"
        >
            <svg
                class="pointer-events-auto scale-150 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
            >
                <path
                    fill="currentColor"
                    d="M1.981 12.472c-.143.222.115.529.351.413.815-.4 1.604-.823 2.375-1.288.227-.137.476.108.329.328-1.904 2.857-6.632 9.873-1.427 10.333 3.16.279 6.33-2.296 9.304-4.985.219-.197.525.062.361.307-2.42 3.634-6.859 11.056-1.025 11.41 5.074.308 3.904-4.392 15.43-10.738.838-.46 1.102-1.412.892-2.34-.372-1.994-4.135-1.962-6.224-1.414-.255.067-.5-.253-.329-.453 2.546-2.986 9.853-10.44 5.252-12.768C23.219-.77 13.918 8.898 9.965 12.541c-.208.191-.435-.022-.267-.25 1.944-2.638 4.488-5.56 4.945-8.597a1.807 1.807 0 0 0-.238-1.214 2.057 2.057 0 0 0-.971-.854C9.124-.284 4.203 9.028 1.98 12.472Z"
                />
            </svg>
        </div>
        <client-only>
            <!-- <UModal v-model="isOpen"> -->
            <FreeDraw v-if="isOpen" />
            <!-- </UModal> -->
        </client-only>
    </ShadowCard>
</template>
