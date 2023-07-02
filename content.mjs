import $iOK4G$emojilib from "emojilib";


const $e538422b2a70898e$var$input_colon = false;
const $e538422b2a70898e$var$colon = /:([^\s]*):/gi;
document.body.addEventListener("input", (event)=>{
    Array.from(document.querySelectorAll("input, textarea")).forEach((input)=>{
        Array.from(input.value.matchAll($e538422b2a70898e$var$colon)).forEach((word)=>{
            const emojiName = word[1];
            const emoji = (0, $iOK4G$emojilib).lib[emojiName];
            if (emoji) input.value = input.value.replace(word[0], emoji.char);
        });
    });
    Array.from(document.querySelectorAll("*[contenteditable]")).forEach((input)=>{
        Array.from(input.textContent.matchAll($e538422b2a70898e$var$colon)).forEach((word)=>{
            const emojiName = word[1];
            const emoji = (0, $iOK4G$emojilib).lib[emojiName];
            if (emoji) input.textContent = input.textContent.replace(word[0], emoji.char);
        });
    });
});


//# sourceMappingURL=content.mjs.map
