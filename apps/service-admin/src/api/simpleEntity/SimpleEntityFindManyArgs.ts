import { SimpleEntityWhereInput } from "./SimpleEntityWhereInput";
import { SimpleEntityOrderByInput } from "./SimpleEntityOrderByInput";

export type SimpleEntityFindManyArgs = {
  where?: SimpleEntityWhereInput;
  orderBy?: Array<SimpleEntityOrderByInput>;
  skip?: number;
  take?: number;
};
