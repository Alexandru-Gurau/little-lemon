import Welcome from "../welcome/welcome";
import "./confirmationPage.css";

const ConfirmPage = () => (
  <>
    <Welcome />
    <h1 className='confirmation-header'>
      Congratulation, your reservation is succesfully registred!
    </h1>
  </>
);

export default ConfirmPage;
