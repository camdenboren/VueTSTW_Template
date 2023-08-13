import { createApp, ref } from "vue";
createApp({
    setup() {
        const message = ref("Hello, Vue 3!");
        function reverseMessage() {
            message.value = message.value.split("").reverse().join("");
        }
        function notify() {
            alert("navigation was prevented");
        }
        return {
            message,
            reverseMessage,
            notify
        };
    }
}).mount('#app');
