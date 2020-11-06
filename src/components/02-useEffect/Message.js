import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("Se inició el componente");
    return () => {
      console.log("Se salió del compoente");
      //Acá se deben finalizar los procesos que usan mucha memoria
      //Obs, Redux, etc
      //Es el simil del ngOnDestroy
    };
  }, []);

  return (
    <>
      <h3>Eres genial!</h3>
    </>
  );
};

export default Message;