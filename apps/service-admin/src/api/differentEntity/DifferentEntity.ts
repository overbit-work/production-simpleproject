import { SimpleEntity } from "../simpleEntity/SimpleEntity";

export type DifferentEntity = {
  createdAt: Date;
  id: string;
  productId: string | null;
  simpleEntity?: SimpleEntity | null;
  updatedAt: Date;
};
