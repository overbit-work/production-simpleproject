import { SimpleEntityWhereUniqueInput } from "../simpleEntity/SimpleEntityWhereUniqueInput";

export type DifferentEntityCreateInput = {
  productId?: string | null;
  simpleEntity?: SimpleEntityWhereUniqueInput | null;
};
