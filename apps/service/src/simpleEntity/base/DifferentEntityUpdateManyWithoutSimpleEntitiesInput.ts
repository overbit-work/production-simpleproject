/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DifferentEntityWhereUniqueInput } from "../../differentEntity/base/DifferentEntityWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DifferentEntityUpdateManyWithoutSimpleEntitiesInput {
  @Field(() => [DifferentEntityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DifferentEntityWhereUniqueInput],
  })
  connect?: Array<DifferentEntityWhereUniqueInput>;

  @Field(() => [DifferentEntityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DifferentEntityWhereUniqueInput],
  })
  disconnect?: Array<DifferentEntityWhereUniqueInput>;

  @Field(() => [DifferentEntityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DifferentEntityWhereUniqueInput],
  })
  set?: Array<DifferentEntityWhereUniqueInput>;
}

export { DifferentEntityUpdateManyWithoutSimpleEntitiesInput as DifferentEntityUpdateManyWithoutSimpleEntitiesInput };
