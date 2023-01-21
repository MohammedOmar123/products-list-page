import {
  IsNumber,
  IsInt,
  IsString,
  IsAlpha,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export class QueryDto {
  @Type(() => Number)
  @IsNumber()
  @IsInt()
  offset: number;

  @IsString()
  @IsOptional()
  @IsAlpha()
  category: string;
}
