import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contact = [
    {
      id: "1",
      name: "sean",
      email: "sean@blahblah.com",
    },
    {
      id: "2",
      name: "tim",
      email: "tim@blahblah.com",
    },
  ];
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts={contact} />
    </div>
  );
}

export default App;
