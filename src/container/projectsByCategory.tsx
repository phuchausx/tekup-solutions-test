import Container from "components/Container";
import ProjectList from "components/ProjectList";
import Tabs, { Tab } from "components/Tabs";
import React, { useEffect, useState } from "react";
import { getCategoriesService } from "services/categories";
import { CategoriesDataTypes } from "services/categories/types";
import { getProductsService } from "services/products";
import { ProductsDataTypes } from "services/products/types";

const ProjectsByCategory: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [indexActive, setIndexActive] = useState(0);
  const [dataProjectList, setDataProjectList] = useState<ProductsDataTypes[]>(
    []
  );
  const [dataTabList, setDataTabList] = useState<CategoriesDataTypes[]>([]);

  useEffect(() => {
    const fetchTabsApi = async () => {
      const result = await getCategoriesService();
      result.unshift({ id: 0, name: "All" });
      setDataTabList(result);
    };
    fetchTabsApi();
  }, []);

  useEffect(() => {
    const fetchProductsApi = async () => {
      setIsLoading(true);

      const result = await getProductsService(
        indexActive > 0 ? indexActive : undefined
      );
      setDataProjectList(result);
      setIsLoading(false);
    };
    fetchProductsApi();
  }, [indexActive]);

  return (
    <div className="projectsByCategory">
      <Container>
        {dataTabList && dataTabList.length > 0 && (
          <Tabs>
            {dataTabList.map((item, index) => (
              <Tab
                key={`tab-${index.toString()}`}
                label={item.name}
                active={index === indexActive}
                handleClick={() => setIndexActive(index)}
              />
            ))}
          </Tabs>
        )}
        {isLoading ? (
          <p style={{ textAlign: "center", fontSize: "20px" }}>Loading...</p>
        ) : (
          <ProjectList dataList={dataProjectList} />
        )}
      </Container>
    </div>
  );
};

export default ProjectsByCategory;
