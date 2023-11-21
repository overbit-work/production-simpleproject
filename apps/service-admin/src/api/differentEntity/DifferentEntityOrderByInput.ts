import { SortOrder } from "../../util/SortOrder";

export type DifferentEntityOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  simpleEntityId?: SortOrder;
  updatedAt?: SortOrder;
};
