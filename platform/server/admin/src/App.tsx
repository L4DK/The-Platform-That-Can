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
import { ChaosSculptorUserList } from "./chaosSculptorUser/ChaosSculptorUserList";
import { ChaosSculptorUserCreate } from "./chaosSculptorUser/ChaosSculptorUserCreate";
import { ChaosSculptorUserEdit } from "./chaosSculptorUser/ChaosSculptorUserEdit";
import { ChaosSculptorUserShow } from "./chaosSculptorUser/ChaosSculptorUserShow";
import { IdeaSprouterOwnerList } from "./ideaSprouterOwner/IdeaSprouterOwnerList";
import { IdeaSprouterOwnerCreate } from "./ideaSprouterOwner/IdeaSprouterOwnerCreate";
import { IdeaSprouterOwnerEdit } from "./ideaSprouterOwner/IdeaSprouterOwnerEdit";
import { IdeaSprouterOwnerShow } from "./ideaSprouterOwner/IdeaSprouterOwnerShow";
import { AiGatekeeperAgentList } from "./aiGatekeeperAgent/AiGatekeeperAgentList";
import { AiGatekeeperAgentCreate } from "./aiGatekeeperAgent/AiGatekeeperAgentCreate";
import { AiGatekeeperAgentEdit } from "./aiGatekeeperAgent/AiGatekeeperAgentEdit";
import { AiGatekeeperAgentShow } from "./aiGatekeeperAgent/AiGatekeeperAgentShow";
import { DigitalCustodianAgentList } from "./digitalCustodianAgent/DigitalCustodianAgentList";
import { DigitalCustodianAgentCreate } from "./digitalCustodianAgent/DigitalCustodianAgentCreate";
import { DigitalCustodianAgentEdit } from "./digitalCustodianAgent/DigitalCustodianAgentEdit";
import { DigitalCustodianAgentShow } from "./digitalCustodianAgent/DigitalCustodianAgentShow";
import { IdeaViewerGuestList } from "./ideaViewerGuest/IdeaViewerGuestList";
import { IdeaViewerGuestCreate } from "./ideaViewerGuest/IdeaViewerGuestCreate";
import { IdeaViewerGuestEdit } from "./ideaViewerGuest/IdeaViewerGuestEdit";
import { IdeaViewerGuestShow } from "./ideaViewerGuest/IdeaViewerGuestShow";
import { IdeaCollaboratorUserList } from "./ideaCollaboratorUser/IdeaCollaboratorUserList";
import { IdeaCollaboratorUserCreate } from "./ideaCollaboratorUser/IdeaCollaboratorUserCreate";
import { IdeaCollaboratorUserEdit } from "./ideaCollaboratorUser/IdeaCollaboratorUserEdit";
import { IdeaCollaboratorUserShow } from "./ideaCollaboratorUser/IdeaCollaboratorUserShow";
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
          name="ChaosSculptorUser"
          list={ChaosSculptorUserList}
          edit={ChaosSculptorUserEdit}
          create={ChaosSculptorUserCreate}
          show={ChaosSculptorUserShow}
        />
        <Resource
          name="IdeaSprouterOwner"
          list={IdeaSprouterOwnerList}
          edit={IdeaSprouterOwnerEdit}
          create={IdeaSprouterOwnerCreate}
          show={IdeaSprouterOwnerShow}
        />
        <Resource
          name="AiGatekeeperAgent"
          list={AiGatekeeperAgentList}
          edit={AiGatekeeperAgentEdit}
          create={AiGatekeeperAgentCreate}
          show={AiGatekeeperAgentShow}
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
          name="IdeaCollaboratorUser"
          list={IdeaCollaboratorUserList}
          edit={IdeaCollaboratorUserEdit}
          create={IdeaCollaboratorUserCreate}
          show={IdeaCollaboratorUserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
