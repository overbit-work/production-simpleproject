import { DifferentEntity as TDifferentEntity } from "../api/differentEntity/DifferentEntity";

export const DIFFERENTENTITY_TITLE_FIELD = "id";

export const DifferentEntityTitle = (record: TDifferentEntity): string => {
  return record.id?.toString() || String(record.id);
};
