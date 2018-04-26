

<template>
    <div>
        <p>Hello! {{ name }}</p>
        <a href="#" v-on:click="coolness">CLICK ME</a>   
    </div>
</template>

<script>

module.exports = {
    data: function () {
        return {
            name: "Charlie"
        }
    },
    methods: {
        coolness: function() {
            this.$emit("switch-view", "blah2");
        }
    }
}
</script>



