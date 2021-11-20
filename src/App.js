import React from "react";
import "./styles/styles.scss";
import { IKContext } from "imagekitio-react";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <IKContext
      publicKey="public_lGafPttRIS/xR8KMgg+uSkT1IGw="
      urlEndpoint="https://ik.imagekit.io/0lswtnkkmck"
      authenticationEndpoint="https://ik.imagekit.io/0lswtnkkmck"
    >
      <div className="App">
        <AppRouter />
      </div>
    </IKContext>
  );
}

export default App;
