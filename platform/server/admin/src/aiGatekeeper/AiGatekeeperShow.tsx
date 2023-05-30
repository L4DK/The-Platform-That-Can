import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { AIGATEKEEPER_TITLE_FIELD } from "./AiGatekeeperTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AiGatekeeperShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AI Status" source="AIStatus" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Created by" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Roles" source="roles" />
        <TextField label="Tasks Completed" source="TasksCompleted" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="DigitalCustodianAgent"
          target="AiGatekeeperId"
          label="Digital Custodians"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
