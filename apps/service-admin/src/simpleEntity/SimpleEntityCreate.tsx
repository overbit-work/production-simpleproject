import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { DifferentEntityTitle } from "../differentEntity/DifferentEntityTitle";

export const SimpleEntityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
