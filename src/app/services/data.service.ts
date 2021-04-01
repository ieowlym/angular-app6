import {Feature} from "../classes/feature";
import {Short} from "../classes/short";
import {Reading} from "../classes/read";
import {Injectable} from "@angular/core";
import {LoggingService} from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    //private loggingService: LoggingService
  ) {}

  getShortFilms() {
    let sfList:Short[];
    sfList=[
      new Short(1,"Mushoku Tensei: Isekai Ittara Honki Dasu",1,12),
      new Short(2,"The Promised Neverland",2,12),
      new Short(3,"Jujutsu Kaisen",1,24),
      new Short(4,"Vinland Saga",1,24),
      new Short(5,"Criminal Minds",1,20),
      new Short(6,"The Queen's Gambit",1,7),
      new Short(7,"JoJo’s Bizarre Adventure",5,39)
    ];
//    this.loggingService.log('List of shorts: ' + sfList);

    return sfList;
  }

  getFeaturedFilms() {
    let ffList:Feature[];
    ffList=[
      new Feature(1,"Tenki no ko","Makoto Sinkai","animated"),
      new Feature(2,"Ride Your Wave","Masaaki Yuasa","animated"),
      new Feature(3,"2+1","Yugo Jelen","comedy"),
      new Feature(4,"The Foreigner","Jackie Chan","action thriller")
    ];
//    this.loggingService.log('List of films: ' + ffList);

    return ffList;
  }

  getReadings(){
    let rList:Reading[];
    rList=[
      new Reading(1,"unOrdinary","webtoon"),
      new Reading(2,"True Beauty","webtoon"),
      new Reading(3,"Inferno","book"),
      new Reading(4,"Cheese in the Trap","webtoon"),
      new Reading(5,"The One","book"),
      new Reading(6,"Love or Hate","manga"),
      new Reading(2,"True Beauty","webtoon")
    ];
//    this.loggingService.log('List of readings: ' + rList);

    return rList;
  }

}
