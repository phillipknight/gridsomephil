<template>
 
<div class="typewriter">
    <p> {{ typewriterCopy }} </p>
</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
export default {
  name: 'TypeWriter',
  props: ['typewriterCopy'],
}
</script>
<style>
/* purloined from Geoff GRaham https://codepen.io/geoffgraham/pen/jrWwWM */
.typewriter {
display: flex;    
}
.typewriter p {
  color: var(--body-copy);
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid var(--body-copy); /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  animation: 
    typing 3.5s steps(30, end),
    blink-caret .5s step-end infinite;
max-width: fit-content;
width:fit-content;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color:var(--body-copy) }
}

</style>


