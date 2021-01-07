<template>
  <section id="iq-trending" class="s-margin">
    <b-container fluid>
        <b-row>
          <b-col sm="12"></b-col>
        </b-row>
    </b-container>
  </section>
</template>
<script>
import MovieOverview from '../../../../StaticData/json/MovieOverview'
export default {
  name: 'Details',
  components: {
  },
  mounted () {
    var tabEl = document.getElementsByClassName('tranding-tab-nav')
    Array.from(tabEl).map((elem) => {
      elem.addEventListener('shown.bs.tab', function (e) {
        e.target.classList.add('show')
        e.relatedTarget.classList.remove('show')
      })
    })
  },
  data () {
    return {
      items: MovieOverview,
      trendingSlider: [
        require('../../../../assets/images/frontend/trending/01.jpg'),
        require('../../../../assets/images/frontend/trending/02.jpg'),
        require('../../../../assets/images/frontend/trending/03.jpg'),
        require('../../../../assets/images/frontend/trending/04.jpg'),
        require('../../../../assets/images/frontend/trending/05.jpg'),
        require('../../../../assets/images/frontend/trending/06.jpg')
      ],
      episodData: [
        { image: require('../../../../assets/images/frontend/episodes/01.jpg'), title: 'Episode 1', mb: '2.25m', text: 'Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing' },
        { image: require('../../../../assets/images/frontend/episodes/02.jpg'), title: 'Episode 2', mb: '2.25m', text: 'Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing' },
        { image: require('../../../../assets/images/frontend/episodes/03.jpg'), title: 'Episode 3', mb: '2.25m', text: 'Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing' },
        { image: require('../../../../assets/images/frontend/episodes/04.jpg'), title: 'Episode 4', mb: '2.25m', text: 'Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing' },
        { image: require('../../../../assets/images/frontend/episodes/05.jpg'), title: 'Episode 5', mb: '2.25m', text: 'Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing' }
      ],
      selected: 3,
      sessonOption: [
        { id: 1, value: 'season1', text: 'Season 1' },
        { id: 2, value: 'season2', text: 'Season 2' },
        { id: 3, value: 'season3', text: 'Season 3' }
      ],
      trendingOption1: {
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '#trending-slider',
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
      trendingOption: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#trending-slider-nav'
      }
    }
  }
}
</script>
