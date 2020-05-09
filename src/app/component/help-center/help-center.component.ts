import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.scss'],
})
export class HelpCenterComponent implements OnInit {
  what_is_imdb: string =
    'IMDb is the worlds most popular and authoritative source for movie, TV and celebrity content, designed to help fans explore the world of movies and shows and decide what to watch. Our searchable database includes millions of movies, TV and entertainment programs and cast and crew members. We help you jog your memory about a movie, show, or person on the tip of your tongue, find the best movie or show to watch next, and empower you to share your entertainment knowledge and opinions with the world’s largest community of fans.';

  how_to_register: string =
    'Easily create an IMDb account using your email address • Watch hundreds of movies and TV-episodes for free now via IMDb TV  • Get personalized recommendations and discover new movies and shows you will love• Create your Watchlist to track everything you want to watch and get notified when movies open in theaters• Rate all the movies and shows you have seen to improve your recommendations• Share a review of your favorite movies and shows with the worlds largest community of entertainment fans• Contribute data to IMDb that will be seen by millions of people and get cool badges';

  delete_imdb_account: string =
    'To delete your IMDb account please visit Delete your account and click "Permanently Delete my Account". Please note that once your IMDb account is deleted, it cannot be recovered. Login methods with alternate providers provide an alternative method for logging into an existing or new IMDb account.Once the account has been deleted all of the associated ratings, lists and user reviews will be removed from IMDb. Any other factual data submissions submitted by the account will be retained.';
  constructor() {}

  ngOnInit() {}
}
