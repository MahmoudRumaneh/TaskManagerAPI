import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AdviceService {
  private readonly logger = new Logger(AdviceService.name);

  async getRandomAdvice(): Promise<string> {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      return response.data?.slip?.advice || 'Keep going, you’re doing great!';
    } catch (error) {
      this.logger.error('Failed to fetch advice', error.message);
      return 'Stay positive and keep trying!';
    }
  }
}
