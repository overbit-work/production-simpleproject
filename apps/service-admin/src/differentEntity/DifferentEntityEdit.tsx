import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SimpleEntityTitle } from "../simpleEntity/SimpleEntityTitle";

export const DifferentEntityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
