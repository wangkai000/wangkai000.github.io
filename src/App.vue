<script setup lang="ts">
import { NMessageProvider, NNotificationProvider } from "naive-ui";
import { AppSetup } from "./utils/app";

AppSetup();
</script>

<template>
    <NNotificationProvider>
        <NMessageProvider>
            <RouterView />
        </NMessageProvider>
    </NNotificationProvider>
</template>
