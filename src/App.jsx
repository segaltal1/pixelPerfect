import React from 'react';
import { AppHeader } from './cmps/AppHeader';
import { VideoSearch } from './cmps/VideoSearch';
import { VideoList } from './cmps/VideoList';
import { VideoPlayer } from './cmps/VideoPlayer';
import { AppFooter } from './cmps/AppFooter';
import { videoService } from './services/video.service'
import { AppHero } from './cmps/AppHero'
import { AppMain } from './cmps/AppMain';
import { AppCard } from './cmps/AppCard';
import { AppStart } from './cmps/AppStart';

export class App extends React.Component {
  state = {
    videos: [],
    playingVideo: null
  }

  async componentDidMount() {
    const videos = await videoService.getVideos('Coding Academy')
    this.setState({
      videos,
      playingVideo: videos[0]
    })
  }

  onSearchVideos = async (searchKey) => {
    const videos = await videoService.getVideos(searchKey)
    this.setState({ videos })
  }

  onPlayVideo = (playingVideo) => {
    playingVideo.id += `?autoplay=1`
    this.setState({ playingVideo })
  }

  render() {
    const { videos, playingVideo } = this.state
    return (
      <section className="app">
        <AppHero />
        <AppMain />
        <AppCard />
        <AppStart />
        <AppFooter />
      </section>
    )
  }
}

