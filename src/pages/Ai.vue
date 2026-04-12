<script setup lang="ts">
import { nextTick, ref } from "vue";
import { Icon } from "@iconify/vue";
import { NButton, useMessage } from "naive-ui";

// ────────────────────────────────────────────
// 类型定义
// ────────────────────────────────────────────
interface Message {
    id: number;
    role: "user" | "assistant" | "error";
    content: string;
    time: string;
}

// ────────────────────────────────────────────
// AI 配置（开发中）
// ────────────────────────────────────────────
const selectedModel = ref("MiniMax2.7");

// ────────────────────────────────────────────
// 对话状态
// ────────────────────────────────────────────
let idCounter = 0;
const messages = ref<Message[]>([
    {
        id: idCounter++,
        role: "assistant",
        content: "你好！我是 AI 分身，有什么可以帮助你的吗？",
        time: formatTime(new Date()),
    },
]);

const inputText = ref("");
const messagesEndRef = ref<HTMLElement | null>(null);
const textareaRef = ref<HTMLTextAreaElement | null>(null);

const message = useMessage();

// ────────────────────────────────────────────
// 工具函数
// ────────────────────────────────────────────
function formatTime(date: Date): string {
    return date.toLocaleTimeString("zh-CN", {
        hour: "2-digit",
        minute: "2-digit",
    });
}

function _scrollToBottom() {
    nextTick(() => {
        messagesEndRef.value?.scrollIntoView({ behavior: "smooth" });
    });
}

function autoResize() {
    const el = textareaRef.value;
    if (!el || !el.style) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
}

// ────────────────────────────────────────────
// 发送消息
// ────────────────────────────────────────────
async function sendMessage() {
    message.info("AI对话功能正在紧张开发中，敬请期待！");
}

// 按 Enter 发送（Shift+Enter 换行）
function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
}

// 清空对话
function clearMessages() {
    idCounter = 0;
    messages.value = [
        {
            id: idCounter++,
            role: "assistant",
            content: "对话已清空，我们重新开始吧！",
            time: formatTime(new Date()),
        },
    ];
}
</script>

<template>
    <div
        class="min-h-screen flex flex-col items-center px-3 sm:px-4 py-6 sm:py-8 bg-gray-50 dark:bg-gray-900 rounded-xl max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto transition-colors duration-300"
    >
        <div
            class="w-full max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] flex flex-col px-3 sm:px-4 md:px-6"
            style="height: calc(100vh - 100px); min-height: 400px"
        >
            <!-- 顶部标题栏 -->
            <div
                class="flex items-center justify-between mb-4 px-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-gray-100 dark:border-gray-700/50 transition-all duration-300"
            >
                <div class="flex items-center gap-2 sm:gap-3">
                    <div
                        class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-md ring-2 ring-violet-500/20"
                    >
                        <Icon
                            icon="carbon:bot"
                            class="text-white text-sm sm:text-xl"
                        />
                    </div>
                    <div>
                        <h1
                            class="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-100 leading-tight"
                        >
                            AI分身
                        </h1>
                        <p
                            class="text-xs text-gray-400 dark:text-gray-500 truncate max-w-[120px] sm:max-w-none"
                        >
                            由 {{ selectedModel }} 驱动
                        </p>
                    </div>
                </div>
                <div class="flex items-center gap-1 sm:gap-2">
                    <button
                        class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
                        @click="clearMessages"
                    >
                        <Icon icon="lucide:trash-2" class="w-3.5 h-3.5" />
                        <span class="hidden sm:inline">清空</span>
                    </button>
                </div>
            </div>

            <!-- 消息列表区域 -->
            <div
                class="flex-1 overflow-y-auto rounded-2xl border border-gray-100 dark:border-gray-700/60 bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm p-3 sm:p-4 space-y-3 sm:space-y-4 transition-colors duration-300"
            >
                <TransitionGroup name="msg">
                    <div
                        v-for="msg in messages"
                        :key="msg.id"
                        class="flex gap-2 sm:gap-3"
                        :class="[
                            msg.role === 'user'
                                ? 'flex-row-reverse'
                                : 'flex-row',
                        ]"
                    >
                        <!-- 头像 -->
                        <div
                            class="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-sm sm:text-base shadow-sm transition-transform duration-300 hover:scale-105"
                            :class="[
                                msg.role === 'user'
                                    ? 'bg-gradient-to-br from-violet-500 to-indigo-600'
                                    : msg.role === 'error'
                                      ? 'bg-gradient-to-br from-red-500 to-orange-500'
                                      : 'bg-gradient-to-br from-blue-500 to-cyan-500',
                            ]"
                        >
                            <img
                                v-if="msg.role === 'assistant'"
                                src="/logo.png"
                                alt="AI分身"
                                class="w-full h-full object-cover rounded-xl"
                            />
                            <Icon
                                v-else
                                :icon="
                                    msg.role === 'user'
                                        ? 'carbon:user'
                                        : 'carbon:warning'
                                "
                                class="text-white"
                            />
                        </div>

                        <!-- 气泡 -->
                        <div
                            class="max-w-[85%] sm:max-w-[80%] md:max-w-[78%] flex flex-col"
                            :class="[
                                msg.role === 'user'
                                    ? 'items-end'
                                    : 'items-start',
                            ]"
                        >
                            <div
                                class="px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap break-words shadow-sm transition-all duration-200 hover:shadow-md"
                                :class="[
                                    msg.role === 'user'
                                        ? 'bg-gradient-to-br from-violet-500 to-indigo-600 text-white rounded-tr-sm'
                                        : msg.role === 'error'
                                          ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800/50 rounded-tl-sm'
                                          : 'bg-gray-100 dark:bg-gray-700/50 text-gray-800 dark:text-gray-200 rounded-tl-sm',
                                ]"
                            >
                                {{ msg.content }}
                            </div>
                            <span
                                class="text-xs text-gray-400 dark:text-gray-500 mt-1 px-1"
                                >{{ msg.time }}</span
                            >
                        </div>
                    </div>
                </TransitionGroup>
                <div ref="messagesEndRef" />
            </div>

            <!-- 输入区域 -->
            <div class="mt-3">
                <div
                    class="flex items-end gap-2 p-2 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition-all duration-300 focus-within:border-violet-400 dark:focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-500/20"
                >
                    <textarea
                        ref="textareaRef"
                        v-model="inputText"
                        placeholder="输入消息，Enter 发送，Shift+Enter 换行..."
                        rows="1"
                        class="flex-1 bg-transparent border-none outline-none resize-none text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 py-2 px-3 text-sm sm:text-base"
                        @keydown="handleKeydown"
                        @input="autoResize"
                    />
                    <button
                        class="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
                        @click="sendMessage"
                    >
                        <Icon
                            icon="lucide:send"
                            class="w-4 h-4 sm:w-5 sm:h-5"
                        />
                    </button>
                </div>
                <p
                    class="text-center text-xs text-gray-400 dark:text-gray-500 mt-2 px-2"
                >
                    AI 可能产生错误内容，请注意甄别
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 消息出现动画 */
.msg-enter-active {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.msg-enter-from {
    opacity: 0;
    transform: translateY(12px) scale(0.96);
}

/* 加载点弹跳 */
@keyframes bounce {
    0%,
    80%,
    100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-6px);
    }
}
.animate-bounce {
    animation: bounce 1.2s infinite ease-in-out;
}

/* 滚动条美化 */
.overflow-y-auto::-webkit-scrollbar {
    width: 4px;
}
.overflow-y-auto::-webkit-scrollbar-track {
    background: transparent;
}
.overflow-y-auto::-webkit-scrollbar-thumb {
    background: rgba(139, 92, 246, 0.2);
    border-radius: 2px;
}
.overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: rgba(139, 92, 246, 0.4);
}
</style>
