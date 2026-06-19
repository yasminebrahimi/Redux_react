import "./App.css";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>redux demo</div>
    </Provider>
  );
}

export default App;
