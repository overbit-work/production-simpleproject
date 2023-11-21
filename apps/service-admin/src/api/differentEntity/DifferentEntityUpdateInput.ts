import { SimpleEntityWhereUniqueInput } from "../simpleEntity/SimpleEntityWhereUniqueInput";

export type DifferentEntityUpdateInput = {
  productId?: string | null;
  simpleEntity?: SimpleEntityWhereUniqueInput | null;
};
