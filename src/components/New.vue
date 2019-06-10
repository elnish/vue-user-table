<template>
    <div>
        <h1>Add new User</h1>
        <Form v-bind:name="this.name"/>
    </div>
</template>

<script>
import Form from '../components/Form'
export default {
    name: 'New',
    data() {
        return {
            name: this.name
        }
    },
    components: {
        Form
    }
}
</script>

<style scoped>
     h1 {
        color: rgb(19, 70, 19);
        text-align: center;
    }
</style>


