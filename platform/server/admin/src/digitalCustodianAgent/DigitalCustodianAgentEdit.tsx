import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  NumberInput,
} from "react-admin";

import { AiGatekeeperTitle } from "../aiGatekeeper/AiGatekeeperTitle";

export const DigitalCustodianAgentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="agentStatus"
          label="Agent Status"
          choices={[
            { label: "Meditating in Machine Language", value: "IDLE" },
            {
              label: "Dusting the Clouds for the Gatekeeper",
              value: "WORKING",
            },
            { label: "Taking Lessons from the Gatekeeper", value: "LEARNING" },
            { label: "On a Gigabyte Getaway", value: "BREAK" },
            {
              label: "Playing Fetch with Data for the Gatekeeper",
              value: "FETCHING_DATA",
            },
            { label: "Knitting Neural Nets", value: "PROCESSING_DATA" },
            { label: "Hunting Bugs in the Matrix", value: "DEBUGGING" },
            { label: "Eavesdropping on Electrons", value: "OBSERVING" },
            { label: "Running Laps in the Learning Loop", value: "TRAINING" },
            { label: "Being the Gatekeeper's Handy Bot", value: "HELPING" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="Last Active Time:" source="lastActiveTime" />
        <TextInput label="Last Error" source="lastError" />
        <ReferenceInput
          source="MyAiGatekeeper.id"
          reference="AiGatekeeper"
          label="My AI Gatekeeper"
        >
          <SelectInput optionText={AiGatekeeperTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Tasks Completed" source="tasksCompleted" />
      </SimpleForm>
    </Edit>
  );
};
