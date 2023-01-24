import {
  IsNumber,
  IsInt,
  IsString,
  IsIn,
  IsOptional,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class QueryDto {
  @Type(() => Number)
  @IsNumber()
  @IsInt()
  @Min(0)
  offset: number;

  @IsString()
  @IsOptional()
  category: string;

  @IsString()
  @IsOptional()
  @IsIn(['ASC', 'DESC', ''])
  price: string;

  @IsString()
  @IsOptional()
  @IsIn(['ASC', 'DESC', ''])
  name: string;
}
