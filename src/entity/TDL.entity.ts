import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TDL {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  task: string;

  @Column()
  state: boolean;
}
