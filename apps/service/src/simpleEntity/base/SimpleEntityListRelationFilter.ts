/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SimpleEntityWhereInput } from "./SimpleEntityWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SimpleEntityListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SimpleEntityWhereInput,
  })
  @ValidateNested()
  @Type(() => SimpleEntityWhereInput)
  @IsOptional()
  @Field(() => SimpleEntityWhereInput, {
    nullable: true,
  })
  every?: SimpleEntityWhereInput;

  @ApiProperty({
    required: false,
    type: () => SimpleEntityWhereInput,
  })
  @ValidateNested()
  @Type(() => SimpleEntityWhereInput)
  @IsOptional()
  @Field(() => SimpleEntityWhereInput, {
    nullable: true,
  })
  some?: SimpleEntityWhereInput;

  @ApiProperty({
    required: false,
    type: () => SimpleEntityWhereInput,
  })
  @ValidateNested()
  @Type(() => SimpleEntityWhereInput)
  @IsOptional()
  @Field(() => SimpleEntityWhereInput, {
    nullable: true,
  })
  none?: SimpleEntityWhereInput;
}
export { SimpleEntityListRelationFilter as SimpleEntityListRelationFilter };