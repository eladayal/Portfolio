<template>
  <div
    class="!left-auto !right-1 lg:right-5 !bottom-1 lg:!bottom-5 scale-75 lg:scale-90"
    id="bthn"
    lang="en"
  ></div>
</template>

<script setup>
function hostageTicker() {
  var scriptEl = document.createElement("script");
  scriptEl.type = "text/javascript";
  scriptEl.src = "https://bringthemhomenow.net/1.1.0/hostages-ticker.js";
  scriptEl.setAttribute(
    "integrity",
    "sha384-DHuakkmS4DXvIW79Ttuqjvl95NepBRwfVGx6bmqBJVVwqsosq8hROrydHItKdsne"
  );
  scriptEl.setAttribute("crossorigin", "anonymous");
  document.getElementsByTagName("head")[0].appendChild(scriptEl);
}

onMounted(() => {
  hostageTicker();
});
</script>
