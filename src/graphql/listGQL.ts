import { gql } from "@apollo/client";

export const MEDIA_LIST = gql`
  query MediaList ($search: String) {
    media: Page(page:1, perPage: 15){
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      },
      media(sort: SEARCH_MATCH, search: $search, isAdult: false){
        id
        title{
          romaji
          english
          native
          userPreferred
        }
        coverImage{
          extraLarge
          large
          medium
          color
        }
        startDate{
          year
          month
          day
        }
        endDate{
          year
          month
          day
        }
        bannerImage
        season
        seasonYear
        description
        type
        format
        status(version:2)
        episodes
        duration
        chapters
        volumes
        genres
        isAdult
        averageScore
        popularity
        mediaListEntry{
          id
          status
        }
        nextAiringEpisode{
          airingAt
          timeUntilAiring
          episode
        }
        studios(isMain:true){
          edges{
            isMain
            node{
              id
              name
            }
          }
        }
      }
    }
  }
`

export const LAST_UPDATE_LIST = gql`
  query MediaList( $id: Int) {
    Media( id: $id) {
      id
      idMal
    }
  }
`

export const MEDIA_TREND_LIST = gql`
  query TrendList ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      mediaTrends {
        mediaId
        trending
        popularity
        media {
          id
          idMal
          isAdult
          genres
          source
          bannerImage
          coverImage {
            extraLarge
            large
            medium
            color
          }
          title {
            romaji
          }
        }
      }
    }
  }
`

export const ANIME_LIST = gql`
  query PageList ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media {
        id
        idMal
        isAdult
        genres
        source
        bannerImage
        coverImage {
          extraLarge
          large
          medium
          color
        }
        title {
          romaji
        }
      }
    }
  }
`

export const TRENDING_ANIME = gql`
  query TrendingAnime (
    $season:MediaSeason,
    $seasonYear:Int,
    $nextSeason:MediaSeason,
    $nextYear:Int
  ){
    trending:Page(page:1 ,perPage:6){
      media(sort:TRENDING_DESC, type:ANIME, isAdult:false){
        ...media
      }
    }
    season:Page(page:1,perPage:4){
      media(season:$season, seasonYear:$seasonYear, sort:POPULARITY_DESC, type:ANIME, isAdult:false ){
        ...media
      }
    }
    nextSeason:Page(page:1, perPage:6){
      media(season:$nextSeason, seasonYear:$nextYear, sort:POPULARITY_DESC, type:ANIME, isAdult:false){
        ...media
      }
    }
    popular:Page(page:1,perPage:6){
      media(sort:POPULARITY_DESC, type:ANIME, isAdult:false){
        ...media
      }
    }
    top:Page(page:1, perPage:5){
      media(sort:SCORE_DESC, type:ANIME, isAdult:false){
        ...media
      }
    }
  }
  fragment media on Media{
    id
    title{
      romaji
      english
      native
      userPreferred
    }
    coverImage{
      extraLarge
      large
      medium
      color
    }
    startDate{
      year
      month
      day
    }
    endDate{
      year
      month
      day
    }
    bannerImage
    season
    seasonYear
    description
    type
    format
    status(version:2)
    episodes
    duration
    chapters
    volumes
    genres
    isAdult
    averageScore
    popularity
    mediaListEntry{
      id
      status
    }
    nextAiringEpisode{
      airingAt
      timeUntilAiring
      episode
    }
    studios(isMain:true){
      edges{
        isMain
        node{
          id
          name
        }
      }
    }
  }
`