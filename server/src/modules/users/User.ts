import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Post } from '../posts';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => Post, post => post.user, {
    eager: true,
    cascade: true,
  })
  posts!: Post[];
}
