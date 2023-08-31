export interface IPageMedia {
  pageInfo: IPageInfo
  media: IMedia[]
}

export interface IPageMediaTrend {
  pageInfo: IPageInfo
  mediaTrends: IMediaTrend[]
}

export interface IMediaTrend {
  __typename: string,
  mediaId: string,
  trending: number,
  popularity: number,
  media: IMedia
}

interface IPageInfo {
  __typename: string,
  currentPage: number,
  hasNextPage: boolean,
  lastPage: number,
  perPage: number,
  total: number,
}

export interface IMedia {
  __typename: string,
  id: string,
  idMal: number,
  title: ITitle,
  bannerImage: string,
  season: string,
  seasonYear: number,
  description: string,
  type: string,
  format: string,
  status: string,
  episodes: number,
  duration: number,
  chapters: number,
  volumes: number,
  genres: string[],
  isAdult: false,
  averageScore: number,
  popularity: number,
  coverImage: ICoverImage,
  mediaListEntry: {
    id: number,
    status: string,
  },
  nextAiringEpisode: {
    airingAt: number,
    timeUntilAiring: number,
    episode: number
  },
  studios: {
    edges: {
      isMain: boolean,
      node: {
        id: string
        name: string
      }
    }[]
  }
}

interface ITitle {
  __typename: string,
  romaji: string
  english: string
  native: string
  userPreferred: string
}

interface ICoverImage {
  extraLarge: string
  large: string
  medium: string
  color: string
}