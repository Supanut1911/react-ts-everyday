import React from "react";

const Grid = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

const Row = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

const Column = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

Grid.row = Row;
Grid.col = Column;

const CompoundComponent = () => {
  return (
    <>
      <div>
        <Grid.row>
          <Grid.col>
            <div>Content1</div>
          </Grid.col>
          <Grid.col>
            <div>Content2</div>
          </Grid.col>
          <Grid.col>
            <div>Content3</div>
          </Grid.col>
        </Grid.row>
      </div>
    </>
  );
};

export default CompoundComponent;
