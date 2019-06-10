<template>
    <div>
        <form @submit="addUser">
            <fieldset>
                <legend>Fill the fields</legend>
                <label for="name">Name: </label><br/>
                <input v-model="name" type="text" name="name" id="name"><br/>
                <label for="surname">Surname: </label><br/>
                <input v-model="surname" type="text" name="surname" id="surname"><br/>
                <label for="phone">Phone: </label><br/>
                <input v-model="phone" type="tel" name="phone" id="phone"><br/>
                <label for="email">Email: </label><br/>
                <input v-model="email" type="email" name="email" id="email"><br/>
                <input type="submit" value="Add">
            </fieldset>
        </form>
    </div>
</template>

<script>
export default {
    name: 'New',
    data() {
        return {
            name: '',
            surname: '',
            email: '',
            phone: ''
        }
    },
     methods: {
        addUser(e) {
            e.preventDefault();
            const newUser = {
                name: this.name,
                surname: this.suename,
                phone: this.phone,
                email: this.email
            }
            this.$emit('add-user', newUser);
        }
    }
}
</script>

<style scoped>
    fieldset {
        margin: 0 auto;
        width: 300px;
        border: 1px dotted #ccc;
    }
    label {
        font-size: 20px;
    }
    input[type="text"],
    input[type="email"],
    input[type="tel"]
   {
        padding: 10px 10px 10px 25px;
        width: 350px;
        font-size: 16px;
        margin-bottom: 15px;
        outline: none;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    input[type="text"]:focus,
    input[type="email"]:focus,
    input[type="tel"]:focus {
        box-shadow: 0 0 0 1px rgba(12, 153, 66, 0.459);
    }

    input[type='submit'] {
        width: 100px;
        height: 50px;
        outline: none;
        border: none;
        border-radius: 4px;
        color: #fff;
        background: rgb(39, 92, 23);
    }

    input[type='submit']:hover {
        background: rgb(12, 160, 32);
        cursor: pointer;
    }
</style>


