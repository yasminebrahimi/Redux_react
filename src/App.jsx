import "./App.css";
import CakeContainer from "./components /CakeContainer";
import MilkContainer from "./components /MilkContainer";
import UsersList from "./components /UsersList";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <MilkContainer />
      <hr />
      <UsersList />
    </Provider>
  );
}

export default App;
