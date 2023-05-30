import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { AIGATEKEEPER_TITLE_FIELD } from "../aiGatekeeper/AiGatekeeperTitle";

export const DigitalCustodianAgentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Agent Status" source="agentStatus" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Last Active Time:" source="lastActiveTime" />
        <TextField label="Last Error" source="lastError" />
        <ReferenceField
          label="My AI Gatekeeper"
          source="aigatekeeper.id"
          reference="AiGatekeeper"
        >
          <TextField source={AIGATEKEEPER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Tasks Completed" source="tasksCompleted" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
