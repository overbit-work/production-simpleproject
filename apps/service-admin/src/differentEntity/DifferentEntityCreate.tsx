import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SimpleEntityTitle } from "../simpleEntity/SimpleEntityTitle";

export const DifferentEntityCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="productId" source="productId" />
        <ReferenceInput
          source="simpleEntity.id"
          reference="SimpleEntity"
          label="simpleEntity"
        >
          <SelectInput optionText={SimpleEntityTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
