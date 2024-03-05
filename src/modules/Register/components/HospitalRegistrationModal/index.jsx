import { Drawer } from "antd";
import HospitalRegistrationForm from "../../Pages/PatientList/Components/NewPatient";

const HospitalRegistrationModal = ({ open, onClose }) => {
  return (
    <Drawer
      title="Cadastro de Pacientes"
      placement="right"
      onClose={onClose}
      open={open}
      width={720}
    >
      <HospitalRegistrationForm />
    </Drawer>
  );
};

export default HospitalRegistrationModal;
