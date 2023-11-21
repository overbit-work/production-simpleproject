import { SimpleEntity as TSimpleEntity } from "../api/simpleEntity/SimpleEntity";

export const SIMPLEENTITY_TITLE_FIELD = "id";

export const SimpleEntityTitle = (record: TSimpleEntity): string => {
  return record.id?.toString() || String(record.id);
};
