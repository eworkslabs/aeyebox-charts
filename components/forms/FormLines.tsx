import type { NextPage } from "next";
import React, { useState, FormEvent } from "react";

async function onSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const response = await fetch("/api/liness", {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
}

async function onPut(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const response = await fetch("/api/lines/1", {
    method: "PUT",
    body: formData,
  });
  const data = await response.json();
}

const FormLocations: NextPage = () => {
  return (
    <div className="bg-[#D9D9D9] flex-1 w-full relative h-[1649px] overflow-hidden text-center text-mid text-darkslategray font-murecho">
      <div className="  h-[213px] flex flex-col  items-start justify-start gap-[23px]   text-lg text-gray">
        <div>
          <form onSubmit={onSubmit}>
            <input type="text" name="company_id" />
            <input type="text" name="name" />
            <button type="submit">Criar</button>
          </form>

          <form onSubmit={onPut}>
            <input type="text" name="id" />
            <input type="text" name="name" />
            <button type="submit">Salvar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLocations;
