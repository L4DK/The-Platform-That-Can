import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const IdeaCollaboratorDevCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <ReferenceInput source="inATeam.id" reference="User" label="In a team">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Location" source="location" />
      </SimpleForm>
    </Create>
  );
};
