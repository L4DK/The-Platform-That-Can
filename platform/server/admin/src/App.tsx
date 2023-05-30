import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AiGatekeeperList } from "./aiGatekeeper/AiGatekeeperList";
import { AiGatekeeperCreate } from "./aiGatekeeper/AiGatekeeperCreate";
import { AiGatekeeperEdit } from "./aiGatekeeper/AiGatekeeperEdit";
import { AiGatekeeperShow } from "./aiGatekeeper/AiGatekeeperShow";
import { DigitalCustodianAgentList } from "./digitalCustodianAgent/DigitalCustodianAgentList";
import { DigitalCustodianAgentCreate } from "./digitalCustodianAgent/DigitalCustodianAgentCreate";
import { DigitalCustodianAgentEdit } from "./digitalCustodianAgent/DigitalCustodianAgentEdit";
import { DigitalCustodianAgentShow } from "./digitalCustodianAgent/DigitalCustodianAgentShow";
import { IdeaViewerGuestList } from "./ideaViewerGuest/IdeaViewerGuestList";
import { IdeaViewerGuestCreate } from "./ideaViewerGuest/IdeaViewerGuestCreate";
import { IdeaViewerGuestEdit } from "./ideaViewerGuest/IdeaViewerGuestEdit";
import { IdeaViewerGuestShow } from "./ideaViewerGuest/IdeaViewerGuestShow";
import { IdeaCollaboratorDevList } from "./ideaCollaboratorDev/IdeaCollaboratorDevList";
import { IdeaCollaboratorDevCreate } from "./ideaCollaboratorDev/IdeaCollaboratorDevCreate";
import { IdeaCollaboratorDevEdit } from "./ideaCollaboratorDev/IdeaCollaboratorDevEdit";
import { IdeaCollaboratorDevShow } from "./ideaCollaboratorDev/IdeaCollaboratorDevShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"The Platform:"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="AiGatekeeper"
          list={AiGatekeeperList}
          edit={AiGatekeeperEdit}
          create={AiGatekeeperCreate}
          show={AiGatekeeperShow}
        />
        <Resource
          name="DigitalCustodianAgent"
          list={DigitalCustodianAgentList}
          edit={DigitalCustodianAgentEdit}
          create={DigitalCustodianAgentCreate}
          show={DigitalCustodianAgentShow}
        />
        <Resource
          name="IdeaViewerGuest"
          list={IdeaViewerGuestList}
          edit={IdeaViewerGuestEdit}
          create={IdeaViewerGuestCreate}
          show={IdeaViewerGuestShow}
        />
        <Resource
          name="IdeaCollaboratorDev"
          list={IdeaCollaboratorDevList}
          edit={IdeaCollaboratorDevEdit}
          create={IdeaCollaboratorDevCreate}
          show={IdeaCollaboratorDevShow}
        />
      </Admin>
    </div>
  );
};

export default App;
