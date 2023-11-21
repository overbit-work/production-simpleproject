import { DifferentEntityListRelationFilter } from "../differentEntity/DifferentEntityListRelationFilter";
import { BigIntFilter } from "../../util/BigIntFilter";

export type SimpleEntityWhereInput = {
  differentEntities?: DifferentEntityListRelationFilter;
  id?: BigIntFilter;
};
