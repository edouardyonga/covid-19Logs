<template>
  <div id="app">
    <h1>News</h1>
  </div>
</template>

<script>
  // import axios from 'axios';

  export default {
    name: 'app',

    data() {
      return {
        posts: ['asd'],
        errors: []
      }
    },

    // Fetches posts when the component is created.
    created() {

      fetch('http://newsapi.org/v2/everything?' +
          'q=covid-19&' +
          'from=2020-04-16&' +
          'sortBy=popularity&' +
          'apiKey=7553d4c01c5d4238805bdd9b4a944227')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.posts = data.articles[2]
          console.log(data);
        });

      // var url = 'http://newsapi.org/v2/top-headlines?' +
      //     'country=us&' +
      //     'apiKey=7553d4c01c5d4238805bdd9b4a944227';
      // axios.get(url)
      // .then(response => {
      //   // JSON responses are automatically parsed.
      //   this.posts = response.json
      // })
      // .catch(e => {
      //   this.errors.push(e)
      // })

      // async / await version (created() becomes async created())
      //
      // try {
      //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
      //   this.posts = response.data
      // } catch (e) {
      //   this.errors.push(e)
      // }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
