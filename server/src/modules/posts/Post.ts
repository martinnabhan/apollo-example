import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users';

@Entity()
export default class Post {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  title!: string;

  @Column()
  content!: string;

  @ManyToOne(() => User, user => user.posts)
  user!: User;
}
