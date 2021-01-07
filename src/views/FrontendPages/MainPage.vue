<template>
  <div>
    <Favorites/>
    <UpComming/>
    <Suggested/>
    <Detail/>
    <Trending/>
    <Thrillers/>
    <Thrillers/>
    <Thrillers/>
  </div>
</template>
<script>
import { core } from '../../config/pluginInit'
import Favorites from './Components/Favorites/Favorite'
import Detail from './Components/Details/Detail'
import Suggested from './Components/Suggested/Suggestion'
import Trending from './Components/Trending/Trending'
import Thrillers from './Components/TvThrillers/Thrillers'
export default {
  name: 'MainPage',
  components: {
    Favorites,
    Detail,
    Suggested,
    Trending,
    Thrillers
  },
  mounted () {
    core.index()
  }
}
</script>
