import { SidebarContainer, SidebarNav, SidebarLink, UserPhoto } from "./styles";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarNav>
        <UserPhoto />
        <p>Gabriel Lucas</p>
        <SidebarLink to="/pacientes">Pacientes</SidebarLink>
        <SidebarLink to="/exames">Exames</SidebarLink>
        <SidebarLink to="/agendamentos">Agendamentos</SidebarLink>
        <SidebarLink to="/financeiro">Financeiro</SidebarLink>
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;
