import { IsNumber, IsOptional } from 'class-validator';

export class CorePaginationInput {
  @IsNumber()
  @IsOptional()
  skip?: number;

  @IsNumber()
  @IsOptional()
  take?: number;
}
