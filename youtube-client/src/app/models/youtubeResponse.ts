import IYoutubeVideo from './youtubeVideo';

export default interface IYoutubeResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number
  };
  items: IYoutubeVideo[];
}
