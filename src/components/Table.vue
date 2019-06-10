<template>
  <div class="table">
    <router-link to="/new"> <AddBtn></AddBtn></router-link>
    <table>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Surname</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      <tr v-bind:key="user.id" v-for="user in users">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.username }}</td>
        <td>{{  user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>
          <router-link to="/edit"><a href="#"><img class="edit" src="../assets/edit.svg" alt=""></a></router-link>
        </td>
        <td>
          <a href="#" @click="deleteUser(user)"><img class="del" src="../assets/delete.svg" alt=""></a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import AddBtn from '../components/AddBtn'
export default {
  name: 'Table',
  components: {
    AddBtn
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    deleteUser (user) {
      const index = this.users.indexOf(user)
      confirm('Are you sure you want to delete this User?') && this.users.splice(index, 1)
    }
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json()
      })
      .then(data => {
          this.users = data
      })
      .catch(err => {
          alert(err);
      })
  },

}
</script>

<style scoped>
  table {
     border-collapse: collapse;
     width: 100%;
     text-align: center;
  }
  th {
    height: 40px;
    border: 1px solid #000;
    color: #000;
    background: rgba(177, 182, 179, 0.719);
  }
  td {
    border: 1px solid #000;
  }
  tr {
    height: 30px;
  }
  tr:hover {
    background-color: #f5f5f5;
  }

  .edit,
  .del {
    width: 17px;
    height: 20px;
  }

  .edit:hover,
  .del:hover {
    width: 23px;
    height: 23px;
  }
   
</style>
