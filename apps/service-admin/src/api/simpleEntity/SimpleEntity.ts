import { DifferentEntity } from "../differentEntity/DifferentEntity";

export type SimpleEntity = {
  createdAt: Date;
  differentEntities?: Array<DifferentEntity>;
  id: bigint;
  updatedAt: Date;
};
