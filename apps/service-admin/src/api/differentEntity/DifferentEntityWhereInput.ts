import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SimpleEntityWhereUniqueInput } from "../simpleEntity/SimpleEntityWhereUniqueInput";

export type DifferentEntityWhereInput = {
  id?: StringFilter;
  productId?: StringNullableFilter;
  simpleEntity?: SimpleEntityWhereUniqueInput;
};
