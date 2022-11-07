import React, { Fragment } from "react";

import data from "./data.json";

const Card = (props) => {
  return (
    <ul>
      {props.data.map((item) => (
        <Fragment key={item.name}>
          <li>
            <div className="card">
              <div className="card-body">
                <img src={item.img} alt="profile" width={"60px"} />
                <h4>{item.name}</h4>
                <h4>{item.designation}</h4>
              </div>

              <div className="card-footer"></div>
              <div></div>
            </div>
            {item.children?.length && <Card data={item.children} />}
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

const Chart = () => {
  return (
    <div className="org-tree">
      <Card data={data} />
    </div>
  );
};

export default Chart;
