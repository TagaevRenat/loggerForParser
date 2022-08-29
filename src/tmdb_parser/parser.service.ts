import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { MyLogger } from '../logger/logger.service';
// import { MyLogger } from '';

@Injectable()
export class ParserService {
  constructor(private myLogger: MyLogger) {
    this.myLogger.setContext('ParserService');
  }

  static async getFilmInfo(): Promise<void> {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/475557?api_key=b40bcd1b7a69127917daf2a39a52c832&language=en-US`,
    );
    interface Film {
      title: string;
    }
    const film: Film = {
      title: response.data.title,
    };
    console.log(film);
  }
}
