import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './LeftNav.css';

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h4>All Category</h4>
      <div className="mt-4">
        {categories.map((category) => (
          <p key={category.id} className="hover-link py-2 ps-4 rounded">
            <Link to={`/category/${category.id}`} className="text-decoration-none link-color fs-5 my-4 fw-semibold">
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
