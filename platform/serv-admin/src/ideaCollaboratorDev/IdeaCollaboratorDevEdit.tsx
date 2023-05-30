import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const IdeaCollaboratorDevEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <ReferenceInput source="inATeam.id" reference="User" label="In a team">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Location" source="location" />
      </SimpleForm>
    </Edit>
  );
};
