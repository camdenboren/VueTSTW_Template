import { createApp , ref } from "vue";
    createApp({
        setup() {
            const message = ref("Hello, Vue 3!"); 
            
            function reverseMessage() : void{
                message.value = message.value.split("").reverse().join("");
            }

            function notify() : void {
                alert("navigation was prevented")
            }
            
            return {
                message,
                reverseMessage,
                notify
            };
        }
    }).mount('#app');