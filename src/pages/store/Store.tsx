import React from "react";
import { StoreProps } from "./store.types";
import { PageTitle } from "@/components/PageTitle";
import { CollectionContainer } from "./components/CollectionContainer";
import { Spinner } from "@/components/Spinner";

export const Store: React.FC<StoreProps> = ({
  response,
  isLoading,
  isStoreOpen,
}) => {
  if (!isStoreOpen) {
    return (
      <div>
        <PageTitle title="Tienda" id="productos" />
        <h1>La tienda se encuentra cerrada</h1>
        <p>Los pedidos en la tienda se pueden hacer:</p>
        <p>Los días lunes para retirar los días miércoles</p>
        <p>Los días jueves para retirar los días sabados</p>
      </div>
    );
  }
  if (isLoading) return <Spinner />;

  return (
    <div>
      <PageTitle title="Tienda" id="productos" />
      {response?.data && <CollectionContainer collections={response.data} />}
    </div>
  );
};
