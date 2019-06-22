import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Post } from '../posts';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  public id!: string;

  @Column()
  public email!: string;

  @Column()
  public password!: string;

  @OneToMany(() => Post, post => post.user, {
    eager: true,
    cascade: true,
  })
  public posts!: Post[];
}
