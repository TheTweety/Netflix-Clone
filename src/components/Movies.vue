<template>
  <div id="newMovies">
    <div id="slide">
      <h1>{{ typeDescription }}</h1>
      <div v-show="showLoading" id="loadingMovie">
        <Spinner />
      </div> 

    <VueSlickCarousel  id="movieDiv" v-if="movies!=undefined && movies.length>0" v-bind="slickOptions">
        <template #prevArrow="arrowOption">
          <div :id="arrowOption" class="custom-arrow-previous round">
            <a href="#/" ><img src="../assets/previous.png"  />
            </a>
          </div>
        </template>
        <template #nextArrow="arrowOption">
         <div :id="arrowOption" class="custom-arrow-next round">
            <a href="#/" ><img src="../assets/next.png"  /></a>
          </div>
        </template>
          <div v-for="(movie,i) in movies" :key="i" >
             <img :src="movie.Poster" id="imagemPosterSlide" />
          </div>
    </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import Spinner from "../components/Spinner";
import { Movies } from "../services/api";

export default {
  name: "Movies",

  data() {
    return {
      movies: [],
      showLoading: true,
      paginationButtons: false,
      slickOptions: {
        infinite: true,
        slidesToShow: 7,
        mousedrag:true,
        slidesToScroll: 5,
        touchThreshold: 5,
        lazyLoad:"ondemand",
        adaptiveHeight:true,
        arrows:true
      }
    };
  },
  props: ["typeMovie", "typeDescription"],
  components: {
    VueSlickCarousel,
    Spinner
  },
  async mounted() {
    this.showLoading = true;
    try {
      const response = await Movies(this.typeMovie).get();
      this.movies = response.data.Search;
    } catch (error) {
      console.error(error);
    } finally {
      this.showLoading = false;
    }
  },
  methods: {
    showDetail(_id) {
      this.$router.push({ name: "Detail", params: { id: _id } });
    },
    removeIdDuplicate() {
      return String(Math.random());
    }
  }
};
</script>
<style>
a {
  text-decoration: none;
  display: inline-block;
  padding: 8px 8px;
}
.custom-arrow-next {
    width: 40px;  
    border-radius: 50%;
    height: 40px;
    position: absolute;
    z-index: 1;
    top: 130px;
    background-color: #dc1a27;
    right: -20px;
  
}
.custom-arrow-previous {
    width: 40px;
    border-radius: 50%;
    height: 40px;
    position: absolute;
    z-index: 1;
    top: 130px;
    background-color:#dc1a27;
    left: -60px;
  
}
.img-wrapper img {
  margin: auto;
  width: 200px;
  height: 100px;
  background-image: linear-gradient(gray 100%, transparent 0);
} 
#slide {
  width: 90%;
  height: 100%;
  text-align: center;
  margin: auto;
}
#newMovies {
  width: 100%;
  height: 100%;
  text-align: center;
  margin: auto;
}
#buttonNexts {
  color: #f1f;
}
#newMovies h1 {
  color: #cacaca;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 15px;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#loadingMovie {
  display: flex;
  justify-content: center;
  align-items: center;
}
#movieDiv {
  margin-top: 23px;
  padding-left: 20px;
  flex: 1;
}

#imagemPosterSlide {
  border-radius: 15px;
  transition: 0.5s;
  height: 300px;
  margin-bottom: 20px;
  width: 200px;
}
#imagemPosterSlide:hover {
  transform: scale(1.1);
  cursor: pointer;
}
@media only screen and (max-width: 699px) {
  #imagemPosterSlide {
    height: 250px;
    width: 160px;
  }
  #newMovies h1 {
    font-size: 15px;
    margin-bottom: 5px;
    margin-top: 5px;
  }
  .custom-arrow-next {
   display: none;
  
}

.custom-arrow-previous {
    
   display: none;
}

}
</style>
