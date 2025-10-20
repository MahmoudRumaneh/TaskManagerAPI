import { IsEmail, IsNotEmpty, MinLength, Validate } from 'class-validator';
import { Match } from '../../utils/match.decorator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @MinLength(6)
  @Match('password', { message: 'Passwords do not match' })
  confirmPassword: string;
}
