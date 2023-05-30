import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { AIGATEKEEPER_TITLE_FIELD } from "../aiGatekeeper/AiGatekeeperTitle";

export const DigitalCustodianAgentList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Digital Custodians"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
