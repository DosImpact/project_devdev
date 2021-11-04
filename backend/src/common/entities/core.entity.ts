import { IsDateString, IsNumber } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  DeleteDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class CoreEntity {
  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @IsDateString()
  @UpdateDateColumn({ type: 'timestamptz' }) // defaultType : withoutTZ(offset을 무시하겠다.)
  updateAt: Date;

  @IsDateString()
  @CreateDateColumn({ type: 'timestamptz' })
  createAt: Date;

  @IsDateString()
  @DeleteDateColumn({ type: 'timestamptz' })
  deleteAt: Date;

  @IsNumber()
  @VersionColumn()
  v: number;
}
