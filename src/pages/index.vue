<script setup lang="ts">
import Bento from "./bento.vue";
import Loading from "@/components/normal/Loading.vue";
</script>

<template>
    <div>
        <Suspense>
            <template #default>
                <div>
                    <Bento />
                </div>
            </template>

            <template #fallback>
                <Loading />
            </template>
        </Suspense>
    </div>
</template>

<style scoped></style>
