export class Short {
  id: number;
  name: string;
  seasons: number;
  episodes: number;

  constructor(id: number,
              name: string,
              seasons: number,
              episodes: number){
    this.id=id;
    this.name=name;
    this.seasons=seasons;
    this.episodes=episodes;
  }
}
