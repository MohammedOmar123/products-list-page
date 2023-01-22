import { IsNumber, IsInt, IsString, IsIn, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class QueryDto {
  @Type(() => Number)
  @IsNumber()
  @IsInt()
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
