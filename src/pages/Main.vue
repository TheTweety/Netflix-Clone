<template>
  <div id="app">
    <Header />
    <NextReleases />
    <div class="title-header">Popular</div>
    <Movies typeMovie="s=avengers"/>
    <div class="title-header">Recomended</div>
    <Movies typeMovie="s=harry"/>
    <div class="title-header">Action</div>
    <Movies typeMovie="s=fast"/>
    <div class="title-header">Adventure</div>
    <Movies typeMovie="s=super" />    
    <div class="title-header">Fighting</div>
    <Movies typeMovie="s=game" />
    <div class="title-header">New Concept</div>
    <Movies typeMovie="s=brain"  />
    <div class="title-header">Family</div>
    <Movies typeMovie="s=all"  />
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
.title-header{
  background: transparent;
  width: fit-content; 
  margin-left: 1vw;
  padding-top: 1vh ;
  padding-bottom: 10px;
  vertical-align: bottom;
      line-height: 1.25vw;
    font-size: 1.4vw; 
    color: #e5e5e5;
    font-weight: 700;
    margin: 0 4% .5em 4%;
    text-decoration: none;
    display: inline-block;
    min-width: 6em;

}
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
