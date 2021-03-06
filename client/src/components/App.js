import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

export default function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="streams/new" element={<StreamCreate />} />
          <Route path="streams/edit/:id" element={<StreamEdit />} />
          <Route path="streams/delete/:id" element={<StreamDelete />} />
          <Route path="streams/:id" element={<StreamShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

