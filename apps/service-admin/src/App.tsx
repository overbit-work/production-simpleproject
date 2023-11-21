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
import { SimpleEntityList } from "./simpleEntity/SimpleEntityList";
import { SimpleEntityCreate } from "./simpleEntity/SimpleEntityCreate";
import { SimpleEntityEdit } from "./simpleEntity/SimpleEntityEdit";
import { SimpleEntityShow } from "./simpleEntity/SimpleEntityShow";
import { DifferentEntityList } from "./differentEntity/DifferentEntityList";
import { DifferentEntityCreate } from "./differentEntity/DifferentEntityCreate";
import { DifferentEntityEdit } from "./differentEntity/DifferentEntityEdit";
import { DifferentEntityShow } from "./differentEntity/DifferentEntityShow";
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
        title={"service"}
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
          name="SimpleEntity"
          list={SimpleEntityList}
          edit={SimpleEntityEdit}
          create={SimpleEntityCreate}
          show={SimpleEntityShow}
        />
        <Resource
          name="DifferentEntity"
          list={DifferentEntityList}
          edit={DifferentEntityEdit}
          create={DifferentEntityCreate}
          show={DifferentEntityShow}
        />
      </Admin>
    </div>
  );
};

export default App;
