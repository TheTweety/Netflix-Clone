<template>
  <div id="app">
    <Header />
    <NextReleases />
    <Movies typeMovie="s=avengers" typeDescription="Popular on Netflix" />
    <Movies typeMovie="s=harry" typeDescription="Recomended" />
    <Movies typeMovie="s=fast" typeDescription="Action" />
    <Movies typeMovie="s=super" typeDescription="Adventure" />
    <Movies typeMovie="s=game" typeDescription="Fighting" />
    <Movies typeMovie="s=brain" typeDescription="New Concept" />
    <Movies typeMovie="s=all" typeDescription="Family" />
  </div>
</template>

<script>
import Header from "../components/Header";
import NextReleases from "../components/NextReleases";
import Movies from "../components/Movies";
export default {
  name: "App",
  components: {
    Header,
    NextReleases,
    Movies
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  background-color: #141414;
  height: 100vh;
}
#app h4 {
  color: #e9e9e9;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 30px;
  padding-bottom: 30px;
}
@media only screen and (max-width: 599px) {
  #app h4 {
    font-size: 14px;
  }
}
</style>
