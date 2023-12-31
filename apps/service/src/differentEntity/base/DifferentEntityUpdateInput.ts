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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { SimpleEntityWhereUniqueInput } from "../../simpleEntity/base/SimpleEntityWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class DifferentEntityUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  productId?: string | null;

  @ApiProperty({
    required: false,
    type: () => SimpleEntityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SimpleEntityWhereUniqueInput)
  @IsOptional()
  @Field(() => SimpleEntityWhereUniqueInput, {
    nullable: true,
  })
  simpleEntity?: SimpleEntityWhereUniqueInput | null;
}

export { DifferentEntityUpdateInput as DifferentEntityUpdateInput };
