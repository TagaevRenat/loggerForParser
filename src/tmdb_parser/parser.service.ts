import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { MyLogger } from '../logger/logger.service';

@Injectable()
export class ParserService {
  constructor(private myLogger: MyLogger) {
    this.myLogger.setContext('ParserService');
  }

  async getFilmInfo(): Promise<void> {
    try {
      const response = await axios.get(
        `https://api.themoiedb.org/3/movie/475557?api_key=b40bcd1b7a69127917daf2a39a52c832&language=en-US`,
      );
      interface Film {
        title: string;
      }
      const film: Film = {
        title: response.data.title,
      };
      // console.log(film);
      if (response.statusText !== 'OK') {
        throw new Error(`response status - ${response.status}`);
      }
      this.myLogger.log('Log message');
    } catch (error) {
      this.myLogger.warn('warn message');
      this.myLogger.error(error, [1, 2, 3]);
      this.myLogger.debug(error);
    }
  }
}
