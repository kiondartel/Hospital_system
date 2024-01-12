import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  height: calc(100vh);
`;

export const MainContent = styled.main`
  flex-grow: 1; // elemento a crescer e ocupar todo o espaço disponível dentro do contêiner Flexbox.

  overflow-y: auto; // Se o conteúdo for muito longo, permitirá a rolagem
`;
