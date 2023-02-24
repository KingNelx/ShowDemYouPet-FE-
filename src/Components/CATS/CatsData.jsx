import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CatsData = () => {
  const [cats, setCats] = useState([]);
  const loadAllCats = async() => {
    const result = await axios.get("http://localhost:8080/queryAllCats")
    setCats(result.data)
  };

  useEffect( () => {
    loadAllCats()
  }, [])

  return (
    <div className="container mt-5 text-center">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Owner Name</th>
            <th scope="col">Pet Name</th>
            <th scope="col">Pet Gender</th>
            <th scope="col">Pet Age</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {cats.map((cat, index) => (
            <tr>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{cat.ownerName}</td>
              <td>{cat.petName}</td>
              <td>{cat.petGender}</td>
              <td>{cat.petAge}</td>
              <td>
                <button type="button" class="btn btn-outline-primary">
                  VIEW
                </button>
                <button type="button" class="btn btn-outline-success mx-2">
                  UPDATE
                </button>
                <button type="button" class="btn btn-outline-danger">
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/otherPets"> Go Back </Link>
    </div>
  );
};

export default CatsData;