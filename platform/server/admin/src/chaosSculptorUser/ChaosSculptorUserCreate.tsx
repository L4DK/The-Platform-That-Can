import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ChaosSculptorUserCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Completed Tasks" source="CompletedTasks" />
        <DateTimeInput label="Last used" source="lastUsed" />
      </SimpleForm>
    </Create>
  );
};
