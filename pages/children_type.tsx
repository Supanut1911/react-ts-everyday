import React, { useState } from "react";

type props = {
  header: React.ReactNode;
  siderbar: React.ReactElement;
  footer: string;
  render: (value: boolean) => React.ReactNode;
};

const Example = ({
  header,
  siderbar,
  footer,
  children,
  render,
}: React.PropsWithChildren<props>) => {
  console.log("children", children);

  const [state, setState] = useState(false);
  return (
    <>
      <div>{header}</div>
      <div>{siderbar}</div>
      <div>children is {children}</div>
      <div>{footer}</div>
      {render(state)}
    </>
  );
};

const ChildrenType = () => {
  return (
    <>
      <div>
        <Example
          header={<div>test</div>}
          siderbar={<h1>hi</h1>}
          footer={"string"}
          render={() => {
            return true;
          }}
        />
      </div>
    </>
  );
};

export default ChildrenType;
