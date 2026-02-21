import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
/* import jsforce from "jsforce";

const conn = new jsforce.Connection({
  oauth2: {
    clientId:
      "3MVG9dAEux2v1sLvOwz4LPX_AR2vaUKrPOEVKE0egPEcNf8Si6a.HN9nYUec1NhLr1uVQz9Qnsg_B0tK7kOFZ",
    clientSecret:
      "8F6ED9AF7B6433EE38F2159171CD05E0C1855033CD5359E1EEC38AB4A1BF4BCA",
    redirectUri: "https://google.com",
  },
  loginUrl: "https://orgfarm-012d074c73-dev-ed.develop.lightning.force.com",
});
console.log(conn); */
// conn.login("username", "password", function (err, userInfo) {
//   if (err) {
//     return console.error(err);
//   }
//   // Se estiver certo estara autenticado.
//   console.log(conn.instanceUrl);
//   console.log(conn.accessToken);
//   console.log("User ID: " + userInfo.id);
//   console.log("Org ID: " + userInfo.organizationId);
// });

// conn.query("SELECT Id, Name FROM Account", function (err, result) {
//   if (err) {
//     return console.error(err);
//   }
//   for (var i = 0; i < result.records.length; i++) {
//     var record = result.records[i];
//     console.log("Account Name: " + record.Name);
//   }
// });
const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("aqui");
  }, []);

  const handleHome = () => {
    navigate("/home");
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        <button onClick={handleHome}>Home Page</button>
      </div>
    </div>
  );
};

export default LoginPage;
