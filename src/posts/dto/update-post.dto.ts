import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { IsNumberString } from 'class-validator';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @IsNumberString()
  title: string;
}
