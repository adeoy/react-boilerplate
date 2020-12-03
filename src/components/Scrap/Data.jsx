import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";

import DataView from '../Wrappers/DataView';

import { deleteTask } from "../../actions";

const Data = ({ setForm, tasks, deleteTask, setModalOpen }) => {
  const data = tasks.map((sale, idx) => {
    sale["#"] = idx + 1;
    return sale;
  });

  const columns = [
    { title: "#", data: "#" },
    { title: "Status", data: "status" },
    {
      title: "Page URL",
      format: (row) => (
        <a
          href={row.page_url}
        >{row.page_url}</a>
      ),
    },
    { title: "Count", data: "count" },
    {
      title: "Created",
      format: (row) => <Moment locale="es-us" format="LLLL">{row.created_at}</Moment>,
    },
    {
      title: "Finished",
      format: (row) => <Moment locale="es-us" format="LLLL">{row.finished_at}</Moment>,
    },
  ];

  return (
    <DataView
      data={data}
      columns={columns}
      setForm={setForm}
      deleteItem={deleteTask}
      setModalOpen={setModalOpen}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = {
  deleteTask
};

export default connect(mapStateToProps, mapDispatchToProps)(Data);
