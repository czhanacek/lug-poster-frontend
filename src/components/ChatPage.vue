

<template>
    <div>
        <h3>You need to arrive at {{ time }}</h3>
        <h3>Time Remaining: 0 minutes</h3>
        <hr>
        <p>Latitude: {{ latitude }}</p>   
        <p>Latitude: {{ longitude }}</p>   
        <br />
        <h3>Landmark: {{ landmark_title }}</h3>
        <p v-if="this.special_instructions != ''">Special Instructions: {{ special_instructions }}</p>

        <iframe width=100% height=100% frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" :src="'https://maps.google.com/maps?q=' + latitude + ',' + longitude + '&hl=es;z=14&amp;output=embed'">
        </iframe>
    </div>
</template>

<script>





module.exports = {
    data: function () {
        return {
            time: "10:00pm",
            latitude: 46.733064,
            longitude: -117.156799,
            landmark_title: "A neat place",
            special_instructions: "Meet your friend inside the ice cream shop"
        }
    },
    mount: function() {
        

       
    },

    methods: {
        coolness: function() {
            this.$emit("switch-view", "result-page");
        }
    }
}
</script>



