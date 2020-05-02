export class Movie {
  name: string;
  _id: "";
  yearOfRelease: number;
  releaseDate: string;
  actors: [
    {
      name: string;
      sex: string;
      dob: string;
      bio: string;
    }
  ];
  producer = {
    name: "",
    sex: "",
    dob: "",
    bio: "",
  };
  plot: string;
}
