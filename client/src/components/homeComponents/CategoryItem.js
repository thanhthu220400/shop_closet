import { Title } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { Link } from "react-router-dom";
import { listCategories } from "../../Redux/Actions/CategoryActions";

const CategoryItem = ({ item }) => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {loading ? (
                  <div className="mb-5">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    {categories.map((category) => (
                      <div
                        className="shop col-lg-4 col-md-6 col-sm-6"
                        key={category._id}
                      >
                        <div className="border-product">
                          {" "}
                          <div className="shopBack">
                            {" "}
                            <img src={category.image} />
                          </div>
                          <div className="shoptext">
                            <h2 style={{ fontSize: "24px" }}>
                              {category.name}
                            </h2>
                            <Link to={`/categories/${category._id}`}>
                              <button className="--btn-cate">XEM THÊM</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
