export class Feature {
  id: number;
  name: string;
  author: string;
  type: string;

  constructor(id: number,
              name: string,
              author: string,
              type: string){
    this.id=id;
    this.name=name;
    this.author=author;
    this.type=type;
  }
}
