import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const IdeaViewerGuestCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Company" source="company" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Location" source="Location" />
      </SimpleForm>
    </Create>
  );
};
