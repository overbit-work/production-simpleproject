import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SIMPLEENTITY_TITLE_FIELD } from "../simpleEntity/SimpleEntityTitle";

export const DifferentEntityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DifferentEntities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="productId" source="productId" />
        <ReferenceField
          label="simpleEntity"
          source="simpleentity.id"
          reference="SimpleEntity"
        >
          <TextField source={SIMPLEENTITY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
