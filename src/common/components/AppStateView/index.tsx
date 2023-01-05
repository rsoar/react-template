import React from "react";

export type RequestStatus = "idle" | "loading" | "error" | "success";

interface IAppStateViewProps {
  status: RequestStatus;
  children: React.ReactNode;
}

export const AppStateView = ({ status, children }: IAppStateViewProps) => {
  return (
    <div>
      {status == "loading" && <span>Carregando</span>}
      {status == "error" && (
        <p>
          Opss... <br></br> Houve um erro ao processar a requisição. <br></br>
          Atualize a página e tente novamente
        </p>
      )}
      {status == "success" && children}
    </div>
  );
};
