import { ProductCard } from "@/components/ProductCard";
import { Spinner } from "@/components/Spinner";
import { Category, CollectionProducts } from "@/utils/types";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProductProps } from "./products.types";

export const Products: React.FC<ProductProps> = ({
  response: products,
  isLoading,
}) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<Category["name"]>("all");
  const [filteredProducts, setFilteredProducts] = useState<
    CollectionProducts[]
  >([]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value as string);
    if (event.target.value === "all") {
      setFilteredProducts([]);
      return;
    }
    if (products) {
      const filteredProducts = products.filter(
        (product) => product.category.name === event.target.value
      );
      setFilteredProducts(filteredProducts);
    }
  };

  useEffect(() => {
    if (products) {
      const categories = products.map((product) => product.category);
      const uniqueCategories = Array.from(
        new Set(categories.map((category) => category.name))
      );
      setCategories(uniqueCategories);
    }
  }, [products]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {categories && (
        <Box display="flex" margin="20px 0px">
          <FormControl
            fullWidth
            sx={{ minWidth: 120, maxWidth: 350 }}
            variant="standard"
          >
            <Select
              id="select-category"
              value={selectedCategory}
              onChange={handleChange}
              className="w-full capitalize"
            >
              <MenuItem value="all" sx={{ textTransform: "capitalize" }}>
                Todos
              </MenuItem>
              {categories.map((category) => (
                <MenuItem
                  key={category}
                  value={category}
                  sx={{ textTransform: "capitalize" }}
                >
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}

      <div className="lg:grid lg:grid-cols-3 md:flex md:flex-col gap-5 md:flex-row md:flex-wrap grid grid-cols-2">
        {filteredProducts.length > 0 && (
          <>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </>
        )}
        {products && !filteredProducts.length && (
          <>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </>
        )}
      </div>
    </>
  );
};
