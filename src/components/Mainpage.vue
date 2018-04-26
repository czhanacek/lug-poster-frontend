

<template>
    <div>
        <h3>Title</h3>
        <input v-model.trim="name" placeholder="Title">
        <hr>
        <h4>Date</h4>
        <input v-model.trim="date" placeholder="Date">
        <hr>
        <h4>Time</h4>
        <input v-model.trim="time" placeholder="Time">
        <hr>
        <h4>Location</h4>
        <input v-model.trim="location" placeholder="Sloan 169">
        <hr>
        <h4>Description</h4>
        <textarea v-model.trim="description" placeholder="Description"></textarea>
        <hr>
        <input type="checkbox" id="pizza-checkbox" v-model="pizza">
        <label for="pizza-checkbox">Pizza provided at event</label>
        <br />
        
    </div>
</template>



<script>




module.exports = {
    data: function () {
        return {
            name: "",
            date: "",
            time: "",
            location: "",
            description: "",
            pizza: false,
            photo_url: "",
            facebook_url: "",
            gcal_url: "",
            website_url: ""
        }
    },

    mounted: function () {
        
        
    }
        
}
</script>



