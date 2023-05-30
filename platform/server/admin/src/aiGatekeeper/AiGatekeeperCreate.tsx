import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { DigitalCustodianAgentTitle } from "../digitalCustodianAgent/DigitalCustodianAgentTitle";

export const AiGatekeeperCreate = (props: CreateProps): React.ReactElement => {
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
        <ReferenceInput
          source="createdBy.id"
          reference="User"
          label="Created by"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="myAgents"
          reference="DigitalCustodianAgent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DigitalCustodianAgentTitle} />
        </ReferenceArrayInput>
        <TextInput label="Roles" source="roles" />
        <NumberInput step={1} label="Tasks Completed" source="TasksCompleted" />
      </SimpleForm>
    </Create>
  );
};
