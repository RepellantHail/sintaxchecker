import React from 'react';

export default function ResultRow({ label, value }) {
  return (
    <div className="row text-start">
      <div className="col-md-6">{label +" :"}</div>
      <div className="col-md-6">{value}</div>
    </div>
  );
}
