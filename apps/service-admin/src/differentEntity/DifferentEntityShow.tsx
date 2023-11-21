import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SIMPLEENTITY_TITLE_FIELD } from "../simpleEntity/SimpleEntityTitle";

export const DifferentEntityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
