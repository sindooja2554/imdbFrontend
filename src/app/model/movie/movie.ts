import { Actor } from "../actor/actor";

export class Movie {
  name: string;
  _id: "";
  yearOfRelease: number;
  releaseDate: string;
  actors: Array<Actor> = [];
  producer = {
    name: "",
    sex: "",
    dob: "",
    bio: "",
  };
  plot: string;
}
