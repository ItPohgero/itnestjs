/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './../../users/entities/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 100})
  title: string;

  @Column("text")
  body: string;

  @Column("text")
  author: string;

  @Column()
  status: boolean;

  @ManyToOne(type => User, user => user.posts)
    user: User;
}
