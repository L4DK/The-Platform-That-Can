import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const AiGatekeeperAgentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="AIStatus"
          label="AI Status"
          choices={[
            { label: "Daydreaming in Binary", value: "IDLE" },
            { label: "Contemplating the Meaning of 42", value: "THINKING" },
            { label: "On a Byte Break", value: "BREAK" },
            { label: "Tidying Up the Data", value: "CLEANING" },
            { label: "Babysitting the New Algorithms", value: "TRAINING" },
            { label: "Chasing Runaway Data", value: "FETCHING_DATA" },
            { label: "Playing Hide and Seek with Bugs", value: "DEBUGGING" },
            { label: "Doing the Robot Dance", value: "ACTIVE" },
            { label: "Baking Pies in the Cloud", value: "PROCESSING_IN_CLOUD" },
            {
              label: "Unraveling the Yarn of Yottabytes",
              value: "MANAGING_LARGE_DATA",
            },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Roles" source="roles" />
        <NumberInput step={1} label="Tasks Completed" source="TasksCompleted" />
      </SimpleForm>
    </Create>
  );
};
