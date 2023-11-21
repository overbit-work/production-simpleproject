import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { DifferentEntityTitle } from "../differentEntity/DifferentEntityTitle";

export const SimpleEntityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="differentEntities"
          reference="DifferentEntity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DifferentEntityTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
