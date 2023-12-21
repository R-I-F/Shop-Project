import React, { useState, useEffect } from "react";
import { fireBaseContext } from "../FireBase/FireBaseProvider";

const categoriesContext = React.createContext();

export default function CategoriesContext({ children }) {
  const getAllInDB = React.useContext(fireBaseContext).getAllDocsInDb
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    getAllInDB(0)
    .then((res) => {
      return res.map((item)=>{return item.category.name})})
    .then(data=>{
      setCategories([...new Set(data)])
      setLoading(false)})
  }, []);
        return (
        <categoriesContext.Provider value={categories}>
          {children}
        </categoriesContext.Provider>
        )
}
export { categoriesContext }
