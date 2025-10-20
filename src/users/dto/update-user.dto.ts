import { IsEmail, IsOptional, MinLength } from 'class-validator';
import { Match } from '../../utils/match.decorator';

export class UpdateUserDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @MinLength(6)
  password?: string;

  @IsOptional()
  @MinLength(6)
  @Match('password', { message: 'Passwords do not match' })
  confirmPassword?: string;
}
