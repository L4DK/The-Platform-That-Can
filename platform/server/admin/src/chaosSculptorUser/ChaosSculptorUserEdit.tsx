import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ChaosSculptorUserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Completed Tasks" source="CompletedTasks" />
        <DateTimeInput label="Last used" source="lastUsed" />
      </SimpleForm>
    </Edit>
  );
};
