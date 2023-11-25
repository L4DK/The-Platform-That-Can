import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const IdeaViewerGuestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Company" source="company" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Location" source="Location" />
      </SimpleForm>
    </Edit>
  );
};
