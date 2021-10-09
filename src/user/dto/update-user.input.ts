import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose'

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String)
  id: MongooseSchema.Types.ObjectId;

  @Field({ description: '用户名', nullable: true })
  username?: string;

  @Field({ description: '邮箱地址', nullable: true })
  email?: string;

  @Field({ description: '用户密码', nullable: true })
  password?: string;

  @Field({ description: '头像', nullable: true })
  avator?: string;
}
