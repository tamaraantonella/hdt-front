import React from "react";
import { StoreProps } from "./store.types";
import { PageTitle } from "@/components/PageTitle";
import { CollectionContainer } from "./components/CollectionContainer";
import { Spinner } from "@/components/Spinner";

export const Store: React.FC<StoreProps> = ({ response }) => {
  console.log(response?.data);
  return (
    <div>
      <PageTitle title="Tienda" id="productos" />
      {response?.data ? (
        <CollectionContainer collections={response.data} />
      ) : (
        <Spinner/>
      )}
    </div>
  );
};
